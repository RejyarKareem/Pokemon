<script lang="ts">
  // Import der `enhance`-Funktion für progressive Formulare (verhindert Neuladen der Seite)
  import { enhance } from "$app/forms";

  // Zugriff auf die vom Server geladenen Props
  let { data } = $props();

  // Kartenliste aus dem Server-Load (gefiltert und sortiert)
  const cards = data.cards;

  // Filteroptionen: Set-Editionen, Typen, Seltenheiten
  const sets: string[] = data.filters.sets;
  const types: string[] = data.filters.types;
  const rarities: string[] = data.filters.rarities;

  // Import der Komponente zur Darstellung einzelner Pokémon-Karten
  import PokemonCard from "$lib/components/PokemonCard.svelte";
</script>

<!-- Hauptcontainer mit Hintergrundfarbe und zentralem Layout -->
<div class="list-bg text-white d-flex flex-column align-items-center">
  <div class="container py-5">
    <!-- Seitentitel -->
    <h1 class="display-4 fw-bold text-center mb-5">Unsere Pokémon-Karten</h1>

    <div class="row">
      <!-- Linke Spalte: Filtermenü -->
      <div class="col-md-3 mb-4">
        <h4 class="fw-bold mb-3">Filtern & Sortieren</h4>

        <!-- GET-Formular mit `enhance`, um Filterdaten an die URL zu hängen -->
        <form method="GET" use:enhance class="d-flex flex-column gap-3">
          <!-- Dropdown: Sets -->
          <select name="set" class="form-select">
            <option value="">Alle Sets</option>
            {#each sets as s}
              <option value={s}>{s}</option>
            {/each}
          </select>

          <!-- Dropdown: Typen -->
          <select name="type" class="form-select">
            <option value="">Alle Typen</option>
            {#each types as t}
              <option value={t}>{t}</option>
            {/each}
          </select>

          <!-- Dropdown: Seltenheiten -->
          <select name="rarity" class="form-select">
            <option value="">Alle Seltenheiten</option>
            {#each rarities as r}
              <option value={r}>{r}</option>
            {/each}
          </select>

          <!-- Eingabefeld für minimale HP -->
          <input
            name="hp"
            type="number"
            class="form-control"
            placeholder="Min. HP"
          />

          <!-- Dropdown für Sortieroptionen -->
          <select name="sort" class="form-select">
            <option value="">Standard-Sortierung</option>
            <option value="name_asc">Name (A–Z)</option>
            <option value="name_desc">Name (Z–A)</option>
            <option value="hp_asc">HP aufsteigend</option>
            <option value="hp_desc">HP absteigend</option>
            <option value="rarity">Nach Rarität</option>
          </select>

          <!-- Formular-Submit-Button -->
          <button type="submit" class="btn btn-success w-100">Filtern</button>
        </form>

        <!-- Link zum Hinzufügen einer neuen Karte -->
        <a href="/cards/new" class="btn btn-primary mt-4 w-100"
          >Neue Karte hinzufügen</a
        >
      </div>

      <!-- Rechte Spalte: Anzeige der Karten -->
      <div class="col-md-9">
        {#if cards.length === 0}
          <!-- Anzeige bei leerer Ergebnismenge -->
          <p class="lead text-center">Zurzeit sind keine Karten verfügbar.</p>
        {:else}
          <!-- Karten als Grid -->
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
  /* Hintergrund mit Farbverlauf für die gesamte Seite */
  .list-bg {
    background: linear-gradient(135deg, #ffcb05, #3b4cca);
    min-height: 100vh;
  }
</style>
