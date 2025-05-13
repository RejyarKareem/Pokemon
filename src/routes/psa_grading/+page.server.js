import db from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
  create: async ({ request }) => {
      const form = await request.formData();
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

      // Pflicht-Validierung
      if (!name ||!email ||!cardName ||!cardSet ||!language ||!serviceLevel ||!street ||!postal ||!city ||!country) { 
        return { error: 'Alle Pflichtfelder müssen ausgefüllt werden.' };
    }

      // Speichern
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

     // Nach erfolgreicher Einreichung zurück zur Kontakt-Seite
    throw redirect(303, '/psa_grading/submissions');
    }
};