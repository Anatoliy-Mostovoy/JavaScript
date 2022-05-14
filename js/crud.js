console.log("Its CRUD");

const BASE_URL = "http://localhost:3000/users";

//TODO Делаем GET запрос

// function getUser() {
//   return fetch(BASE_URL).then((require) => {
//     return require.json();
//   });
// }

// getUser().then(console.log);

//TODO Делаем POST запрос

// function createUser(userName, userAge) {
//   const options = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json ",
//     },
//     body: JSON.stringify({ name: userName, age: userAge }),
//   };

//   return fetch(BASE_URL, options)
//     .then((require) => require.json())
//     .then((user) => user);
// }

//TODO Делаем изменения
// function updateUser(idUser) {
//   const options = {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name: "Oleg" }),
//   };

//   return fetch(`${BASE_URL}/${idUser}`, options).then((response) =>
//     response.json()
//   );
// }

// updateUser(1);

//TODO Делаем удаление

function deleteUser(idUser) {
  const options = {
    method: "DELETE",
  };

  return fetch(`${BASE_URL}/${idUser}`, options).then((response) =>
    response.json()
  );
}

// deleteUser(2);
