import db from '$lib/db.js'; // Import der Datenbankfunktionen
import { redirect } from '@sveltejs/kit'; // Umleitung nach erfolgreicher Aktion

// Export der Aktionen für das Formular (z. B. <form method="POST" action="?/create">)
export const actions = {
  // Definiert die Aktion "create", die beim Formular-Submit ausgeführt wird
  create: async ({ request }) => {
    // Formularinhalt auslesen
    const form = await request.formData();

    // Einzelfelder extrahieren und in Strings umwandeln
    const name = form.get('name')?.toString().trim();
    const email = form.get('email')?.toString().trim();
    const message = form.get('message')?.toString().trim();

    // Validierung: Alle Felder müssen ausgefüllt sein
    if (!name || !email || !message) {
      return { error: 'Alle Pflichtfelder müssen ausgefüllt werden.' };
    }

    // Speichern der Eingaben in der Datenbank
    await db.createContactSubmission({
      name,
      email,
      message,
      createdAt: new Date() // Zeitstempel zur Speicherung hinzufügen
    });

    // Nach erfolgreicher Speicherung: Umleitung zur Übersicht
    throw redirect(303, '/contact/submissions'); // 303 = See Other (nach POST)
  }
};