import db from '$lib/db.js';

export async function load() {
  return {
    cards: [] // zuerst keine Karten
  };
}

export const actions = {
  default: async () => {
    const allCards = await db.getAllCards();

    // Simuliere 3 zufällige Karten
    const drawn = [];
    const usedIndexes = new Set();

    while (drawn.length < 3 && drawn.length < allCards.length) {
      const index = Math.floor(Math.random() * allCards.length);
      if (!usedIndexes.has(index)) {
        drawn.push(allCards[index]);
        usedIndexes.add(index);
      }
    }

    return {
      cards: drawn
    };
  }
};