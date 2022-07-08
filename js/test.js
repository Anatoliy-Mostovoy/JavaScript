const obj1 = {
  name: "Tolik",
  age: 35,
};

const obj2 = {
  name: "Alex",
  __proto__: obj1,
};

console.log(obj2);

const obj3 = obj1;

console.log(obj3);

obj3.gender = "man";
console.log("Obj3:", obj3);
console.log("Obj1:", obj1);

const arr = addArr(0, 5);

function addArr(first, last) {
  let arr = [];
  for (let i = first; i <= last; i += 1) {
    arr.push(i);
  }
  return arr;
}
console.log(arr);

const filterArr = arr.filter((data) => data > 2);

console.log(filterArr);

const sumArr = filterArr.reduce((sum, number) => sum + number, 0);
console.log(sumArr);

const string = "Hi my dear friend";
const stringArr = string.split(" ");
const findLongWord = stringArr.reduce(
  (findWord, currentWord) =>
    findWord.length > currentWord.length ? find.findWord : currentWord,
  ""
);

console.log(findLongWord);

const a = [1, 3, 2, 1, 3];
const b = [0, 1, 2, 9];
const c = a.concat(b);
console.log(c);
const f = [...a, ...b];
console.log(f);

const newArrUniqSat = [...new Set(f)];

console.log(newArrUniqSat.sort());
