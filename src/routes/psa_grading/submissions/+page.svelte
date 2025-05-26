<script lang="ts">
  let { data } = $props();
  const submissions = data.submissions;
</script>

<div
  class="grading-bg text-white d-flex align-items-center justify-content-center"
>
  <div class="container py-5" style="max-width: 800px;">
    <!-- Seitenüberschrift -->
    <h1 class="display-4 fw-bold text-center mb-5">
      Meine PSA-Grading-Anfragen
    </h1>

    {#if submissions.length === 0}
      <!-- Falls noch keine Grading-Anfragen eingereicht wurden -->
      <p class="lead text-center">
        Du hast noch keine Grading-Anfragen gesendet.
      </p>
    {:else}
      <!-- Liste aller Anfragen als Bootstrap list-group -->
      <div class="list-group mb-4">
        {#each submissions as sub (sub.id)}
          <!-- Einzelne Anfrage als List-Group-Item mit Schatten und abgerundeten Ecken -->
          <div
            class="list-group-item bg-light text-dark rounded shadow-sm mb-3"
          >
            <div class="d-flex justify-content-between align-items-start mb-2">
              <!-- Linke Seite: Kartendetails -->
              <div>
                <!-- Kartentitel und Set in der Überschrift -->
                <h5 class="mb-1">{sub.cardName} ({sub.cardSet})</h5>
                <!-- Menge und ausgewähltes Service-Level -->
                <small class="text-muted"
                  >Anzahl: {sub.quantity} – Zustand: {sub.serviceLevel}</small
                >
              </div>

              <!-- Rechte Seite: Datum und Status-Badge -->
              <div class="text-end">
                <!-- Erstellungsdatum im Schweizer Format -->
                <small class="text-muted">
                  {new Date(sub.createdAt).toLocaleString("de-CH")}
                </small>
                <br />
                <!-- Badge mit Status, Standard 'Eingegangen' falls undefined -->
                <span class="badge bg-primary mt-1">
                  {sub.status ?? "Eingegangen"}
                </span>
              </div>
            </div>

            <!-- Kontaktinformationen und optionale Notiz -->
            <p class="mb-1">
              <strong>Kontakt:</strong>
              {sub.name} &mdash; {sub.email}
            </p>
            {#if sub.notes}
              <!-- Nur anzeigen, wenn Notizen vorhanden sind -->
              <p class="mt-2 mb-1"><strong>Notiz:</strong> {sub.notes}</p>
            {/if}
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
  /*
    .grading-bg:
      - Linearer Farbverlauf von Gelb zu Blau
      - Mindesthöhe 100vh, damit es den ganzen Viewport ausfüllt
  */
  .grading-bg {
    background: linear-gradient(135deg, #ffcb05, #3b4cca);
    min-height: 100vh;
  }
  /* Entfernt die standardmäßige Border der List-Group-Items */
  .list-group-item {
    border: none;
  }
  /* Einheitliche Textfarbe für Überschriften, Absätze und kleine Texte */
  h1,
  p,
  small {
    color: #212529;
  }
  /* Styling für Status-Badges */
  .badge {
    font-size: 0.9rem;
    margin-top: 0.25rem;
  }
  /* Sanfter Hover-Effekt für Buttons */
  a.btn {
    transition: transform 0.3s ease-in-out;
  }
  a.btn:hover {
    transform: scale(1.05);
  }
</style>
