
export async function load({ params }) {
  const name = params.name;

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) {
    return { pokemon: null };
  }

  const data = await res.json();

  return {
    pokemon: {
      id: data.id,
      name: data.name,
      image: data.sprites.other['official-artwork'].front_default,
      types: data.types.map(t => t.type.name),
      height: data.height,
      weight: data.weight,
      stats: data.stats.map(stat => ({
        name: stat.stat.name,
        value: stat.base_stat
      }))
    }
  };
}