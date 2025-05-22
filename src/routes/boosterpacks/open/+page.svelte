<script lang="ts">
  let { data, form } = $props();
  const drawnCards = form?.cards || [];
  import PokemonCard from '$lib/components/PokemonCard.svelte';
</script>

<div class="booster-bg text-white d-flex flex-column align-items-center px-4 py-5">
  <h1 class="display-4 fw-bold mb-4 text-center">Boosterpack öffnen </h1>

  <form method="POST" class="text-center mb-5">
    <button type="submit" class="btn btn-warning btn-lg px-5 shadow-sm">
      Jetzt öffnen!
    </button>
  </form>

  {#if drawnCards.length > 0}
    <h4 class="mb-4">Du hast folgende Karten gezogen:</h4>
    <div class="row gy-4">
      {#each drawnCards as card (card._id)}
        <div class="col-md-4">
          <PokemonCard {card} />
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .booster-bg {
    background: linear-gradient(135deg, #ffcb05, #3b4cca);
    min-height: 100vh;
    width: 100%;
  }
</style>