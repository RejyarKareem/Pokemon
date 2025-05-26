import db from "$lib/db.js";
import fs from "fs/promises"; // Dateisystem-API für Promise-basierte Dateioperationen
import path from "path"; // Modul zur Pfadmanipulation
import { redirect, fail } from "@sveltejs/kit"; // Utilities für Redirects und Fehlerhandling

export const actions = {
  create: async ({ request }) => {
    // 1. Form-Daten aus dem Request extrahieren
    const form = await request.formData();
    const name = form.get("name")?.toString().trim(); // Kartenname
    const set = form.get("set")?.toString().trim(); // Set/Edition
    const type = form.get("type")?.toString().trim(); // Kartentyp
    const rarity = form.get("rarity")?.toString().trim(); // Seltenheit
    const hpVal = form.get("hp")?.toString(); // HP als String
    const hp = hpVal ? parseInt(hpVal, 10) : NaN; // in Zahl konvertieren

    // 2. Bild-Upload verarbeiten (optional)
    const file = form.get("image"); // Datei-Feld
    let poster = "/images/placeholder.jpeg"; // Standard-Placeholder
    if (file instanceof File && file.size > 0) {
      const ext = path.extname(file.name) || ".jpg"; // Dateiendung
      const filename = `card-${Date.now()}${ext}`; // eindeutiger Dateiname
      const buffer = Buffer.from(await file.arrayBuffer()); // File-Buffer
      const dest = path.join(process.cwd(), "static", "images", filename);
      await fs.writeFile(dest, buffer); // Datei speichern
      poster = `/images/${filename}`; // neuer Pfad
    }

    // 3. Attacken auslesen und in Array sammeln
    const attacks = [];
    const a1n = form.get("attack1Name")?.toString().trim();
    const a1d = form.get("attack1Damage")?.toString().trim();
    if (a1n && a1d) attacks.push({ name: a1n, damage: a1d }); // Attacke 1
    const a2n = form.get("attack2Name")?.toString().trim();
    const a2d = form.get("attack2Damage")?.toString().trim();
    if (a2n && a2d) attacks.push({ name: a2n, damage: a2d }); // Attacke 2 (optional)

    // 4. Validierung: Pflichtfelder müssen gesetzt sein
    if (
      !name ||
      !set ||
      !type ||
      !rarity ||
      isNaN(hp) ||
      attacks.length === 0
    ) {
      // Rückgabe eines 400-Fehlers mit Fehlermeldung
      return fail(400, {
        error: "Alle Pflichtfelder müssen ausgefüllt werden.",
      });
    }

    // 5. Karten-Objekt erstellen und in der DB speichern
    await db.createCard({
      name,
      set,
      type,
      rarity,
      hp,
      poster, // Bild-URL
      attacks, // Array aus Attacke-Objekten
    });

    // 6. Nach erfolgreichem Erstellen Weiterleitung zur Karten-Übersicht
    throw redirect(303, "/cards");
  },
};
