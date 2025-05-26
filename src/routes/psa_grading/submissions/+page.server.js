import db from "$lib/db.js";

/** Lädt alle eingereichten PSA-Grading-Anfragen */
export async function load() {
  const submissions = await db.getAllPSAGradingSubmissions();
  return { submissions };
}
