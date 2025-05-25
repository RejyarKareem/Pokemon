import db from '$lib/db.js'; // Import der Datenbankfunktionen
import { redirect } from '@sveltejs/kit'; // Für Weiterleitung nach dem Speichern

// Fester Benutzername (simuliertes Login)
const userId = 'pokefan';

// Ladefunktion für die Seite
export async function load() {
  // Benutzerprofil aus der Datenbank laden
  const user = await db.getUserById(userId);

  // Übergabe des Benutzerobjekts an die Svelte-Seite
  return { user };
}

// Aktionen für Formularverarbeitung
export const actions = {
  // Standardaktion (wird bei <form method="POST"> ausgeführt)
  default: async ({ request }) => {
    // Formulardaten lesen und in ein Objekt umwandeln
    const formData = Object.fromEntries(await request.formData());

    // Strukturieren der Eingaben in ein Benutzerprofilobjekt
    const userData = {
      username: formData.userId,
      anrede: formData.anrede,
      vorname: formData.vorname,
      nachname: formData.nachname,
      geburtstag: formData.geburtstag,
      email: formData.email,
      adresse: {
        strasse: formData.strasse,
        plz: formData.plz,
        ort: formData.ort,
        land: formData.land
      }
    };

    // Aktualisieren des Benutzers in der Datenbank
    await db.updateUser(userId, userData);

    // Nach erfolgreicher Speicherung Umleitung zur Profilseite
    throw redirect(303, '/profile');
  }
};