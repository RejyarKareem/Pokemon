import db from '$lib/db.js';

export async function load() {
  const cards = await db.getAllCards();
  console.log('card:', cards);
  return { cards };
}