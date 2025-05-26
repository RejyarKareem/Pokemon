<script lang="ts">
  let { data, form } = $props();
  const card = data.card;
</script>

<!-- Wrapper mit Farbverlauf und zentriertem Inhalt -->
<div
  class="detail-bg text-white d-flex align-items-center justify-content-center"
>
  <div class="container py-5">
    <!-- Kartentitel -->
    <h1 class="display-4 fw-bold text-center mb-5">{card.name}</h1>

    <div class="row">
      <!-- Bild-Spalte: zeigt das Kartenbild -->
      <div class="col-md-6 mb-4 text-center">
        <img
          src={card.poster}
          alt={card.name}
          class="img-fluid rounded shadow"
          style="max-height: 300px; object-fit: cover;"
        />
      </div>

      <!-- Infos-Spalte: Typ, Seltenheit, HP -->
      <div class="col-md-6">
        <ul class="list-group bg-light text-dark mb-4">
          <li class="list-group-item"><strong>Typ:</strong> {card.type}</li>
          <li class="list-group-item">
            <strong>Seltenheit:</strong>
            {card.rarity}
          </li>
          <li class="list-group-item"><strong>HP:</strong> {card.hp}</li>
        </ul>

        <!-- Angriffe-Block -->
        <div class="bg-light text-dark p-4 rounded shadow-sm mb-4">
          <h5 class="mb-3">Angriffe</h5>
          <ul class="mb-0">
            {#each card.attacks as atk}
              <li>
                <!-- Attackenname und Schaden anzeigen -->
                <strong>{atk.name}</strong> — {atk.damage}
              </li>
            {/each}
          </ul>
        </div>

        <!-- Buttons: Bearbeiten, Zurück, Löschen -->
        <div class="text-center mt-4 d-flex justify-content-center gap-3">
          <!-- Bearbeiten-Link -->
          <a
            href={`/cards/${card._id}/update`}
            class="btn btn-success btn-lg px-4 shadow-sm"
          >
            Karte bearbeiten
          </a>

          <!-- Zurück-Link -->
          <a href="/cards" class="btn btn-success btn-lg px-4 shadow-sm">
            ← Zurück zur Übersicht
          </a>

          <!-- Löschformular mit Bestätigungsdialog -->
          <form method="POST" action="?/delete" style="display:inline;">
            <button
              type="submit"
              class="btn btn-danger btn-lg px-4 shadow-sm"
              onclick={(e) => {
                e.preventDefault();
                if (confirm("Möchtest du diese Karte wirklich löschen?")) {
                  e.currentTarget.closest("form").submit();
                }
              }}
            >
              Karte löschen
            </button>
          </form>
        </div>

        <!-- Fehlermeldung anzeigen -->
        {#if form?.error}
          <p class="mt-3 text-danger">{form.error}</p>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  /* Hintergrund-Gradient */
  .detail-bg {
    background: linear-gradient(135deg, #ffcb05, #3b4cca);
    min-height: 100vh;
  }
  /* Styling für List-Group */
  .list-group-item {
    border: none;
  }
  .list-group {
    border-radius: 0.5rem;
    overflow: hidden;
  }
  .bg-light {
    background-color: #f8f9fa !important;
  }
  .text-dark {
    color: #212529 !important;
  }
  /* Hover-Effekt für Buttons */
  a.btn,
  button.btn {
    transition: transform 0.3s ease-in-out;
  }
  a.btn:hover,
  button.btn:hover {
    transform: scale(1.05);
  }
</style>
