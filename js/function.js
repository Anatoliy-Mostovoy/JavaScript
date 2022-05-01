console.log("Its function");

//TODO Function declaration
function makeSomeName(name) {
  console.log(`Hi! My name is ${name}`);
}
makeSomeName("Tolik");

//TODO Function Expression
const makeName = function (name1) {
  console.log(`Hi! My name is ${name1}`);
};
makeName("Yuliia");

//TODO Анонимные функции
setInterval;
setTimeout;

//TODO Стрелочные функции

const sumFunction = (...arg) => {
  let sum = 0;
  for (let num of arg) {
    sum += num;
  }
  return sum;
};

console.log(sumFunction(1, 1, 4, 5, 6, 8, 5, 10));

//TODO Замыкание
//* Замыкание это способность функции возвращать другу функцию
//* самая большая польза - создание приватных переменных

function makeDishes(dishName) {
  return function cooks(nameCooks) {
    console.log(`${nameCooks} варит ${dishName}`);
  };
}

const someDishes = makeDishes("Pie");
console.log(someDishes("Tolik"));

function count() {
  let x = 0;
  return function (number) {
    x += number;
    return x;
  };
}

const makeSum = count();

console.log(makeSum(1));
console.log(makeSum(4));
