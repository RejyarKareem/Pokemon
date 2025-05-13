<script lang="ts">
  // `form` enthält eventuelle Fehler- oder Erfolgsmeldungen von der Server-Action
  let { form } = $props();
</script>

<!-- Wrapper mit Farbverlauf und zentriertem Container -->
<div class="detail-bg text-white d-flex align-items-center justify-content-center">
  <div class="container py-5" style="max-width: 600px;">
    <!-- Zurück-Link zur Kartenübersicht -->
    <div class="mb-4">
      <a href="/cards" class="btn btn-secondary btn-sm">
        ← Zurück zur Kartenübersicht
      </a>
    </div>

    <!-- Seitenüberschrift -->
    <h1 class="display-4 fw-bold text-center mb-4">Neue Pokémon-Karte hinzufügen</h1>

    <!-- Formular zur Kartenerstellung -->
    <form method="POST" action="?/create" enctype="multipart/form-data">
      <!-- Name-Eingabe -->
      <div class="mb-3 text-start">
        <label for="name" class="form-label">Name</label>
        <input id="name" name="name" class="form-control" required placeholder="z.B. Pikachu VMAX" />
      </div>

      <!-- Set/Ecke-Eingabe -->
      <div class="mb-3 text-start">
        <label for="set" class="form-label">Set / Edition</label>
        <input id="set" name="set" class="form-control" required placeholder="z.B. Glänzendes Schicksal" />
      </div>

      <!-- Typ-Eingabe -->
      <div class="mb-3 text-start">
        <label for="type" class="form-label">Typ</label>
        <input id="type" name="type" class="form-control" required placeholder="z.B. Elektro" />
      </div>

      <!-- Seltenheit-Eingabe -->
      <div class="mb-3 text-start">
        <label for="rarity" class="form-label">Seltenheit</label>
        <input id="rarity" name="rarity" class="form-control" required placeholder="z.B. Ultra Rare" />
      </div>

      <!-- HP-Eingabe als nummer -->
      <div class="mb-3 text-start">
        <label for="hp" class="form-label">HP</label>
        <input type="number" id="hp" name="hp" class="form-control" required placeholder="z.B. 300" />
      </div>

      <!-- Optionaler Bild-Upload -->
      <div class="mb-3 text-start">
        <label for="image" class="form-label">Bild auswählen (optional)</label>
        <input type="file" id="image" name="image" class="form-control" accept="image/*" />
      </div>

      <!-- Attacke 1 (Pflichtfeld) -->
      <div class="mb-3 text-start">
        <label for="attack1Name" class="form-label">Attacke 1</label>
        <input id="attack1Name" name="attack1Name" class="form-control mb-1" placeholder="Name" required />
        <input id="attack1Damage" name="attack1Damage" class="form-control" placeholder="Schaden" required />
      </div>

      <!-- Attacke 2 (optional) -->
      <div class="mb-3 text-start">
        <label for="attack2Name" class="form-label">Attacke 2 (optional)</label>
        <input id="attack2Name" name="attack2Name" class="form-control mb-1" placeholder="Name" />
        <input id="attack2Damage" name="attack2Damage" class="form-control" placeholder="Schaden" />
      </div>

      <!-- Submit-Button -->
      <div class="text-center">
        <button type="submit" class="btn btn-success btn-lg px-5">
          Karte erstellen
        </button>
      </div>
    </form>

    <!-- Anzeige von Fehler- und Erfolgsmeldungen -->
    {#if form?.error}
      <p class="mt-3 text-danger">{form.error}</p>
    {/if}
    {#if form?.success}
      <p class="mt-3 text-success">Karte wurde erfolgreich erstellt!</p>
    {/if}
  </div>
</div>

<style>
  .detail-bg {
    /* Farbverlauf-Hintergrund */
    background: linear-gradient(135deg, #ffcb05, #3b4cca);
    min-height: 100vh;
  }
  .form-control:focus {
    /* Fokus-Styling für Inputs */
    box-shadow: 0 0 0 0.2rem rgba(255, 203, 5, 0.5);
    border-color: #ffcb05;
  }
</style>