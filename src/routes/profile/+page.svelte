<script lang="ts">
  let { data } = $props();
  const user = data.user;
</script>

{#if !user}
  <p class="text-white px-4 py-5">Kein Profil gefunden 😢</p>
{:else}
  <div class="profile-bg text-white d-flex flex-column align-items-start px-4 px-md-5 py-5">
    <h1 class="display-5 fw-bold mb-4">Mein Profil</h1>

    <section class="profile-section mb-5">
      <h5 class="fw-semibold mb-3">👤 Benutzerdaten</h5>
      <ul class="profile-list">
        <li><strong>Benutzername:</strong> {user._id}</li>
        <li><strong>Anrede:</strong> {user.anrede}</li>
        <li><strong>Name:</strong> {user.vorname} {user.nachname}</li>
        <li><strong>Geburtstag:</strong> {user.geburtstag}</li>
        <li><strong>E-Mail:</strong> {user.email}</li>
      </ul>
    </section>

    <section class="profile-section mb-4">
      <h5 class="fw-semibold mb-3">🏠 Adresse</h5>
      <ul class="profile-list">
        <li><strong>Straße:</strong> {user.adresse.strasse}</li>
        <li><strong>PLZ / Ort:</strong> {user.adresse.plz} {user.adresse.ort}</li>
        <li><strong>Land:</strong> {user.adresse.land}</li>
      </ul>
    </section>

    <a href="/profile/edit" class="btn btn-primary mt-4 w-10"> Profil bearbeiten</a>
  </div>
{/if}

<style>
  .profile-bg {
    background: linear-gradient(135deg, #ffcb05, #3b4cca);
    min-height: 100vh;
    color: #fff;
  }

  .profile-section {
    max-width: 600px;
    background-color: rgba(255, 255, 255, 0.1);
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }

  .profile-list {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  .profile-list li {
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .profile-list li:last-child {
    border-bottom: none;
  }

  strong {
    display: inline-block;
    min-width: 140px;
  }
</style>