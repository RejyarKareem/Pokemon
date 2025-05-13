<script lang="ts">
  // Daten holen: boosterpacks-Array aus der Load-Funktion
  let { data } = $props();
  const packs = data.boosterpacks;

  // Komponente zum Darstellen eines einzelnen Packs importieren
  import BoosterPackCard from '$lib/components/BoosterPackCard.svelte';
</script>

<!-- Wrapper mit Farbverlauf und vertikaler Ausrichtung -->
<div class="list-bg text-white d-flex flex-column align-items-center">
  <div class="container py-5">
    <!-- Seitenüberschrift -->
    <h1 class="display-4 fw-bold text-center mb-5">Unsere Boosterpacks</h1>

    <!-- Button zum Anlegen eines neuen Boosterpacks -->
    <div class="text-center mb-5">
      <a href="/boosterpacks/new" class="btn btn-warning btn-lg px-5 shadow-sm">
        Neues Boosterpack hinzufügen
      </a>
    </div>

    {#if packs.length === 0}
      <!-- Anzeige, wenn keine Packs vorhanden sind -->
      <p class="lead text-center">Momentan keine Boosterpacks verfügbar.</p>
    {:else}
      <!-- Grid-Layout: Jede Card in einer Bootstrap-Spalte -->
      <div class="row gy-4">
        {#each packs as pack (pack._id)}
          <div class="col-md-4">
            <!-- Render der Card-Komponente für jedes Pack -->
            <BoosterPackCard {pack} />
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
    min-height: 100vh; /* volle Höhe des Viewports */
  }
</style>