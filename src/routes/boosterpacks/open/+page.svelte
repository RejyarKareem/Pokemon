<script lang="ts">
  // Zugriff auf die übergebenen Props, insbesondere auf die Formulardaten
  let { data, form } = $props();

  // Entpacken der gezogenen Karten aus dem Formular-Datenobjekt
  const drawnCards = form?.cards || [];

  // Import der Komponente zur Darstellung einzelner Pokémon-Karten
  import PokemonCard from '$lib/components/PokemonCard.svelte';
</script>

<!-- Haupt-Container mit Hintergrund und vertikaler Ausrichtung -->
<div class="booster-bg text-white d-flex flex-column align-items-center px-4 py-5">
  
  <!-- Überschrift der Seite -->
  <h1 class="display-4 fw-bold mb-4 text-center">Boosterpack öffnen </h1>

  <!-- Formular zum Öffnen eines Boosterpacks (POST-Anfrage beim Absenden) -->
  <form method="POST" class="text-center mb-5">
    <button type="submit" class="btn btn-warning btn-lg px-5 shadow-sm">
      Jetzt öffnen!
    </button>
  </form>

  <!-- Wenn gezogene Karten vorhanden sind, werden diese angezeigt -->
  {#if drawnCards.length > 0}
    <h4 class="mb-4">Du hast folgende Karten gezogen:</h4>

    <!-- Grid-Layout für die gezogenen Karten -->
    <div class="row gy-4">
      {#each drawnCards as card (card._id)}
        <!-- Jede Karte wird in einer Spalte dargestellt -->
        <div class="col-md-4">
          <PokemonCard {card} /> <!-- Verwendung der Karten-Komponente -->
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  /* Hintergrund-Design mit Farbverlauf und voller Höhe */
  .booster-bg {
    background: linear-gradient(135deg, #ffcb05, #3b4cca); /* gelb-blauer Verlauf */
    min-height: 100vh; /* mindestens die volle Höhe des Bildschirms */
    width: 100%;
  }
</style>