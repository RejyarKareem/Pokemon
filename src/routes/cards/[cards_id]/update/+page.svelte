<script lang="ts">
  let { data, form } = $props();
  const card = data.card;
</script>

<!-- Haupt-Wrapper mit Farbverlauf und zentriertem Inhalt -->
<div class="detail-bg text-white d-flex align-items-center justify-content-center">
  <div class="container py-5" style="max-width: 600px;">
    <!-- Zurück-Knopf zur Kartenübersicht -->
    <div class="mb-4">
      <a href="/cards" class="btn btn-secondary btn-sm">
        ← Zurück zur Kartenübersicht
      </a>
    </div>

    <!-- Überschrift für die Bearbeitungsseite -->
    <h1 class="display-4 fw-bold text-center mb-4">Karte bearbeiten</h1>

    <!-- Formular zum Aktualisieren der Kartendaten -->
    <form method="POST" action="?/update" enctype="multipart/form-data">
      <!-- Name-Feld, vorausgefüllt mit aktuellem Wert -->
      <div class="mb-3 text-start">
        <label for="name" class="form-label">Name</label>
        <input
          id="name"
          name="name"
          class="form-control"
          required
          value={card.name} 
        />
      </div>

      <!-- Set-/Edition-Feld -->
      <div class="mb-3 text-start">
        <label for="set" class="form-label">Set / Edition</label>
        <input
          id="set"
          name="set"
          class="form-control"
          required
          value={card.set} 
        />
      </div>

      <!-- Typ-Feld -->
      <div class="mb-3 text-start">
        <label for="type" class="form-label">Typ</label>
        <input
          id="type"
          name="type"
          class="form-control"
          required
          value={card.type} 
        />
      </div>

      <!-- Seltenheit-Feld -->
      <div class="mb-3 text-start">
        <label for="rarity" class="form-label">Seltenheit</label>
        <input
          id="rarity"
          name="rarity"
          class="form-control"
          required
          value={card.rarity} 
        />
      </div>

      <!-- HP-Feld als Zahl -->
      <div class="mb-3 text-start">
        <label for="hp" class="form-label">HP</label>
        <input
          type="number"
          id="hp"
          name="hp"
          class="form-control"
          required
          value={card.hp} 
        />
      </div>

      <!-- Bild-Upload: zeigt das aktuelle Bild und ermöglicht optionalen Upload -->
      <div class="mb-3 text-start">
        <p>Aktuelles Bild:</p>
        <img
          src={card.poster}       
          alt={card.name}
          class="img-fluid rounded mb-3"
          style="max-height:200px; object-fit:cover;"
        />
        <label for="image" class="form-label">Neues Bild auswählen (optional)</label>
        <input
          type="file"
          id="image"
          name="image"
          class="form-control"
          accept="image/*" 
        />
      </div>

      <!-- Erstes Attacken-Feld mit Name und Schaden -->
      <div class="mb-3 text-start">
        <label for="attack1Name" class="form-label">Attacke 1</label>
        <input
          id="attack1Name"
          name="attack1Name"
          class="form-control mb-1"
          placeholder="Name"
          required
          value={card.attacks[0]?.name} 
        />
        <input
          id="attack1Damage"
          name="attack1Damage"
          class="form-control"
          placeholder="Schaden"
          required
          value={card.attacks[0]?.damage} 
        />
      </div>

      <!-- Zweites optionales Attacken-Feld -->
      <div class="mb-3 text-start">
        <label for="attack2Name" class="form-label">Attacke 2 (optional)</label>
        <input
          id="attack2Name"
          name="attack2Name"
          class="form-control mb-1"
          placeholder="Name"
          value={card.attacks[1]?.name} 
        />
        <input
          id="attack2Damage"
          name="attack2Damage"
          class="form-control"
          placeholder="Schaden"
          value={card.attacks[1]?.damage} 
        />
      </div>

      <!-- Submit-Button zum Speichern der Änderungen -->
      <div class="text-center">
        <button type="submit" class="btn btn-success btn-lg px-5">
          Änderungen speichern
        </button>
      </div>
    </form>

    <!-- Action-Feedback: Fehler oder Erfolg anzeigen -->
    {#if form?.error}
      <p class="mt-3 text-danger">{form.error}</p>
    {/if}
    {#if form?.success}
      <p class="mt-3 text-success">Karte wurde erfolgreich aktualisiert!</p>
    {/if}
  </div>
</div>

<style>
  /* Hintergrundgradient und volle Höhe */
  .detail-bg {
    background: linear-gradient(135deg, #ffcb05, #3b4cca);
    min-height: 100vh;
  }
  .form-control:focus {
    /* Fokus-Styling für Input-Felder */
    box-shadow: 0 0 0 0.2rem rgba(255, 203, 5, 0.5);
    border-color: #ffcb05;
  }
</style>