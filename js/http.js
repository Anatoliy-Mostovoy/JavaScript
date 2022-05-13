//* Делаем запрос на API пакемона
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/1";
const pokemonData = fetch(BASE_URL).then((data) => {
  return data.json();
});

pokemonData
  .then((pokemon) => {
    console.log(pokemon);
  })
  .catch((error) => {
    console.log(error);
  });
