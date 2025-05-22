import db from '$lib/db.js';

const userId = 'pokefan'; // 

export async function load() {
  const user = await db.getUserById(userId);

  if (!user) {
    return { user: null };
  }

  return { user };
}