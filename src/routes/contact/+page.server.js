import db from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
  create: async ({ request }) => {
    const form = await request.formData();
    const name = form.get('name')?.toString().trim();
    const email = form.get('email')?.toString().trim();
    const message = form.get('message')?.toString().trim();

    // Validierung
    if (!name || !email || !message) {
      return { error: 'Alle Pflichtfelder müssen ausgefüllt werden.' };
    }

    // Submission in der Datenbank speichern
    await db.createContactSubmission({
      name,
      email,
      message,
      createdAt: new Date()
    });

    // Nach erfolgreicher Einreichung zurück zur Kontakt-Seite
    throw redirect(303, '/contact/submissions');
  }
};