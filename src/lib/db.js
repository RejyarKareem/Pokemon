import { MongoClient, ObjectId } from "mongodb";
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);
await client.connect();
const db = client.db("Pokemon");

//////////////////////////////////////////
// Boosterpack-Funktionen
//////////////////////////////////////////

/**
 * Alle Boosterpacks abrufen
 * @returns {Promise<Array>} Array von Boosterpack-Objekten
 */
async function getAllBoosterpacks() {
  const collection = db.collection("boosterpacks");
  let packs = [];
  try {
    packs = await collection.find({}).toArray();
    packs.forEach(pack => {
      pack._id = pack._id.toString();
    });
  } catch (error) {
    console.error("getAllBoosterpacks error:", error);
  }
  return packs;
}

 /* Einzelnes Boosterpack per ID abrufen */
async function getBoosterpackById(id) {
  const collection = db.collection("boosterpacks");
  let pack = null;
  try {
    pack = await collection.findOne({ _id: new ObjectId(id) });
    if (pack) {
      pack._id = pack._id.toString();
    } else {
      console.warn(`No boosterpack with id ${id}`);
    }
  } catch (error) {
    console.error("getBoosterpackById error:", error);
  }
  return pack;
}

/* Neues Boosterpack anlegen*/
async function createBoosterpack(packData) {
  const collection = db.collection("boosterpacks");
  try {
    const result = await collection.insertOne(packData);
    return result.insertedId.toString();
  } catch (error) {
    console.error("createBoosterpack error:", error);
  }
  return null;
}

/* Boosterpack aktualisieren*/
async function updateBoosterpack(packData) {
  const collection = db.collection("boosterpacks");
  try {
    const id = packData._id;
    delete packData._id;
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: packData }
    );
    if (result.matchedCount === 0) {
      console.warn(`No boosterpack with id ${id}`);
      return null;
    }
    return id;
  } catch (error) {
    console.error("updateBoosterpack error:", error);
  }
  return null;
}

/* Boosterpack löschen*/
async function deleteBoosterpack(id) {
  const collection = db.collection("boosterpacks");
  try {
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      console.warn(`No boosterpack with id ${id}`);
      return null;
    }
    return id;
  } catch (error) {
    console.error("deleteBoosterpack error:", error);
  }
  return null;
}

//////////////////////////////////////////
// Card-Funktionen
//////////////////////////////////////////

/* Alle Karten abrufen*/
async function getAllCards() {
  const collection = db.collection("cards");
  let cards = [];
  try {
    cards = await collection.find({}).toArray();
    cards.forEach(card => {
      card._id = card._id.toString();
    });
  } catch (error) {
    console.error("getAllCards error:", error);
  }
  return cards;
}

/* Einzelne Karte per ID abrufen */
async function getCardById(id) {
  const collection = db.collection("cards");
  let card = null;
  try {
    card = await collection.findOne({ _id: new ObjectId(id) });
    if (card) {
      card._id = card._id.toString();
    } else {
      console.warn(`No card with id ${id}`);
    }
  } catch (error) {
    console.error("getCardById error:", error);
  }
  return card;
}

/* Neue Karte anlegen*/
async function createCard(cardData) {
  const collection = db.collection("cards");
  try {
    const result = await collection.insertOne(cardData);
    return result.insertedId.toString();
  } catch (error) {
    console.error("createCard error:", error);
  }
  return null;
}

/* Karte aktualisieren*/
async function updateCard(cardData) {
  const collection = db.collection("cards");
  try {
    const id = cardData._id;
    delete cardData._id;
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: cardData }
    );
    if (result.matchedCount === 0) {
      console.warn(`No card with id ${id}`);
      return null;
    }
    return id;
  } catch (error) {
    console.error("updateCard error:", error);
  }
  return null;
}

/* Karte löschen*/
async function deleteCard(id) {
  const collection = db.collection("cards");
  try {
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      console.warn(`No card with id ${id}`);
      return null;
    }
    return id;
  } catch (error) {
    console.error("deleteCard error:", error);
  }
  return null;
}

/* Alle Kontaktformular-Submissions abrufen*/
async function getAllContactSubmissions() {
  const collection = db.collection("contactSubmissions");
  let subs = [];
  try {
    subs = await collection.find({}).toArray();
    subs.forEach(sub => {
      sub._id = sub._id.toString();
      if (sub.createdAt) {
        sub.createdAt = new Date(sub.createdAt).toISOString();
      }
    });
  } catch (error) {
    console.error("getAllContactSubmissions error:", error);
  }
  return subs;
}

/* Neue Kontakt-Submission anlegen*/
async function createContactSubmission(submissionData) {
  const collection = db.collection("contactSubmissions");
  try {
    // Zeitstempel hinzufügen
    submissionData.createdAt = new Date();
    const result = await collection.insertOne(submissionData);
    return result.insertedId.toString();
  } catch (error) {
    console.error("createContactSubmission error:", error);
    return null;
  }
}

/* Alle PSA-Grading‐Anfragen abrufen*/
async function getAllPSAGradingSubmissions() {
  const collection = db.collection("psaGradingSubmissions");
  let subs = [];
  try {
    subs = await collection.find({}).toArray();
    subs.forEach(sub => {
      sub._id = sub._id.toString();
      if (sub.createdAt) sub.createdAt = new Date(sub.createdAt).toISOString();
    });
  } catch (error) {
    console.error("getAllPSAGradingSubmissions error:", error);
  }
  return subs;
}

/* Neue PSA-Grading‐Anfrage anlegen*/
async function createPSAGradingSubmission(gradingData) {
  const collection = db.collection("psaGradingSubmissions");
  try {
    gradingData.createdAt = new Date();
    const result = await collection.insertOne(gradingData);
    return result.insertedId.toString();
  } catch (error) {
    console.error("createPSAGradingSubmission error:", error);
    return null;
  }
}

// Exportiere die Funktionen
export default {
  getAllBoosterpacks,
  getBoosterpackById,
  createBoosterpack,
  updateBoosterpack,
  deleteBoosterpack,
  getAllCards,
  getCardById,
  createCard,
  updateCard,
  deleteCard,
  getAllContactSubmissions,
  createContactSubmission,
  getAllPSAGradingSubmissions,
  createPSAGradingSubmission
};