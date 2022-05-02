console.log("Its object practice");

const person = {
  age: 35,
  name: "Tolik",
  gender: "man",
  languages: ["en", "ukr", "ger"],
  greet(data) {
    //* старый синтаксис greet: function(){}
    console.log(`Hi, its my green ${data}`); //* метод -в ES6 короткий синтаксис
  },
};
console.log(person);

delete person["gender"]; //* удаляет поля

console.log(person);

//* перебор обьекта

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    //* что бы перебирать только ключи, котрые есть в обьекте а не в прототипе
    console.log("key: ", key);
    console.log("value: ", person[key]);
  }
}

const keyObj = Object.keys(person);
console.log(keyObj);
const valueObj = Object.values(person);
console.log(valueObj);
