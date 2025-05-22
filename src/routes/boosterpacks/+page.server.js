import db from '$lib/db.js';

export async function load({ url }) {
  // Filter-Parameter auslesen
  const language = url.searchParams.get('language');
  const name = url.searchParams.get('name');
  const cardsPerPack = url.searchParams.get('cards_per_pack');
  const sort = url.searchParams.get('sort');

  // Filterobjekt aufbauen
  const filter = {};
  if (language) filter.language = language;
  if (name) filter.name = name;
  if (cardsPerPack && !isNaN(parseInt(cardsPerPack))) {
    filter.cards_per_pack = parseInt(cardsPerPack);
  }

  // Sortieroptionen definieren
  const sortOptions = {
    name_asc: { name: 1 },
    name_desc: { name: -1 },
    language: { language: 1 },
    cards_asc: { cards_per_pack: 1 },
    cards_desc: { cards_per_pack: -1 }
  };
  const sortQuery = sortOptions[sort] ?? {};

  // Boosterpacks mit Filter + Sortierung abrufen
  const boosterpacks = await db.getAllBoosterpacks(filter, sortQuery);

  // Dropdown-Werte laden
  const languages = await db.getDistinctLanguages();
  const names = await db.getDistinctNames();
  const cardsPerPackOptions = await db.getDistinctCardsPerPack();

  // Rückgabe an die Seite
  return {
    boosterpacks,
    filters: {
      languages,
      names,
      cardsPerPackOptions
    }
  };
}