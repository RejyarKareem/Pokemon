<script lang="ts">
  interface Props {
    // Der Boosterpack wird als Prop übergeben
    pack: any;
  }

  let { pack }: Props = $props();
</script>

<!-- card h-100 sorgt dafür, dass alle Cards gleich hoch sind -->
<!-- Bootstrap Card für jedes Boosterpack -->
<div class="card h-100 shadow-sm">
  <!-- Bild: zeigt das erste Poster des Packs, zentriert und skaliert -->
  <img
    src={pack.poster[0]}
    alt={pack.name}
    class="card-img-top mx-auto d-block"
    style="object-fit: cover; max-height: 250px; width: auto;"
  />

  <div class="card-body d-flex flex-column">
    <!-- Titel: Name des Boosterpacks -->
    <h5 class="card-title fs-5">{pack.name}</h5>

    <!-- Informationen: Sprache und Karten pro Pack -->
    <p class="card-text fs-6 mb-1">
      <strong>Sprache:</strong>
      {pack.language}
    </p>
    <p class="card-text fs-6 mb-1">
      <strong>Karten pro Pack:</strong>
      {pack.cards_per_pack}
    </p>

    <!-- Link zu Detailseite, am unteren Rand platziert -->
    <a
      href={`/boosterpacks/${pack._id}`}
      class="mt-auto btn btn-primary btn-sm"
    >
      Details
    </a>
  </div>
</div>
