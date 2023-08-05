// const obj1 = {
//   name: "Tolik",
//   age: 35,
// };

// const obj2 = {
//   name: "Alex",
//   __proto__: obj1,
// };

// console.log(obj2);

// const obj3 = obj1;

// console.log(obj3);

// obj3.gender = "man";
// console.log("Obj3:", obj3);
// console.log("Obj1:", obj1);

// const arr = addArr(0, 5);

// function addArr(first, last) {
//   let arr = [];
//   for (let i = first; i <= last; i += 1) {
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(arr);

// const filterArr = arr.filter((data) => data > 2);

// console.log(filterArr);

// const sumArr = filterArr.reduce((sum, number) => sum + number, 0);
// console.log(sumArr);

// const string = "Hi my dear friend";
// const stringArr = string.split(" ");
// const findLongWord = stringArr.reduce(
//   (findWord, currentWord) =>
//     findWord.length > currentWord.length ? find.findWord : currentWord,
//   ""
// );

// console.log(findLongWord);

// const a = [1, 3, 2, 1, 3];
// const b = [0, 1, 2, 9];
// const c = a.concat(b);
// console.log(c);
// const f = [...a, ...b];
// console.log(f);

// const newArrUniqSat = [...new Set(f)];

// console.log(newArrUniqSat.sort());
//*TODO
// function makeArray(firstArray, secondArray, maxLength) {
//   const newArr = firstArray.concat(secondArray);
//   if (newArr.length > maxLength) {
//     return newArr.slice(0, maxLength - 1);
//   }
//   return newArr;
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
//*TODO
// function calculateTotal(number) {
//   let summ = 0;
//   for (let i = 0; i <= number; i += 1) {
//     summ += i;
//   }
//   return summ;
// }

// console.log(calculateTotal(2));
//*ToDo
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],

//   updateBook(oldName, newName) {
//     findIndex = this.books.indexOf(oldName);
//     if (findIndex !== -1) {
//       this.books.splice(findIndex, 1, newName);
//     }
//   },
// };

// bookShelf.updateBook("Haze", "Dungeon chronicles");

// console.log(bookShelf);

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],

  getPotions() {
    return this.potions;
  },

  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion["name"] === newPotion["name"]) {
        console.log("Fuck");
        return `Error! Potion ${newPotion} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
};

atTheOldToad.addPotion({ name: "Invisibility", price: 620 });

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };
//*ToDo - call
// const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];

// function composeMessage(position) {
//   messages.push(
//     `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position} в очереди.`
//   );
// }

// const messages = [];
// for (const order of orders) {
//   index = orders.indexOf(order) + 1;
//   composeMessage.call(order, index);
// }

// console.log(messages);

// function makeSome(parameters) {
//   console.log(`Its ${parameters} with method call in ${this.name}`);
// }

// const obj = {
//   name: "Tolik",
// };

// makeSome.call(obj, "Call");

// const str = "foo.bar=42&foo.baz=hello&bar.baz=true&baz=11";

// const str1 = str.split("&");
// console.log(str1);

// const str2 = str1[0].split("=");
// console.log(!str2[2]);
// str2[2] = {};

// console.log(str2[2]);

// const obj = { name: "tolik", age: 1 };
// console.log(obj["name"]);
// console.log(obj[0]);

// const key = "aaa";
// const f = key.split(".");
// console.log(f);

// const obj = {
//   title: "Hallo world",
//   country: "Ukraine",
//   lang: "uk",
// };
// console.log(obj);
// const newObj = Object.assign(obj, { lang: "uk_eng" });

// console.log(obj);
// console.log(newObj);

// const a = 1;
// const b = 0;

// if (a || b) {
//   console.log("Its OK");
// } else {
//   console.log("Its no OK");
// }
// let a;
// a = [1, 2, 3, 4, 5, 6];
// console.log(a[1]);
async function getColor(number) {
  switch (true) {
    case number === 1:
      return await Promise.resolve(["red"]);
    case number === 2:
      return await Promise.resolve(["blue"]);
    case number === 3:
      return await Promise.resolve(["orange"]);
    default:
      return await Promise.resolve(["Bad request"]);
  }
}

async function getCar(number) {
  const cl = await getColor(number).then((data) => data?.[0]);
  return cl === "red" ? "My favorite color" : "Bad car";
}

async function myCar() {
  number = randomNumber();
  const result = await getCar(number);
  console.log("result===>", result);
}

function randomNumber() {
  return Math.round(Math.random() * 10);
}

myCar();

/**
 *  /\/\/\/\
 *  (*)  (*)
 *  (  /\  )
 *   ( == )
 *    ^^^^
 * */
