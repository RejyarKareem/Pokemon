import db from '$lib/db.js';

export const actions = {
  default: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());

    const userData = {
      _id: formData.username,
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
        land: formData.land
      }
    };

    await db.createUser(userData);

    return { success: true };
  }
  
};