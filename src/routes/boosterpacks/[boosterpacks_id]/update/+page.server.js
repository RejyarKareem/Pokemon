// src/routes/boosterpacks/[boosterpacks_id]/+page.server.js

// Import der Datenbank-Funktionen und Node-Modules für Dateizugriff
import db from "$lib/db.js"; // Interface zu MongoDB
import fs from "fs/promises"; // File-System Promises API
import path from "path"; // Pfad-Manipulation
import { redirect, fail } from "@sveltejs/kit"; // SvelteKit Hilfsfunktionen

// Load-Funktion: Lädt die Pack-Daten vor dem Rendern der Seite
export async function load({ params }) {
  const id = params.boosterpacks_id; // ID aus der URL (z.B. /boosterpacks/1234)
  const pack = await db.getBoosterpackById(id); // Datenbankabfrage des Packs
  return { pack }; // Übergabe an die Page als Prop
}

// Aktionen für Formulare: update und delete können hier definiert werden
export const actions = {
  update: async ({ request, params }) => {
    const id = params.boosterpacks_id; // gleiche Pack-ID verwenden
    const form = await request.formData(); // Form-Daten extrahieren

    // === Pflichtfelder aus dem Formular auslesen ===
    const name = form.get("name")?.toString().trim();
    const language = form.get("language")?.toString().trim();
    const cardsPerPack = parseInt(
      form.get("cards_per_pack")?.toString() || "",
      10
    );
    const content = form.get("content")?.toString().trim();
    const ageRecommendation = form.get("age_recommendation")?.toString().trim();
    const description = form.get("description")?.toString().trim();

    // === Optional: Dateiupload verarbeiten ===
    let posterPath = null;
    const file = form.get("image");
    if (file instanceof File && file.size > 0) {
      // Dateiendung und eindeutigen Dateinamen erzeugen
      const ext = path.extname(file.name) || ".jpg";
      const filename = `bp-${Date.now()}${ext}`;
      const buffer = Buffer.from(await file.arrayBuffer());

      // Datei im statischen Ordner ablegen
      const dest = path.join(process.cwd(), "static", "images", filename);
      await fs.writeFile(dest, buffer);
      posterPath = `/images/${filename}`; // Pfad für die DB
    }

    // === Validierung: alle Pflichtfelder müssen gefüllt sein ===
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

    // === Update-Datenobjekt bauen ===
    const updateData = {
      name,
      language,
      cards_per_pack: cardsPerPack,
      content,
      age_recommendation: ageRecommendation,
      product_details: { description },
    };
    if (posterPath) {
      updateData.poster = [posterPath]; // Nur setzen, wenn neue Datei hochgeladen wurde
    }

    // === Datenbank-Update ausführen ===
    await db.updateBoosterpack({ _id: id, ...updateData });

    // Nach erfolgreichem Update zurück zur Übersicht leiten
    throw redirect(303, "/boosterpacks");
  },
};
