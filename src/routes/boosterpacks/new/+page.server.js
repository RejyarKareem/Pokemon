// src/routes/boosterpacks/+page.server.js
import db from "$lib/db.js";
import fs from "fs/promises";
import path from "path";
import { redirect, fail } from "@sveltejs/kit";

export const actions = {
  create: async ({ request }) => {
    // 1. Form-Daten auslesen
    const form = await request.formData();
    const name = form.get("name")?.toString().trim();
    const language = form.get("language")?.toString().trim();
    const cardsPerPack = parseInt(
      form.get("cards_per_pack")?.toString() || "",
      10
    );
    const content = form.get("content")?.toString().trim();
    const ageRecommendation = form.get("age_recommendation")?.toString().trim();
    const description = form.get("description")?.toString().trim();

    // 2. Datei-Handling (Bild-Upload)
    const file = form.get("image");
    let posterPath = "/images/placeholder.jpeg";
    if (file instanceof File && file.size > 0) {
      // Dateiendung und eindeutiger Name
      const ext = path.extname(file.name) || ".jpg";
      const filename = `bp-${Date.now()}${ext}`;
      const buffer = Buffer.from(await file.arrayBuffer());
      // Datei ins static/images-Verzeichnis schreiben
      const dest = path.join(process.cwd(), "static", "images", filename);
      await fs.writeFile(dest, buffer);
      posterPath = `/images/${filename}`;
    }

    // 3. Validierung: alle Pflichtfelder
    if (
      !name ||
      !language ||
      isNaN(cardsPerPack) ||
      !content ||
      !ageRecommendation ||
      !description
    ) {
      return fail(400, {
        error: "Alle Pflichtfelder müssen ausgefüllt werden.",
      });
    }

    // 4. Boosterpack-Objekt erstellen und in DB speichern
    await db.createBoosterpack({
      name,
      language,
      cards_per_pack: cardsPerPack,
      content,
      age_recommendation: ageRecommendation,
      poster: [posterPath], // Array mit Bild-URL
      product_details: { description },
    });

    // 5. Nach Erfolg: Weiterleitung zur Boosterpack-Übersicht
    throw redirect(303, "/boosterpacks");
  },
};
