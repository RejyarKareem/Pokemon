<script lang="ts">
  // Import der `enhance`-Funktion von SvelteKit für progressive Formulare
  import { enhance } from '$app/forms';

  // Zugriff auf die vom Server geladenen Props (z. B. über load-Funktion)
  let { data } = $props();

  // Boosterpack-Daten, die angezeigt werden sollen
  const packs = data.boosterpacks;

  // Filteroptionen, die aus dem Server geladen wurden
  const languages: string[] = data.filters.languages;
  const names: string[] = data.filters.names;
  const cardsOptions: number[] = data.filters.cardsPerPackOptions;

  // Import der Komponente zur Darstellung eines einzelnen Boosterpacks
  import BoosterPackCard from '$lib/components/BoosterPackCard.svelte';
</script>

<!-- Hauptbereich mit Farbverlauf im Hintergrund -->
<div class="list-bg text-white d-flex flex-column align-items-center">
  <div class="container py-5">

    <!-- Überschrift -->
    <h1 class="display-4 fw-bold text-center mb-5">Unsere Boosterpacks</h1>

    <div class="row">
      
      <!-- Linke Spalte: Filter-Formular -->
      <div class="col-md-3 mb-4">
        <h4 class="fw-bold mb-3">Filtern & Sortieren</h4>

        <!-- GET-Formular mit `enhance` für dynamisches Verhalten -->
        <form method="GET" use:enhance class="d-flex flex-column gap-3">

          <!-- Filter: Sprache -->
          <select name="language" class="form-select">
            <option value="">Alle Sprachen</option>
            {#each languages as lang}
              <option value={lang}>{lang}</option>
            {/each}
          </select>

          <!-- Filter: Serienname -->
          <select name="name" class="form-select">
            <option value="">Alle Serien</option>
            {#each names as name}
              <option value={name}>{name}</option>
            {/each}
          </select>

          <!-- Filter: Kartenanzahl pro Pack -->
          <select name="cards_per_pack" class="form-select">
            <option value="">Alle Kartenmengen</option>
            {#each cardsOptions as c}
              <option value={c}>{c} Karten</option>
            {/each}
          </select>

          <!-- Sortieroptionen -->
          <select name="sort" class="form-select">
            <option value="">Standard-Sortierung</option>
            <option value="name_asc">Name (A–Z)</option>
            <option value="name_desc">Name (Z–A)</option>
            <option value="language">Sprache (A–Z)</option>
            <option value="cards_asc">Kartenanzahl aufsteigend</option>
            <option value="cards_desc">Kartenanzahl absteigend</option>
          </select>

          <!-- Absenden des Formulars -->
          <button type="submit" class="btn btn-success w-100">Filtern</button>
        </form>

        <!-- Link zum Hinzufügen eines neuen Boosterpacks -->
        <a href="/boosterpacks/new" class="btn btn-primary mt-4 w-100">Neues Boosterpack hinzufügen</a>
      </div>

      <!-- Rechte Spalte: Anzeige der Boosterpacks -->
      <div class="col-md-9">
        {#if packs.length === 0}
          <!-- Nachricht bei leerem Ergebnis -->
          <p class="lead text-center">Momentan keine Boosterpacks verfügbar.</p>
        {:else}
          <!-- Darstellung der Boosterpacks als Kartenraster -->
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
  /* Hintergrundfarbe für die Seite */
  .list-bg {
    background: linear-gradient(135deg, #ffcb05, #3b4cca);
    min-height: 100vh;
  }
</style>