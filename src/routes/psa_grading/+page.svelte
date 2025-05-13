<script lang="ts">
  let { form } = $props();
</script>

<div class="grading-bg text-white d-flex align-items-center justify-content-center">
  <div class="container text-center py-5" style="max-width: 700px;">
    <h1 class="display-4 fw-bold mb-4">PSA Grading – Deine Karte bewerten lassen</h1>
    <p class="lead mb-5">
      Du möchtest deine wertvolle Pokémon-Karte professionell einstufen lassen? <br />
      Fülle das Formular aus und sende uns deine Daten – wir kümmern uns um den Rest!
    </p>

    <form method="POST" action="?/create" class="mx-auto text-start" style="max-width: 700px;">
      <!-- Kundenname -->
      <div class="mb-3 text-start">
        <label for="name" class="form-label">Dein Name</label>
        <input
          type="text"
          id="name"
          name="name"
          class="form-control"
          placeholder="z.B. Max Mustermann"
          required
        />
      </div>

      <!-- Kartendetails -->
      <div class="mb-3 text-start">
        <label for="cardName" class="form-label">Name der Karte</label>
        <input
          type="text"
          id="cardName"
          name="cardName"
          class="form-control"
          placeholder="z.B. Glurak VMAX"
          required
        />
      </div>
      <div class="mb-3 text-start">
        <label for="cardSet" class="form-label">Set / Edition</label>
        <input
          type="text"
          id="cardSet"
          name="cardSet"
          class="form-control"
          placeholder="z.B. Glänzendes Schicksal"
          required
        />
      </div>
      <div class="mb-3 text-start">
        <label for="language" class="form-label">Sprache der Karte</label>
        <select id="language" name="language" class="form-select" required>
          <option value="">Bitte wählen...</option>
          <option>Deutsch</option>
          <option>Englisch</option>
          <option>Japanisch</option>
          <option>Französisch</option>
        </select>
      </div>
      <div class="mb-3 text-start">
        <label for="serviceLevel" class="form-label">Geschätzter Zustand</label>
        <select id="serviceLevel" name="serviceLevel" class="form-select" required>
          <option value="">Bitte wählen...</option>
          <option>Ausgezeichnet</option>
          <option>Gut</option>
          <option>Leichte Gebrauchsspuren</option>
          <option>Starke Gebrauchsspuren</option>
        </select>
      </div>

      <!-- Kontaktinformationen -->
      <div class="mb-3 text-start">
        <label for="email" class="form-label">E-Mail für Rückmeldung</label>
        <input
          type="email"
          id="email"
          name="email"
          class="form-control"
          placeholder="deine@email.ch"
          required
        />
      </div>

      <!-- Adresse des Kunden -->
      <div class="mb-3 text-start">
        <label for="street" class="form-label">Straße & Hausnummer</label>
        <input
          type="text"
          id="street"
          name="street"
          class="form-control"
          placeholder="z.B. Musterstrasse 12"
          required
        />
      </div>
      <div class="row">
        <div class="col-md-4 mb-3 text-start">
          <label for="postal" class="form-label">PLZ</label>
          <input
            type="text"
            id="postal"
            name="postal"
            class="form-control"
            placeholder="z.B. 8000"
            required
          />
        </div>
        <div class="col-md-4 mb-3 text-start">
          <label for="city" class="form-label">Ort</label>
          <input
            type="text"
            id="city"
            name="city"
            class="form-control"
            placeholder="z.B. Zürich"
            required
          />
        </div>
        <div class="col-md-4 mb-3 text-start">
          <label for="country" class="form-label">Land</label>
          <input
            type="text"
            id="country"
            name="country"
            class="form-control"
            placeholder="z.B. Schweiz"
            required
          />
        </div>
      </div>

      <!-- Zusätzliche Infos -->
      <div class="mb-3 text-start">
        <label for="notes" class="form-label">Zusätzliche Informationen (optional)</label>
        <textarea
          id="notes"
          name="notes"
          class="form-control"
          rows="4"
          placeholder="z.B. Express-Grading gewünscht, PSA 10 angestrebt ..."
        ></textarea>
      </div>

      <div class="text-center">
        <button type="submit" class="btn btn-warning btn-lg px-5 mt-3">
          Anfrage absenden
        </button>
      </div>
    </form>

    {#if form?.error}
      <p class="mt-3 text-danger">{form.error}</p>
    {/if}
  </div>
</div>

<style>
  .grading-bg {
    background: linear-gradient(135deg, #ffcb05, #3b4cca);
    min-height: 100vh;
  }
  .form-control:focus,
  .form-select:focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 203, 5, 0.5);
    border-color: #ffcb05;
  }
  button:hover {
    transform: scale(1.03);
    transition: all 0.2s ease-in-out;
  }
</style>