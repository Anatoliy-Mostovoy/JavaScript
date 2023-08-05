// console.log("Its practice with arr");

// const somePeople = [
//   { name: "Tolik", age: 23 },
//   { name: "Lola", age: 14 },
//   { name: "Alex", age: 13 },
// ];

// const nameSmallerPeople = somePeople.reduce((findPeople, plp) => {
//   return plp?.age <= 18
//     ? [...findPeople, { [plp.name]: plp["name"], age: plp["age"] }]
//     : findPeople;
// }, []);

// console.log(nameSmallerPeople);

const arr = [
  { id: 1, name: "Tolik" },
  { id: 2, name: "Nik" },
  { id: 3, name: "Alla" },
  { id: 2, name: "Lulu" },
];

const newArr = arr.reduce((acc, current) => {
  if (acc?.id === current.id) {
    acc = [
      ...acc,
      { [current.id]: current["id"], [current.nem]: [[current.name]] },
    ];
  } else {
    acc = [{ [current.id]: current["id"], [current.name]: [[current.name]] }];
  }

  return acc;
}, []);
console.log(newArr);

// const a = { b: 10 };
// const c = { x: a };
// const z = { x: a };s
// a["r"] = 20;
// console.log(c);

// const testUrl =
//   "http://myurl.com?foo.bar.tt=42&foo.baz=hello&bar.baz=true&baz=11";
// const tmp = testUrl.split("?")[1].split("&");
// let res = {};
// const func = (arr, data, slice = {}, depth = 0) => {
//   // console.log(Object.keys(slice).length)
//   if (depth < arr.length) {
//     if (Object.keys(slice).length === 0) {
//       slice[arr[depth]] = func(arr, data, slice[arr[depth]], depth + 1);
//     } else {
//       const tmp = func(arr, data, slice[arr[depth]], depth + 1);
//       if (typeof tmp === "object") {
//         slice[arr[depth]] = { ...slice[arr[depth]], ...tmp };
//       } else {
//         slice[arr[depth]] = { tmp };
//       }
//     }
//   } else {
//     slice = data;
//   }
//   return slice;
// };

// tmp.forEach((item, i) => {
//   const rr = item.split("=");
//   const url = rr[0].split(".");
//   console.log(rr[1]);
//   res = func(url, rr[1], res);
// });

// console.log(res);
// console.log(JSON.stringify(res));

// const d = [1, 2, 3];
// const c = 3;
// const t = [...d, c];
// console.log(t);
