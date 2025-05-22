import db from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

const userId = 'pokefan'; 

export async function load() {
  const user = await db.getUserById(userId);
  return { user };
}

export const actions = {
  default: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());

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

    await db.updateUser(userId, userData);

    // ✅ Redirect nach erfolgreichem Speichern
    throw redirect(303, '/profile');
  }
};