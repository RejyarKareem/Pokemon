<script lang="ts">
  // Props: `data.cards` enthält das Array aller Karten
  let { data } = $props();
  const cards = data.cards;

  // Import der Karte-Komponente zum Rendern einzelner Cards
  import PokemonCard from '$lib/components/PokemonCard.svelte';
</script>

<!-- Wrapper mit Farbverlauf und vertikaler Zentrierung -->
<div class="list-bg text-white d-flex flex-column align-items-center">
  <div class="container py-5">
    <!-- Seitenüberschrift -->
    <h1 class="display-4 fw-bold text-center mb-4">Unsere Pokémon-Karten</h1>

    <!-- Button zum Hinzufügen einer neuen Karte -->
    <div class="text-center mb-5">
      <a href="/cards/new" class="btn btn-success btn-lg px-5 shadow-sm">
        Neue Karte hinzufügen
      </a>
    </div>

    {#if cards.length === 0}
      <!-- Nachricht, wenn keine Karten vorhanden sind -->
      <p class="lead text-center">Zurzeit sind keine Karten verfügbar.</p>
    {:else}
      <!-- Grid-Layout für Karten: drei pro Reihe bei md und größer -->
      <div class="row gy-4">
        {#each cards as card (card._id)}
          <div class="col-md-4">
            <!-- Render der PokemonCard-Komponente für jede Karte -->
            <PokemonCard {card} />
          </div>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  /* Hintergrundgradient für die Listen-Seite */
  .list-bg {
    background: linear-gradient(135deg, #ffcb05, #3b4cca);
    min-height: 100vh; /* volle Fensterhöhe */
  }
</style>