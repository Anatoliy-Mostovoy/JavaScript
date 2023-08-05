//ToDo Паша
// const parser = (url) => {
//   const result = {};

//   const queryString = url.substring(url.indexOf("?") + 1);

//   queryString.split("&").forEach((queryParam) => {
//     parseInternal(queryParam, result);
//   });

//   console.log(JSON.stringify(result));

//   return result;
// };

// const parseInternal = (queryParam, result) => {
//   const keyValuePair = queryParam.split("=");
//   if (keyValuePair[1].length > 0) {
//     const key = keyValuePair[0];
//     const value = keyValuePair[1];
//     handleNested(key, value, result);
//   }
// };

// const handleNested = (key, value, result) => {
//   const keyFragments = key.split(".");
//   if (keyFragments.length === 1)
//     result[key] = value; // parse value to appropriate type
//   else {
//     if (!result[keyFragments[0]]) result[keyFragments[0]] = {};
//     handleNested(
//       key.substring(key.indexOf(".") + 1),
//       value,
//       result[keyFragments[0]]
//     );
//   }
// };

// module.exports = parser;

// function validURL(str) {
//   const pattern = new RegExp(
//     "^(https?://)?" +
//       "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
//       "((\\d{1,3}\\.){3}\\d{1,3}))" +
//       "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
//       "(\\?[;&a-z\\d%_.~+=-]*)?" +
//       "(\\#[-a-z\\d_]*)?$",
//     "i"
//   );

//   const checkForEquals = new RegExp(
//     "((&[a-z0-9\\d%_.~+]*=)([a-z0-9\\d%_.~+]*)=)|(\\?[a-z0-9\\d%_.~+]*(=|\\?))([a-z0-9\\d%_.~+]*)(=|\\?)|((&[a-z0-9\\d%_.~+]*=\")([a-z0-9\\d%_.~+]*))'|((\\?[a-z0-9\\d%_.~+]*(=|\\?)\")([a-z0-9\\d%_.~+]*))'|((&[a-z0-9\\d%_.~+]*=')([a-z0-9\\d%_.~+]*))\"|((\\?[a-z0-9\\d%_.~+]*(=|\\?)')([a-z0-9\\d%_.~+]*))\""
//   ); // if return true  => return false
//   if (str.search(checkForEquals)) {
//     return false;
//   }

//   return pattern.test(str);
// }

module.exports = parser;

//TODO
// const parser = (testUrl) => {
//   console.log(testUrl);
//   const myUrl = new URL(testUrl);

//   const arr = myUrl.search.replace("?", "").split("&");
//   console.log(arr);
//   const obj = arr.reduce((acc, item) => {
//     let itemArr = item.split("=");
//     const isDot = itemArr[0].indexOf(".");
//     const value = itemArr[1];

//     if (isDot === -1) {
//       const key = itemArr[0];

//       switch (true) {
//         case !value:
//           break;
//         case !isNaN(Number(value)):
//           acc = {
//             ...acc,
//             [key]: Number(value),
//           };
//           break;
//         case value[0] === '"' && value[value.length - 1] === '"':
//           acc = {
//             ...acc,
//             [key]: value.replace(/['"]+/g, ""),
//           };
//           break;

//         case value === "true":
//           acc = {
//             ...acc,
//             [key]: true,
//           };
//           break;
//         case value === "false":
//           acc = {
//             ...acc,
//             [key]: false,
//           };
//           break;
//         default:
//           acc = {
//             ...acc,
//             [key]: value,
//           };
//           break;
//       }
//     }

//     const arrWithDot = itemArr[0].split(".");

//     if (arrWithDot.length === 2) {
//       const firstKey = arrWithDot[0];
//       const secondKey = arrWithDot[1];

//       switch (true) {
//         case !value:
//           break;
//         case value[0] === '"' && value[value.length - 1] === '"':
//           acc = {
//             ...acc,
//             [firstKey]: { [secondKey]: value.replace(/['"]+/g, "") },
//           };
//           break;

//         case !isNaN(Number(value)):
//           acc = {
//             ...acc,
//             [firstKey]: { [secondKey]: Number(value) },
//           };
//           break;
//         case value === "true":
//           acc = {
//             ...acc,
//             [firstKey]: { [secondKey]: true },
//           };
//           break;
//         case value === "false":
//           acc = {
//             ...acc,
//             [firstKey]: { [secondKey]: false },
//           };
//           break;

//         default:
//           acc = { ...acc, [firstKey]: { [secondKey]: value } };
//           break;
//       }
//     }

//     if (arrWithDot.length === 3) {
//       const firstKey = arrWithDot[0];
//       const secondKey = arrWithDot[1];
//       const thirdKey = arrWithDot[2];

//       switch (true) {
//         case !value:
//           break;
//         case value[0] === '"' && value[value.length - 1] === '"':
//           acc = {
//             ...acc,
//             [firstKey]: {
//               [secondKey]: { [thirdKey]: value.replace(/['"]+/g, "") },
//             },
//           };
//           break;
//         case !isNaN(Number(value)):
//           acc = {
//             ...acc,
//             [firstKey]: { [secondKey]: { [thirdKey]: Number(value) } },
//           };
//           break;
//         case value === "true":
//           acc = {
//             ...acc,
//             [firstKey]: { [secondKey]: { [thirdKey]: true } },
//           };
//           break;
//         case value === "false":
//           acc = {
//             ...acc,
//             [firstKey]: { [secondKey]: { [thirdKey]: false } },
//           };
//           break;
//         default:
//           acc = {
//             ...acc,
//             [firstKey]: { [secondKey]: { [thirdKey]: value } },
//           };
//           break;
//       }
//     }

//     return acc;
//   }, {});

//   console.log("JSON:", JSON.stringify(obj, null, 2));
//   return Object.keys(obj)[0] ? obj : null;
// };

// module.exports = parser;

//TODO
// const parser = (testUrl) => {
//   const myUrl = new URL(testUrl);

//   if (!validURL(myUrl)) {
//     throw new Error("Invalid URL");
//   }

//   const queryString = testUrl.substring(testUrl.indexOf("?") + 1);

//   if (queryString.indexOf("?") !== -1) throw new Error();

//   const arr = queryString.split("&");
//   console.log(arr);
//   const obj = arr.reduce((acc, item) => {
//     let itemArr = item.split("=");
//     const isDot = itemArr[0].indexOf(".");
//     const value = itemArr[1];

//     if (isDot === -1) {
//       const key = itemArr[0];

//       switch (true) {
//         case !value:
//           break;
//         case !isNaN(Number(value)):
//           acc = {
//             ...acc,
//             [key]: Number(value),
//           };
//           break;
//         case value[0] === '"' && value[value.length - 1] === '"':
//           acc = {
//             ...acc,
//             [key]: value.replace(/['"]+/g, ""),
//           };
//           break;

//         case value === "true":
//           acc = {
//             ...acc,
//             [key]: true,
//           };
//           break;
//         case value === "false":
//           acc = {
//             ...acc,
//             [key]: false,
//           };
//           break;
//         default:
//           acc = {
//             ...acc,
//             [key]: value,
//           };
//           break;
//       }
//     }

//     const arrWithDot = itemArr[0].split(".");

//     if (arrWithDot.length === 2) {
//       const firstKey = arrWithDot[0];
//       const secondKey = arrWithDot[1];

//       switch (true) {
//         case !value:
//           break;
//         case value[0] === '"' && value[value.length - 1] === '"':
//           acc = {
//             ...acc,
//             [firstKey]: { [secondKey]: value.replace(/['"]+/g, "") },
//           };
//           break;

//         case !isNaN(Number(value)):
//           acc = {
//             ...acc,
//             [firstKey]: { [secondKey]: Number(value) },
//           };
//           break;
//         case value === "true":
//           acc = {
//             ...acc,
//             [firstKey]: { [secondKey]: true },
//           };
//           break;
//         case value === "false":
//           acc = {
//             ...acc,
//             [firstKey]: { [secondKey]: false },
//           };
//           break;

//         default:
//           acc = { ...acc, [firstKey]: { [secondKey]: value } };
//           break;
//       }
//     }

//     if (arrWithDot.length === 3) {
//       const firstKey = arrWithDot[0];
//       const secondKey = arrWithDot[1];
//       const thirdKey = arrWithDot[2];

//       switch (true) {
//         case !value:
//           break;
//         case value[0] === '"' && value[value.length - 1] === '"':
//           acc = {
//             ...acc,
//             [firstKey]: {
//               [secondKey]: { [thirdKey]: value.replace(/['"]+/g, "") },
//             },
//           };
//           break;
//         case !isNaN(Number(value)):
//           acc = {
//             ...acc,
//             [firstKey]: { [secondKey]: { [thirdKey]: Number(value) } },
//           };
//           break;
//         case value === "true":
//           acc = {
//             ...acc,
//             [firstKey]: { [secondKey]: { [thirdKey]: true } },
//           };
//           break;
//         case value === "false":
//           acc = {
//             ...acc,
//             [firstKey]: { [secondKey]: { [thirdKey]: false } },
//           };
//           break;
//         default:
//           acc = {
//             ...acc,
//             [firstKey]: { [secondKey]: { [thirdKey]: value } },
//           };
//           break;
//       }
//     }

//     return acc;
//   }, {});

//   console.log("JSON:", JSON.stringify(obj, null, 2));
//   return Object.keys(obj)[0] ? obj : null;
// };
// function validURL(str) {
//   const pattern = new RegExp(
//     "^(https?:\\/\\/)?" + // protocol
//       "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
//       "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
//       "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
//       "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
//       "(\\#[-a-z\\d_]*)?$",
//     "i"
//   ); // fragment locator
//   return pattern.test(str);
// }

// module.exports = parser;

//TODO
// const parser = (url) => {
//   const result = {};

//   const queryString = url.substring(url.indexOf("?") + 1);

//   if (queryString.indexOf("?") !== -1) throw new Error(); // add error message

//   queryString.split("&").forEach((queryParam) => {
//     parseInternal(queryParam, result);
//   });

//   console.log(JSON.stringify(result));

//   return result;
// };

// const parseInternal = (queryParam, result) => {
//   const keyValuePair = queryParam.split("=");
//   if (keyValuePair.length > 2) throw new Error(); // add error message
//   else if (keyValuePair[1].length > 0) {
//     const key = keyValuePair[0];
//     const value = keyValuePair[1];
//     handleNested(key, value, result);
//   }
// };

// const handleNested = (key, value, result) => {
//   const keyFragments = key.split(".");
//   if (keyFragments.length === 1)
//     result[key] = value; // parse value to appropriate type
//   else {
//     if (!result[keyFragments[0]]) result[keyFragments[0]] = {};
//     handleNested(
//       key.substring(key.indexOf(".") + 1),
//       value,
//       result[keyFragments[0]]
//     );
//   }
// };

// module.exports = parser;
