//* Делаем запрос на API пакемона

const pokemonData = fetch("https://pokeapi.co/api/v2/pokemon/1").then(
  (data) => {
    return data.json();
  }
);

pokemonData
  .then((pokemon) => {
    console.log(pokemon);
  })
  .catch((error) => {
    console.log(error);
  });
