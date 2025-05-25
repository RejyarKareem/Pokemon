<script lang="ts">
  let { form } = $props();
</script>

<!-- Seite mit Hintergrundfarbe und zentriertem Formularlayout -->
<div class="profile-bg d-flex justify-content-center align-items-start py-5 px-3 px-md-5">
  <div class="form-wrapper text-white w-100">

    <!-- Überschrift -->
    <h1 class="display-5 fw-bold text-center mb-4">Neues Profil anlegen</h1>

    <!-- Formular zur Erstellung eines neuen Profils -->
    <!-- svelte-ignore a11y_label_has_associated_control unterdrückt eine Barrierefreiheitswarnung -->
    <form method="POST" class="profile-section bg-light text-dark mx-auto">

      <!-- Abschnitt: Benutzerdaten -->
      <h5 class="fw-semibold mb-3">👤 Benutzerdaten</h5>

      <div class="mb-3">
        <label class="form-label">Benutzername</label>
        <input name="username" required class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Anrede</label>
        <input name="anrede" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Vorname</label>
        <input name="vorname" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Nachname</label>
        <input name="nachname" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Geburtstag</label>
        <input name="geburtstag" type="date" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">E-Mail</label>
        <input name="email" type="email" class="form-control" />
      </div>

      <!-- Abschnitt: Adresse -->
      <h5 class="fw-semibold mb-3 mt-4">🏠 Adresse</h5>

      <div class="mb-3">
        <label class="form-label">Straße</label>
        <input name="strasse" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">PLZ</label>
        <input name="plz" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Ort</label>
        <input name="ort" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Land</label>
        <input name="land" class="form-control" />
      </div>

      <!-- Absende-Button -->
      <button class="btn btn-success w-100 mt-3" type="submit">➕ Profil erstellen</button>

      <!-- Erfolgsnachricht bei erfolgreicher Erstellung -->
      {#if form?.success}
        <p class="text-success mt-3 text-center">Profil erfolgreich erstellt ✅</p>
      {/if}
    </form>
  </div>
</div>

<style>
  /* Seitenhintergrund mit Farbverlauf */
  .profile-bg {
    background: linear-gradient(135deg, #ffcb05, #3b4cca);
    min-height: 100vh;
  }

  /* Maximalbreite des Formularcontainers */
  .form-wrapper {
    max-width: 700px;
    width: 100%;
  }

  /* Styling für das Formularfeld */
  .profile-section {
    background-color: rgba(255, 255, 255, 0.98);
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
  }

  .form-label {
    font-weight: 600;
  }

  .btn-success {
    font-size: 1.1rem;
    padding: 0.75rem;
  }
</style>