import db from "$lib/db.js"; // Import der Datenbankfunktionen

export async function load({ url }) {
  // Auslesen der Suchparameter aus der URL
  const set = url.searchParams.get("set"); // z.B. Karten-Edition
  const type = url.searchParams.get("type"); // z.B. Feuer, Wasser, etc.
  const rarity = url.searchParams.get("rarity"); // z.B. Seltenheit der Karte
  const hpMin = url.searchParams.get("hp"); // Mindest-HP-Wert
  const sort = url.searchParams.get("sort"); // Sortierkriterium

  // Aufbau des Filterobjekts für die MongoDB-Abfrage
  const filter = {};
  if (set) filter.set = set;
  if (type) filter.type = type;
  if (rarity) filter.rarity = rarity;

  // Falls gültiger HP-Wert vorhanden: Filter nach Mindest-HP
  if (hpMin && !isNaN(parseInt(hpMin))) {
    filter.hp = { $gte: parseInt(hpMin) };
  }

  // Mögliche Sortieroptionen
  const sortOptions = {
    name_asc: { name: 1 }, // Name aufsteigend
    name_desc: { name: -1 }, // Name absteigend
    hp_asc: { hp: 1 }, // HP aufsteigend
    hp_desc: { hp: -1 }, // HP absteigend
    rarity: { rarity: 1 }, // Seltenheit alphabetisch
  };

  // Wenn kein gültiger Sortierwert angegeben ist, bleibt sortQuery leer
  const sortQuery = sortOptions[sort] ?? {};

  // Abfrage aller Karten mit Filter + Sortierung aus der Datenbank
  const cards = await db.getAllCards(filter, sortQuery);

  // Abfrage für Filteroptionen (distinct Werte für Dropdowns)
  const sets = await db.getDistinctCardSets();
  const types = await db.getDistinctCardTypes();
  const rarities = await db.getDistinctCardRarities();

  // Rückgabe der Daten an die Seite (wird als `data` übergeben)
  return {
    cards,
    filters: {
      sets,
      types,
      rarities,
    },
  };
}
