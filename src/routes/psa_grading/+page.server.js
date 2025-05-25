import db from '$lib/db.js'; // Import der Datenbankfunktionen
import { redirect } from '@sveltejs/kit'; // Für Weiterleitung nach erfolgreicher Einreichung

export const actions = {
  // Aktion zum Erstellen einer neuen PSA-Grading-Einreichung
  create: async ({ request }) => {
    // Auslesen der Formulardaten
    const form = await request.formData();

    // Extraktion und Umwandlung der Felder in Strings
    const name = form.get('name')?.toString().trim();
    const email = form.get('email')?.toString().trim();
    const cardName = form.get('cardName')?.toString().trim();
    const cardSet = form.get('cardSet')?.toString().trim();
    const language = form.get('language')?.toString().trim();
    const serviceLevel = form.get('serviceLevel')?.toString().trim();
    const street = form.get('street')?.toString().trim();
    const postal = form.get('postal')?.toString().trim();
    const city = form.get('city')?.toString().trim();
    const country = form.get('country')?.toString().trim();
    const notes = form.get('notes')?.toString().trim() || '';

    // Validierung: Pflichtfelder dürfen nicht leer sein
    if (
      !name || !email || !cardName || !cardSet ||
      !language || !serviceLevel || !street || !postal ||
      !city || !country
    ) {
      return { error: 'Alle Pflichtfelder müssen ausgefüllt werden.' };
    }

    // Speichern der Einreichung in der Datenbank
    const id = await db.createPSAGradingSubmission({
      name,
      email,
      cardName,
      cardSet,
      language,
      serviceLevel,
      street,
      postal,
      city,
      country,
      notes,
      createdAt: new Date()
    });

    // Weiterleitung nach erfolgreicher Speicherung zur Bestätigungs-/Übersichtsseite
    throw redirect(303, '/psa_grading/submissions');
  }
};