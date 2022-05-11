// console.log("hi, its promise practice");

// const promise = new Promise((resolve, reject) => {
//   const math = Math.random() > 0.5;

//   setTimeout(() => {
//     if (math) {
//       resolve("Its all ok");
//     }
//     reject("Very bad result");
//   }, 1000);
// });

// console.log(promise);
// promise.then(
//   //* это регистрация колбека. Когда выполниться промис
//   //* выкидывает резултат во внешний код
//   (resolve) => {
//     console.log(resolve);
//   },
//   (error) => {
//     console.log(error);
//   }
// );

//TODO цепочка промисов

// promise
//   .then((resolve) => {
//     console.log(resolve);
//     return 5;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Я выполняюсь всегда) ");
//   });

//TODO пратика с пакемоанми https://pokeapi.co/api/v2/pokemon/{id or name}/

//* функция должна только возвращать даннеы (промис)
// function getPokemonById(id) {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((data) => {
//     return data.json();
//   });
// }

// getPokemonById(1).then(onFetchSuccess).catch(onFetchReject); //* обработка во внешнем коде, не в функции fetch

// function onFetchSuccess(pokemon) {
//   console.log(pokemon);
// }

// function onFetchReject(reject) {
//   console.log(reject);
// }

//! Делаем практику с получением Пакемонов и ренедером их имен
import { refs } from "./variables.js";

function getPokemonById(id) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((data) => {
    return data.json();
  });
}

getPokemonById(1).then(onResolve).catch(onReject);

function onResolve({ name }) {
  refs.mainHeader.textContent = name;
}

function onReject(error) {
  console.log(error);
}
