export async function load({ params }) {
  // Name des Pokémons aus der URL extrahieren
  const name = params.name;

  // Anfrage an die PokéAPI für das gewünschte Pokémon
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  // Falls die Anfrage fehlschlägt, wird ein leeres Ergebnis zurückgegeben
  if (!res.ok) {
    return { pokemon: null };
  }

  // Antwortdaten im JSON-Format parsen
  const data = await res.json();

  // Rückgabe eines vereinfachten Pokémon-Objekts an die Svelte-Seite
  return {
    pokemon: {
      id: data.id,
      name: data.name,
      image: data.sprites.other["official-artwork"].front_default,
      types: data.types.map((t) => t.type.name),
      height: data.height,
      weight: data.weight,
      stats: data.stats.map((stat) => ({
        name: stat.stat.name,
        value: stat.base_stat,
      })),
    },
  };
}
