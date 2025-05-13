<script lang="ts">
  // form enthält eventuelle Fehlermeldungen oder Erfolg-Flag von der Action
  let { form } = $props();
</script>

<!-- Hintergrund mit Farbverlauf und zentrierter Ausrichtung -->
<div class="detail-bg text-white d-flex align-items-center justify-content-center">
  <div class="container py-5" style="max-width: 600px;">
    <!-- Button zum Zurückkehren zur Übersichtseite -->
    <div class="mb-4">
      <a href="/boosterpacks" class="btn btn-secondary btn-sm">
        ← Zurück zur Übersicht
      </a>
    </div>

    <!-- Seitenüberschrift -->
    <h1 class="display-4 fw-bold text-center mb-4">Neues Boosterpack hinzufügen</h1>

    <!-- Formular zum Erstellen eines neuen Boosterpacks -->
    <form method="POST" action="?/create" enctype="multipart/form-data">
      <!-- Eingabefeld: Name des Boosterpacks -->
      <div class="mb-3 text-start">
        <label for="name" class="form-label">Name</label>
        <input
          id="name"
          name="name"
          class="form-control"
          required
          placeholder="z.B. Sonne & Mond – Team Up"
        />
      </div>

      <!-- Eingabefeld: Sprache des Boosterpacks -->
      <div class="mb-3 text-start">
        <label for="language" class="form-label">Sprache</label>
        <input
          id="language"
          name="language"
          class="form-control"
          required
          placeholder="Deutsch oder Englisch"
        />
      </div>

      <!-- Eingabefeld: Anzahl Karten pro Pack (Zahl) -->
      <div class="mb-3 text-start">
        <label for="cards_per_pack" class="form-label">Karten pro Pack</label>
        <input
          type="number"
          id="cards_per_pack"
          name="cards_per_pack"
          class="form-control"
          required
          placeholder="z.B. 10"
        />
      </div>

      <!-- Eingabefeld: Kurzbeschreibung des Inhalts -->
      <div class="mb-3 text-start">
        <label for="content" class="form-label">Inhalt</label>
        <input
          id="content"
          name="content"
          class="form-control"
          required
          placeholder="z.B. 1 holographische Karte"
        />
      </div>

      <!-- Eingabefeld: Altersempfehlung -->
      <div class="mb-3 text-start">
        <label for="age_recommendation" class="form-label">Altersempfehlung</label>
        <input
          id="age_recommendation"
          name="age_recommendation"
          class="form-control"
          required
          placeholder="z.B. ab 6 Jahren"
        />
      </div>

      <!-- Textarea: Detaillierte Produktbeschreibung -->
      <div class="mb-3 text-start">
        <label for="description" class="form-label">Produktbeschreibung</label>
        <textarea
          id="description"
          name="description"
          class="form-control"
          rows="3"
          required
          placeholder="z.B. Enthält seltene und besondere Karten"
        ></textarea>
      </div>

      <!-- Datei-Input: Optionales Bild-Upload -->
      <div class="mb-3 text-start">
        <label for="image" class="form-label">Bild auswählen (optional)</label>
        <input
          type="file"
          id="image"
          name="image"
          class="form-control"
          accept="image/*"
        />
      </div>

      <!-- Absenden-Button -->
      <div class="text-center">
        <button type="submit" class="btn btn-warning btn-lg px-5">
          Boosterpack erstellen
        </button>
      </div>
    </form>

    <!-- Anzeigen von Fehler- oder Erfolgsmeldungen -->
    {#if form?.error}
      <p class="mt-3 text-danger">{form.error}</p>
    {/if}
    {#if form?.success}
      <p class="mt-3 text-success">Boosterpack wurde erfolgreich erstellt!</p>
    {/if}
  </div>
</div>

<style>
  /* Hintergrund-Gradient für die Detail-Seite */
  .detail-bg {
    background: linear-gradient(135deg, #ffcb05, #3b4cca);
    min-height: 100vh;
  }

  /* Fokus-Rahmen für alle Form-Controls */
  .form-control:focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 203, 5, 0.5);
    border-color: #ffcb05;
  }
</style>