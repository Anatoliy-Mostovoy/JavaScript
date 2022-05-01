console.log("Its practice with arr");

const somePeople = [
  { name: "Tolik", age: 23 },
  { name: "Lola", age: 14 },
  { name: "Alex", age: 13 },
];

const nameSmallerPeople = somePeople.reduce((findPeople, plp) => {
  return plp.age <= 18
    ? [...findPeople, { name: plp["name"], age: plp["age"] }]
    : findPeople;
}, []);

console.log(nameSmallerPeople);
