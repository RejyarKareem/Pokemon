export async function load() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await res.json();

  // data.results = Array mit { name, url }
  return {
    pokemonList: data.results
  };
}