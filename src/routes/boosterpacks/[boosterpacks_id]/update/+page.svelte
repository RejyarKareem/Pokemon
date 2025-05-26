<script lang="ts">
  // Props: data enthält das geladene Boosterpack, form enthält Action-Ergebnisse
  let { data, form } = $props();
  const pack = data.pack;
</script>

<!-- Wrapper mit Farbverlauf & Zentrierung -->
<div
  class="detail-bg text-white d-flex align-items-center justify-content-center"
>
  <div class="container py-5" style="max-width: 600px;">
    <!-- Zurück-Knopf zur Übersicht aller Boosterpacks -->
    <div class="mb-4">
      <a href="/boosterpacks" class="btn btn-secondary btn-sm">
        ← Zurück zur Übersicht
      </a>
    </div>

    <!-- Seitentitel -->
    <h1 class="display-4 fw-bold text-center mb-4">Boosterpack bearbeiten</h1>

    <!-- Formular zum Aktualisieren des Boosterpacks -->
    <form method="POST" action="?/update" enctype="multipart/form-data">
      <!-- Name-Feld, vorausgefüllt mit aktuellem Wert -->
      <div class="mb-3 text-start">
        <label for="name" class="form-label">Name</label>
        <input
          id="name"
          name="name"
          class="form-control"
          required
          value={pack.name}
        />
      </div>

      <!-- Sprache-Feld -->
      <div class="mb-3 text-start">
        <label for="language" class="form-label">Sprache</label>
        <input
          id="language"
          name="language"
          class="form-control"
          required
          value={pack.language}
        />
      </div>

      <!-- Karten-pro-Pack als Zahl -->
      <div class="mb-3 text-start">
        <label for="cards_per_pack" class="form-label">Karten pro Pack</label>
        <input
          type="number"
          id="cards_per_pack"
          name="cards_per_pack"
          class="form-control"
          required
          value={pack.cards_per_pack}
        />
      </div>

      <!-- Content-Feld -->
      <div class="mb-3 text-start">
        <label for="content" class="form-label">Inhalt</label>
        <input
          id="content"
          name="content"
          class="form-control"
          required
          value={pack.content}
        />
      </div>

      <!-- Altersempfehlung-Feld -->
      <div class="mb-3 text-start">
        <label for="age_recommendation" class="form-label"
          >Altersempfehlung</label
        >
        <input
          id="age_recommendation"
          name="age_recommendation"
          class="form-control"
          required
          value={pack.age_recommendation}
        />
      </div>

      <!-- Bild-Upload: zeigt zuerst das aktuelle Bild an -->
      <div class="mb-3 text-start">
        <p>Aktuelles Bild:</p>
        <img
          src={pack.poster[0]}
          alt={pack.name}
          class="img-fluid rounded mb-3"
          style="max-height: 200px; object-fit: cover;"
        />
        <label for="image" class="form-label"
          >Neues Bild auswählen (optional)</label
        >
        <input
          type="file"
          id="image"
          name="image"
          class="form-control"
          accept="image/*"
        />
      </div>

      <!-- Beschreibung-Textarea, vorausgefüllt -->
      <div class="mb-3 text-start">
        <label for="description" class="form-label">Produktbeschreibung</label>
        <textarea
          id="description"
          name="description"
          class="form-control"
          rows="3"
          required>{pack.product_details.description}</textarea
        >
        <!-- pack.product_details.description -->
      </div>

      <!-- Submit-Button -->
      <div class="text-center">
        <button type="submit" class="btn btn-warning btn-lg px-5">
          Änderungen speichern
        </button>
      </div>
    </form>

    <!-- Fehlermeldung oder Erfolgsmeldung nach Action -->
    {#if form?.error}
      <p class="mt-3 text-danger">{form.error}</p>
    {/if}
    {#if form?.success}
      <p class="mt-3 text-success">
        Boosterpack wurde erfolgreich aktualisiert!
      </p>
    {/if}
  </div>
</div>

<style>
  /* Hintergrund-Gradient und volle Höhe */
  .detail-bg {
    background: linear-gradient(135deg, #ffcb05, #3b4cca);
    min-height: 100vh;
  }
  /* Fokus-Styling für Input-Felder */
  .form-control:focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 203, 5, 0.5);
    border-color: #ffcb05;
  }
</style>
