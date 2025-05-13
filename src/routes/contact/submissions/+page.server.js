import db from '$lib/db.js';

export async function load() {
    const submissions = await db.getAllContactSubmissions();
    return { submissions };
}