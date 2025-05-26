import db from "$lib/db.js";
import { redirect, fail } from "@sveltejs/kit";

/**
 * Load-Funktion: wird aufgerufen, bevor die Page gerendert wird.
 * Lädt das entsprechende Karten-Objekt anhand der URL-Parameter.
 */
export async function load({ params }) {
  // params.cards_id entspricht dem Ordnernamen [cards_id] in der URL
  const card = await db.getCardById(params.cards_id);
  console.log("params", params); // Debug-Ausgabe der Parameter
  return { card }; // Übergabe der Karte als Prop an deine Svelte-Komponente
}

// Definition von Formular-Aktionen (update und delete)
export const actions = {
  /**
   * Update-Action: Hier würdest du die Logik zum Aktualisieren der Karte einfügen.
   * request.formData() enthält alle Formular-Eingaben.
   */
  update: async ({ request, params }) => {
    const id = params.cards_id; // ID der zu aktualisierenden Karte
    const form = await request.formData(); // Extrahiert die Formulardaten
    // TODO: Felder validieren und db.updateCard(...) aufrufen
  },

  /**
   * Delete-Action: Löscht die Karte und leitet bei Erfolg zurück zur Übersicht.
   */
  delete: async ({ params }) => {
    const id = params.cards_id; // ID der zu löschenden Karte

    // Versuche, die Karte aus der DB zu löschen
    const success = await db.deleteCard(id);
    if (!success) {
      // Bei Fehler gib eine 500-Response mit Fehlermeldung zurück
      return fail(500, { error: "Löschen fehlgeschlagen." });
    }

    // Bei Erfolg Redirect zur Karten-Übersichtsseite (HTTP 303)
    throw redirect(303, "/cards");
  },
};
