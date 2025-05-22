import db from '$lib/db.js';

export async function load({ url }) {
  const set = url.searchParams.get('set');
  const type = url.searchParams.get('type');
  const rarity = url.searchParams.get('rarity');
  const hpMin = url.searchParams.get('hp');
  const sort = url.searchParams.get('sort');

  const filter = {};
  if (set) filter.set = set;
  if (type) filter.type = type;
  if (rarity) filter.rarity = rarity;
  if (hpMin && !isNaN(parseInt(hpMin))) {
    filter.hp = { $gte: parseInt(hpMin) };
  }

  // 🔁 Mapping für Sortieroptionen
  const sortOptions = {
    name_asc: { name: 1 },
    name_desc: { name: -1 },
    hp_asc: { hp: 1 },
    hp_desc: { hp: -1 },
    rarity: { rarity: 1 }
  };

  // Fallback, falls kein gültiger Sortkey
  const sortQuery = sortOptions[sort] ?? {};

  // Karten mit Filter und Sortierung laden
  const cards = await db.getAllCards(filter, sortQuery);

  const sets = await db.getDistinctCardSets();
  const types = await db.getDistinctCardTypes();
  const rarities = await db.getDistinctCardRarities();

  return {
    cards,
    filters: {
      sets,
      types,
      rarities
    }
  };
}