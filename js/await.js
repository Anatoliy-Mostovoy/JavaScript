// console.log("Its async await");
// import { refs } from "./variables.js";

// async function fetchPokemon(idPokemon) {
//   try {
//     const data = await fetch(`https://pokeapi.co/api/v2/ability/${idPokemon}`);
//     const pokemon = await data.json();
//     return pokemon;
//   } catch (error) {
//     console.log("Its error try...catch block");
//   }
// }

// fetchPokemon(9)
//   .then((pokemon) => {
//     console.log(pokemon.name);
//     refs.mainHeader.textContent = pokemon.name;
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log("Its block error");
//   })
//   .finally(() => {
//     console.log("Its block finally");
//   });
const word = ["qwerty", "word", "dady"];

const data = new Promise((res, rej) => resolve("hallo"));
const data1 = new Promise((res, rej) => resolve("I"));
const data2 = new Promise((res, rej) => resolve("word"));

const f1 = async () => {
  const result = await Promise.all([data(), data1(), data2()]);
  result.then((data) => data);
  return a;
};

class Search {
  constructor(data) {
    this.data = data;
  }
}
