console.log("Learn JS");
// 1. Перменные
// const a = 1;
// const b = 3;
// const c = a + b;
// const name = "Tolik";
// console.log("Client name " + name + ", credit " + a);
// console.log(c);

// let z = 1;

// // z = z + 1;
// z += 1;
// console.log(z);

// оператор + для строк является оператором конкатенации

// 2. Типы даных

const a = 2;
console.log(typeof a); // операор позволяет узнать тип данных

// 3. Условные опператоры
const status = "start";
if (status === "e") {
  console.log("Its all ok");
} else if (status === "pending") {
  console.log("Its pending");
} else {
  console.log(" Something bad");
}

const first = 24;
const second = "24";

console.log(first == second); // сравнение толко по значению, js приводит все к одному типу даных
console.log(first === second); // сравнивает по типу и по значению

// тернарный оператор

const isTrue = true;
//   if (isTrue) {
//    console.log("Its true");
//  } else {
//    console.log("Its false");
// }

// isTrue ? console.log("Its true") : console.log("Its false");

//TODO 3. Функции

// function counAge(year) {
//   return 2022 - year;
// }

// const age = counAge(35);

// console.log(age);

//TODO 4.Итерация массива

// function makeNumberTable(start, end) {
//   let finishArr = [];
//   for (let i = start; i <= end; i++) {
//     finishArr.push(i);
//   }
//   return finishArr;
// }

// const finishTask = makeNumberTable(0, 10);
// console.log(finishTask);

//TODO 5. Обьекты

//TODO 6. Math
Math.E;
Math.PI;
Math.pow(2, 2); //* возведение в степень
Math.sqrt(25); //* корень квадратный
Math.max(2, 5, 4, 6); //* определяет максимальное число из переданых
Math.min(2, 5, 4, 6); //* определяет минимальное число из переданы
