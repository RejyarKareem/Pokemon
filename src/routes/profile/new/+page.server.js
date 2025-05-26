import db from "$lib/db.js";

export const actions = {
  // Standardaktion zum Verarbeiten des Formulars
  default: async ({ request }) => {
    // Formulardaten auslesen und in ein Objekt umwandeln
    const formData = Object.fromEntries(await request.formData());

    // Strukturierung der empfangenen Daten in ein Benutzerprofil
    const userData = {
      _id: formData.username, // gleichzeitige Verwendung als Primärschlüssel
      username: formData.username,
      anrede: formData.anrede,
      vorname: formData.vorname,
      nachname: formData.nachname,
      geburtstag: formData.geburtstag,
      email: formData.email,
      adresse: {
        strasse: formData.strasse,
        plz: formData.plz,
        ort: formData.ort,
        land: formData.land,
      },
    };

    // Speichern des neuen Profils in der Datenbank
    await db.createUser(userData);

    // Rückmeldung an das Frontend bei Erfolg
    return { success: true };
  },
};
