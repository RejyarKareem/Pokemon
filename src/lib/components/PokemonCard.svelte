<script lang="ts">
  // Die Karte wird als Prop übergeben
  export let card;
</script>

<!-- Bootstrap-Card für jede Pokémon-Karte -->
<div class="card h-100 shadow-sm">
  <!-- Bild: zeigt das Kartenbild, zentriert und skaliert -->
  <!-- .mx-auto: horizontale Zentrierung für Bild -->
  <img
    src={card.poster}                
    alt={card.name}                  
    class="card-img-top mx-auto d-block"
    style="object-fit: cover; max-height: 250px; width: auto;" 
  />

  <div class="card-body d-flex flex-column">
    <!-- Kartenname als Titel -->
    <h5 class="card-title fs-5">{card.name}</h5>

    <!-- Karteneigenschaften: Typ, Seltenheit, HP -->
    <p class="card-text fs-6 mb-1">
      <strong>Typ:</strong> {card.type}
    </p>
    <p class="card-text fs-6 mb-1">
      <strong>Seltenheit:</strong> {card.rarity}
    </p>
    <p class="card-text fs-6 mb-3">
      <strong>HP:</strong> {card.hp}
    </p>

    <!-- Link zur Detailseite, am unteren Rand platziert -->
    <a
      href={`/cards/${card._id}`}     
      class="mt-auto btn btn-success btn-sm"
    >
      Details
    </a>
  </div>
</div>