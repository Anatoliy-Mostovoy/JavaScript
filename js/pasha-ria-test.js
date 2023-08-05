const parser = (url) => {
  const queryStringStart = url.indexOf("?") + 1; //* index первого ?

  const queryString = url.substring(queryStringStart); //* создаем новую подстроку

  //* проверяем наличие в строке запроса ? или создалась новая подстрока
  if (queryStringStart === 0 || queryString.length === 0) {
    return null;
  }
  //* проверка на второй ? в строке
  if (queryString.indexOf("?") !== -1) {
    throw new Error("Incorrect format includes '?' in query string");
  }

  const result = {};

  queryString.split("&").forEach((queryParam) => {
    parseInternal(queryParam, result);
  });

  return result;
};

const parseInternal = (queryParam, result) => {
  const keyValuePair = queryParam.split("=");
  if (keyValuePair.length > 2) {
    //case when more than one '='
    throw new Error(
      "Incorrect format includes more than one '=' for query parameter"
    );
  }

  const key = keyValuePair[0];
  const stringValue = keyValuePair[1];

  if (stringValue || stringValue.length > 0) {
    const value = matchType(stringValue);
    handleNested(key, value, result);
  } //else just skip parameter
};

const handleNested = (key, value, result) => {
  const keyFragments = key.split(".");
  if (keyFragments.length === 1) {
    result[key] = value;
  } else {
    if (!result[keyFragments[0]]) {
      result[keyFragments[0]] = {}; //create node if not exists
    }
    handleNested(
      key.substring(key.indexOf(".") + 1),
      value,
      result[keyFragments[0]]
    );
  }
};

const matchType = (value) => {
  if (!isNaN(Number(value))) return Number(value);
  else if (value === "true" || value === "false") return Boolean(value);
  else if (value.match(/\"(\d|\w)*\"/)) {
    return value.replaceAll('"', "");
  } else if (value.indexOf('"') !== -1) {
    throw new Error("Incorrect format: contains one or more than two brackets");
  } else {
    return value;
  }
};

module.exports = parser;
