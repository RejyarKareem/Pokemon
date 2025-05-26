<script lang="ts">
  // Zugriff auf die vom Server übergebene Pokémon-Daten
  let { data } = $props();
  const pokemon = data.pokemon;
</script>

<!-- Wenn kein Pokémon gefunden wurde, wird eine Fehlermeldung angezeigt -->
{#if !pokemon}
  <p class="text-white text-center mt-5">Pokémon nicht gefunden ❌</p>
{:else}
  <!-- Detailansicht des gefundenen Pokémons -->
  <div
    class="detail-bg text-white d-flex flex-column align-items-center py-5 px-4"
  >
    <!-- Titelzeile mit ID und Name -->
    <h1 class="display-4 fw-bold text-center mb-4 text-capitalize">
      #{pokemon.id} – {pokemon.name}
    </h1>

    <!-- Anzeige des offiziellen Artworks -->
    <img
      src={pokemon.image}
      alt={pokemon.name}
      class="img-fluid mb-4"
      style="max-height: 250px;"
    />

    <!-- Auflistung der Typen -->
    <div class="mb-3">
      <strong>Typ:</strong>
      {#each pokemon.types as type, i}
        <span class="badge bg-primary me-2 text-capitalize">{type}</span>
      {/each}
    </div>

    <!-- Anzeige von Größe und Gewicht (umgerechnet in Meter und Kilogramm) -->
    <p><strong>Größe:</strong> {pokemon.height / 10} m</p>
    <p><strong>Gewicht:</strong> {pokemon.weight / 10} kg</p>

    <!-- Auflistung der Basiswerte (Statuswerte) -->
    <div class="mt-4 w-100" style="max-width: 400px;">
      <h5 class="mb-3">🧬 Basiswerte</h5>
      <ul class="list-group">
        {#each pokemon.stats as stat}
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            <span class="text-capitalize">{stat.name}</span>
            <span class="badge bg-secondary">{stat.value}</span>
          </li>
        {/each}
      </ul>
    </div>

    <!-- Link zurück zur Pokédex-Übersicht -->
    <a href="/pokedex" class="btn btn-light mt-4">← Zurück zum Pokédex</a>
  </div>
{/if}

<style>
  /* Hintergrundgestaltung für die Detailseite */
  .detail-bg {
    background: linear-gradient(135deg, #ffcb05, #3b4cca);
    min-height: 100vh;
  }
</style>
