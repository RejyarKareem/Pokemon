<script lang="ts">
  let { form } = $props();
</script>

<div class="contact-bg text-white d-flex align-items-center justify-content-center">
  <div class="container py-5" style="max-width: 600px;">
    <h1 class="display-4 fw-bold text-center mb-4">Kontaktiere uns</h1>
    <p class="lead mb-5">
      Du hast Fragen zu Boosterpacks, Pokémon-Karten oder möchtest einfach Hallo sagen?<br />
      Dann schreib uns – wir freuen uns auf deine Nachricht!
    </p>

    <form method="POST" action="?/create" class="mx-auto" style="max-width: 600px;">
      <div class="mb-3 text-start">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          class="form-control"
          placeholder="Dein Name"
          required
        />
      </div>

      <div class="mb-3 text-start">
        <label for="email" class="form-label">E-Mail-Adresse</label>
        <input
          type="email"
          id="email"
          name="email"
          class="form-control"
          placeholder="deine@email.ch"
          required
        />
      </div>

      <div class="mb-3 text-start">
        <label for="message" class="form-label">Nachricht</label>
        <textarea
          id="message"
          name="message"
          class="form-control"
          rows="5"
          placeholder="Deine Nachricht..."
          required
        ></textarea>
      </div>

      <div class="text-center">
        <button type="submit" class="btn btn-warning btn-lg px-5">
          Nachricht senden
        </button>
      </div>
    </form>

    {#if form?.error}
      <p class="mt-3 text-danger">{form.error}</p>
    {/if}
    {#if form?.success}
      <p class="mt-3 text-success">Deine Nachricht wurde erfolgreich gesendet!</p>
    {/if}
  </div>
</div>

<style>
  .contact-bg {
    background: linear-gradient(135deg, #ffcb05, #3b4cca);
    min-height: 100vh;
  }
  .form-control:focus {
    box-shadow: 0 0 0 0.2rem rgba(255, 203, 5, 0.5);
    border-color: #ffcb05;
  }
</style>