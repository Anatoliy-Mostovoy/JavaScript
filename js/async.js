console.log("Its about async");

//TODO Event Loop

const interval = setInterval(() => {
  console.log("Это SetInterval");
}, 1000);

clearInterval(interval);

const timeout = setTimeout(() => {
  console.log('"Это Settimeout');
}, 1000);

clearTimeout(timeout);
