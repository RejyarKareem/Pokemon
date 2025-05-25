<script lang="ts">
  // Zugriff auf die vom Server geladenen Benutzerdaten und Formularstatus
  let { data, form } = $props();
  const user = data.user;
</script>

<!-- Hauptcontainer mit Abstand -->
<div class="container py-5">
  <h1 class="mb-4 fw-bold">Profil bearbeiten</h1>

  <!-- Formular zur Bearbeitung des Benutzerprofils -->
  <!-- svelte-ignore a11y_label_has_associated_control wird verwendet, um Lint_Warnung zu unterdrücken -->
  <form method="POST" class="row g-3">

    <!-- Persönliche Angaben -->
    <div class="col-md-2">
      <label class="form-label">Anrede</label>
      <input name="anrede" value={user.anrede} class="form-control" />
    </div>
    <div class="col-md-5">
      <label class="form-label">Vorname</label>
      <input name="vorname" value={user.vorname} class="form-control" />
    </div>
    <div class="col-md-5">
      <label class="form-label">Nachname</label>
      <input name="nachname" value={user.nachname} class="form-control" />
    </div>

    <!-- Kontakt- und Geburtsdaten -->
    <div class="col-md-6">
      <label class="form-label">Geburtstag</label>
      <input type="date" name="geburtstag" value={user.geburtstag} class="form-control" />
    </div>
    <div class="col-md-6">
      <label class="form-label">E-Mail</label>
      <input name="email" value={user.email} class="form-control" />
    </div>

    <!-- Adresse -->
    <div class="col-12">
      <label class="form-label">Straße</label>
      <input name="strasse" value={user.adresse?.strasse} class="form-control" />
    </div>
    <div class="col-md-4">
      <label class="form-label">PLZ</label>
      <input name="plz" value={user.adresse?.plz} class="form-control" />
    </div>
    <div class="col-md-5">
      <label class="form-label">Ort</label>
      <input name="ort" value={user.adresse?.ort} class="form-control" />
    </div>
    <div class="col-md-3">
      <label class="form-label">Land</label>
      <input name="land" value={user.adresse?.land} class="form-control" />
    </div>

    <!-- Absenden -->
    <div class="col-12 text-end mt-4">
      <button class="btn btn-success px-4">Speichern</button>
    </div>

    <!-- Erfolgsrückmeldung bei erfolgreicher Speicherung -->
    {#if form?.success}
      <p class="text-success mt-3">Änderungen gespeichert ✅</p>
    {/if}
  </form>
</div>