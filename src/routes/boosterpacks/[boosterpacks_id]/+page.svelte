<script lang="ts">
  // Props aus load():
  // - data.pack enthält das geladene Boosterpack-Objekt
  // - form enthält Fehler-/Erfolgsmeldungen aus der Action
  let { data, form } = $props();
  const pack = data.pack;
</script>

<!-- Wrapper mit Farbverlauf und zentriertem Haupt-Container -->
<div class="detail-bg text-white d-flex align-items-center justify-content-center">
  <div class="container py-5">
    <!-- Boosterpack-Name als Seitentitel -->
    <h1 class="display-4 fw-bold text-center mb-5">{pack.name}</h1>

    <div class="row">
      <!-- Bild-Spalte: zeigt alle Poster-Bilder untereinander -->
      <div class="col-md-6 mb-4 text-center">
        {#each pack.poster as img}
          <img
            src={img}                    
            alt={pack.name}             
            class="img-fluid rounded shadow mb-3"
            style="max-height: 300px; object-fit: cover;" 
          />
        {/each}
      </div>

      <!-- Infos-Spalte: listet die wichtigsten Eigenschaften auf -->
      <div class="col-md-6">
        <ul class="list-group bg-light text-dark mb-4">
          <li class="list-group-item">
            <strong>Sprache:</strong> {pack.language}  <!-- Anzeigen der Sprache -->
          </li>
          <li class="list-group-item">
            <strong>Karten pro Pack:</strong> {pack.cards_per_pack}  <!-- Kartenanzahl -->
          </li>
          <li class="list-group-item">
            <strong>Inhalt:</strong> {pack.content}  <!-- Inhalt Beschreibung -->
          </li>
          <li class="list-group-item">
            <strong>Altersempfehlung:</strong> {pack.age_recommendation}  <!-- Altersempfehlung -->
          </li>
        </ul>

        <!-- Produktdetails-Block mit Beschreibungstext -->
        <div class="bg-light text-dark p-4 rounded shadow-sm mb-4">
          <h5 class="mb-3">Produktdetails</h5>
          <p class="mb-0">{pack.product_details.description}</p>  <!-- Detailtext -->
        </div>

        <!-- Button-Gruppe: Bearbeiten, Zurück und Löschen -->
        <div class="text-center mt-4 d-flex justify-content-center gap-3">
          <!-- Link zur Update-Seite -->
          <a
            href={`/boosterpacks/${pack._id}/update`}
            class="btn btn-warning btn-lg px-4 shadow-sm"
          >
            Boosterpack bearbeiten
          </a>

          <!-- Link zurück zur Übersicht -->
          <a
            href="/boosterpacks"
            class="btn btn-warning btn-lg px-4 shadow-sm"
          >
            ← Zurück zur Übersicht
          </a>

          <!-- Lösch-Form und Button mit JavaScript-Bestätigung -->
          <form method="POST" action="?/delete" style="display:inline;">
            <button
              type="submit"
              class="btn btn-danger btn-lg px-4 shadow-sm"
              onclick={(e) => {
                e.preventDefault();  // verhindert direkten Submit
                if (confirm('Möchtest du dieses Boosterpack wirklich löschen?')) {
                  // Submit nur nach Bestätigung
                  (e.currentTarget as HTMLButtonElement)
                    .closest('form')!
                    .submit();
                }
              }}
            >
              Boosterpack löschen
            </button>
          </form>
        </div>

        <!-- Anzeige von Action-Fehlern (form.error) -->
        {#if form?.error}
          <p class="mt-3 text-danger">{form.error}</p>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  /* Hintergrundgradient und volle Höhe */
  .detail-bg {
    background: linear-gradient(135deg, #ffcb05, #3b4cca);
    min-height: 100vh;
  }
  /* Entfernt Rahmen der List-Group-Items */
  .list-group-item { border: none; }
  /* Runde Ecken und Schatten für Info-Box */
  .list-group { border-radius: .5rem; overflow: hidden; }
  .bg-light { background-color: #f8f9fa !important; }
  .text-dark { color: #212529 !important; }

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