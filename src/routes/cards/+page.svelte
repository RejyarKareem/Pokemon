<script lang="ts">
  import { enhance } from '$app/forms';

  let { data } = $props();
  const cards = data.cards;

  const sets: string[] = data.filters.sets;
  const types: string[] = data.filters.types;
  const rarities: string[] = data.filters.rarities;

  import PokemonCard from '$lib/components/PokemonCard.svelte';
</script>

<div class="list-bg text-white d-flex flex-column align-items-center">
  <div class="container py-5">
    <h1 class="display-4 fw-bold text-center mb-5">Unsere Pokémon-Karten</h1>
    <div class="row">
      <!-- Sidebar -->
      <div class="col-md-3 mb-4">
        <h4 class="fw-bold mb-3">Filtern & Sortieren</h4>
        <form method="GET" use:enhance class="d-flex flex-column gap-3">
          <select name="set" class="form-select">
            <option value="">Alle Sets</option>
            {#each sets as s}
              <option value={s}>{s}</option>
            {/each}
          </select>

          <select name="type" class="form-select">
            <option value="">Alle Typen</option>
            {#each types as t}
              <option value={t}>{t}</option>
            {/each}
          </select>

          <select name="rarity" class="form-select">
            <option value="">Alle Seltenheiten</option>
            {#each rarities as r}
              <option value={r}>{r}</option>
            {/each}
          </select>

          <input name="hp" type="number" class="form-control" placeholder="Min. HP" />

          <select name="sort" class="form-select">
            <option value="">Standard-Sortierung</option>
            <option value="name_asc">Name (A–Z)</option>
            <option value="name_desc">Name (Z–A)</option>
            <option value="hp_asc">HP aufsteigend</option>
            <option value="hp_desc">HP absteigend</option>
            <option value="rarity">Nach Rarität</option>
          </select>

          <button type="submit" class="btn btn-success w-100">Filtern</button>
        </form>

        <a href="/cards/new" class="btn btn-primary mt-4 w-100">Neue Karte hinzufügen</a>
      </div>

      <!-- Kartenanzeige -->
      <div class="col-md-9">
        {#if cards.length === 0}
          <p class="lead text-center">Zurzeit sind keine Karten verfügbar.</p>
        {:else}
          <div class="row gy-4">
            {#each cards as card (card._id)}
              <div class="col-md-4">
                <PokemonCard {card} />
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