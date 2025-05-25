import db from '$lib/db.js'; // Import der Datenbankzugriffslogik

const userId = 'pokefan'; // Fester Benutzername (vereinfachte Authentifizierung)

export async function load() {
  // Abruf des Benutzerprofils anhand der Benutzer-ID
  const user = await db.getUserById(userId);

  // Falls kein Benutzer gefunden wurde, wird null zurückgegeben
  if (!user) {
    return { user: null };
  }

  // Rückgabe des Benutzerobjekts an die Svelte-Seite
  return { user };
}