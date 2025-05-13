import db from '$lib/db.js';
import fs from 'fs/promises';
import path from 'path';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
  const id = params.cards_id;
  const card = await db.getCardById(id);
  return { card };
}

export const actions = {
  update: async ({ request, params }) => {
    const id = params.cards_id;
    const form = await request.formData();

    // Basis-Felder
    const name = form.get('name')?.toString().trim();
    const set = form.get('set')?.toString().trim();
    const type = form.get('type')?.toString().trim();
    const rarity = form.get('rarity')?.toString().trim();
    const hpVal = form.get('hp')?.toString().trim();
    const hp = hpVal ? parseInt(hpVal, 10) : NaN;

    // Datei-Upload (optional)
    let posterPath = null;
    const file = form.get('image');
    if (file instanceof File && file.size > 0) {
      const ext = path.extname(file.name) || '.jpg';
      const filename = `card-${Date.now()}${ext}`;
      const buffer = Buffer.from(await file.arrayBuffer());
      const dest = path.join(process.cwd(), 'static', 'images', filename);
      await fs.writeFile(dest, buffer);
      posterPath = `/images/${filename}`;
    }

    // Angriffe zusammenstellen
    const attacks = [];
    const a1n = form.get('attack1Name')?.toString().trim();
    const a1d = form.get('attack1Damage')?.toString().trim();
    if (a1n && a1d) attacks.push({ name: a1n, damage: a1d });
    const a2n = form.get('attack2Name')?.toString().trim();
    const a2d = form.get('attack2Damage')?.toString().trim();
    if (a2n && a2d) attacks.push({ name: a2n, damage: a2d });

    // Validierung
    if (!name || !set || !type || !rarity || isNaN(hp) || attacks.length === 0) {
      return fail(400, { error: 'Alle Pflichtfelder müssen ausgefüllt werden.' });
    }

    // Update-Objekt
    const updateData = { name, set, type, rarity, hp, attacks };
    if (posterPath) {
      updateData.poster = posterPath; // ersetzt altes Bild
    }

    // In DB speichern
    await db.updateCard({ _id: id, ...updateData });

    throw redirect(303, '/cards');

  }
};