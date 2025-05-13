// src/routes/boosterpacks/[boosterpacks_id]/+page.server.js

// Import der DB-Schnittstelle und SvelteKit-Utilities
import db from '$lib/db.js';                // Zugriff auf MongoDB-Funktionen
import { redirect, fail } from '@sveltejs/kit'; // Hilfsfunktionen für Fehler und Redirects

// Load-Funktion: Lädt die Daten für ein einzelnes Boosterpack
export async function load({ params }) {
  // 'params.boosterpacks_id' enthält die URL-Variable [boosterpacks_id]
  const pack = await db.getBoosterpackById(params.boosterpacks_id);
  console.log("params", params);          // Debug-Ausgabe der geladenen Parameter
  return { pack };                         // Gibt das Pack als Prop an die Page zurück
}

// Aktionen für Formular-Submissions
export const actions = {
  // Update-Action (Platzhalter - Logik im Request-Handler einfügen)
  update: async ({ request, params }) => {
    const id = params.boosterpacks_id;      // ID des zu aktualisierenden Packs
    const form = await request.formData();  // Extrahiert Form-Daten aus dem Request
    // TODO: Hier Update-Logik (Validierung, db.updateBoosterpack) einfügen
  },

  // Delete-Action: Löscht ein Boosterpack
  delete: async ({ params }) => {
    const id = params.boosterpacks_id;      // ID des zu löschenden Packs

    // DB-Operation: Versucht, das Dokument zu löschen
    const success = await db.deleteBoosterpack(id);
    if (!success) {
      // Wenn Lösch-Operation fehlgeschlagen ist
      return fail(500, { error: 'Löschen fehlgeschlagen.' });
    }

    // Bei Erfolg weiterleiten zur Übersicht aller Boosterpacks
    throw redirect(303, '/boosterpacks');
  }
};