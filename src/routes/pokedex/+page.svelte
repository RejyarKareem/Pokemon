<script lang="ts">
  // Zugriff auf die vom Server geladene Pokémon-Liste
  let { data } = $props();
  const pokemonList = data.pokemonList;
</script>

<!-- Hauptcontainer mit Farbverlauf und Padding -->
<div class="pokedex-bg text-white py-5 px-3 px-md-5">
  <div class="container">

    <!-- Überschrift und Beschreibung -->
    <h1 class="display-4 fw-bold mb-4 text-center">Pokédex</h1>
    <p class="text-center mb-5">Die ersten 151 Pokémon aus der Kanto-Region</p>

    <!-- Grid-Anzeige aller Pokémon -->
    <div class="row gy-4">
      {#each pokemonList as p}
        <div class="col-6 col-sm-4 col-md-3 col-lg-2">
          <!-- Verlinkung zur Detailseite eines Pokémons -->
          <a
            class="card text-center bg-light text-dark text-decoration-none shadow-sm h-100"
            href={`/pokedex/${p.name}`}
          >
            <div class="card-body p-2">
              <strong class="d-block text-capitalize">{p.name}</strong>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  /* Hintergrund mit Farbverlauf */
  .pokedex-bg {
    background: linear-gradient(135deg, #ffcb05, #3b4cca);
    min-height: 100vh;
  }

  /* Hover-Effekt für Karten */
  .card:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease;
  }
</style>