// src/routes/boosterpacks/+page.server.js

// Importiere die Datenbank-Funktionen aus db.js
import db from '$lib/db.js';

/**
 * Load-Funktion, die vor dem Rendern der Seite ausgeführt wird.
 * Hier werden alle Boosterpacks aus der Datenbank geladen.
 */
export async function load() {
  // 1. rufe alle Boosterpacks per db.getAllBoosterpacks() ab
  const boosterpacks = await db.getAllBoosterpacks();

  // 2. gib die geladenen Daten in der Console aus (Debugging)
  console.log('packs:', boosterpacks);

  // 3. returne die Daten als Prop an die Svelte-Page (+page.svelte)
  return { boosterpacks };
}
