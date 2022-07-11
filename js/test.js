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
        return `Error! Potion ${newPotion} is already in your inventory!`;
      }
      this.potions.push(newPotion);
      break;
    }
  },
};

atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
console.log(atTheOldToad["potions"]);
