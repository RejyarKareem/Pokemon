<script lang="ts">
  let { data } = $props();
  const submissions = data.submissions;
</script>

<!-- Hintergrund und Zentrierung der Kontakt-Submissions-Seite -->
<div class="contact-bg text-white d-flex align-items-center justify-content-center">
  <div class="container py-5" style="max-width: 800px;">
    <!-- Seitenüberschrift -->
    <h1 class="display-4 fw-bold text-center mb-5">Meine Kontaktanfragen</h1>

    {#if submissions.length === 0}
      <!-- Nachricht, falls keine Anfragen vorhanden sind -->
      <p class="lead text-center">Du hast noch keine Anfragen gesendet.</p>
    {:else}
      <!-- Liste der Anfragen als Bootstrap list-group -->
      <div class="list-group mb-4">
        {#each submissions as sub (sub._id)}
          <!-- Einzelne Anfrage als Card-ähnliches List-Group-Item -->
          <div class="list-group-item bg-light text-dark rounded shadow-sm mb-3">
            <div class="d-flex justify-content-between align-items-start">
              <div>
                <!-- Name und E-Mail des Absenders -->
                <h5 class="mb-1">{sub.name}</h5>
                <small class="text-muted">{sub.email}</small>
              </div>
              <div class="text-end">
                <!-- Erstellungszeitpunkt -->
                <small class="text-muted">
                  {new Date(sub.createdAt).toLocaleString('de-CH')}
                </small>
                <br />
                <!-- Status-Badge mit Fallback 'In Bearbeitung' -->
                <span class="badge bg-primary mt-1">
                  {sub.status ?? 'In Bearbeitung'}
                </span>
              </div>
            </div>
            <!-- Nachrichtentext der Anfrage -->
            <p class="mt-2 mb-1">{sub.message}</p>
          </div>
        {/each}
      </div>
    {/if}

    <!-- Button zum Zurückkehren zur Startseite -->
    <div class="text-center">
      <a href="/" class="btn btn-secondary btn-lg px-5 shadow-sm">
        ← Zurück zur Startseite
      </a>
    </div>
  </div>
</div>

<style>
  /* Hintergrund-Gradient */
  .contact-bg {
    background: linear-gradient(135deg, #ffcb05, #3b4cca);
    min-height: 100vh;
  }
  /* Entfernt Rahmen der List-Group-Items */
  .list-group-item {
    border: none;
  }
  /* Textfarben in Überschrift, Absätzen, kleinen Texten */
  h1, p, small {
    color: #212529;
  }
  /* Badge-Layout */
  .badge {
    font-size: 0.9rem;
    margin-top: 0.25rem;
  }
  /* Hover-Effekt für Buttons */
  a.btn {
    transition: transform 0.3s ease-in-out;
  }
  a.btn:hover {
    transform: scale(1.05);
  }
</style>