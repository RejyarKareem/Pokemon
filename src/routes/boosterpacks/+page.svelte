<script lang="ts">
  import { enhance } from '$app/forms';

  let { data } = $props();
  const packs = data.boosterpacks;

  const languages: string[] = data.filters.languages;
  const names: string[] = data.filters.names;
  const cardsOptions: number[] = data.filters.cardsPerPackOptions;

  import BoosterPackCard from '$lib/components/BoosterPackCard.svelte';
</script>

<div class="list-bg text-white d-flex flex-column align-items-center">
  <div class="container py-5">
    <h1 class="display-4 fw-bold text-center mb-5">Unsere Boosterpacks</h1>
    <div class="row">
      <!-- Sidebar -->
      <div class="col-md-3 mb-4">
        <h4 class="fw-bold mb-3">Filtern & Sortieren</h4>
        <form method="GET" use:enhance class="d-flex flex-column gap-3">
          <select name="language" class="form-select">
            <option value="">Alle Sprachen</option>
            {#each languages as lang}
              <option value={lang}>{lang}</option>
            {/each}
          </select>

          <select name="name" class="form-select">
            <option value="">Alle Serien</option>
            {#each names as name}
              <option value={name}>{name}</option>
            {/each}
          </select>

          <select name="cards_per_pack" class="form-select">
            <option value="">Alle Kartenmengen</option>
            {#each cardsOptions as c}
              <option value={c}>{c} Karten</option>
            {/each}
          </select>

          <select name="sort" class="form-select">
            <option value="">Standard-Sortierung</option>
            <option value="name_asc">Name (A–Z)</option>
            <option value="name_desc">Name (Z–A)</option>
            <option value="language">Sprache (A–Z)</option>
            <option value="cards_asc">Kartenanzahl aufsteigend</option>
            <option value="cards_desc">Kartenanzahl absteigend</option>
          </select>

          <button type="submit" class="btn btn-success w-100">Filtern</button>
        </form>

        <a href="/boosterpacks/new" class="btn btn-primary mt-4 w-100">Neues Boosterpack hinzufügen</a>
      </div>

      <!-- Boosterpack-Anzeige -->
      <div class="col-md-9">
        {#if packs.length === 0}
          <p class="lead text-center">Momentan keine Boosterpacks verfügbar.</p>
        {:else}
          <div class="row gy-4">
            {#each packs as pack (pack._id)}
              <div class="col-md-4">
                <BoosterPackCard {pack} />
              </div>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

<style>
  .list-bg {
    background: linear-gradient(135deg, #ffcb05, #3b4cca);
    min-height: 100vh;
  }
</style>