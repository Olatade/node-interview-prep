function join(str) {
  return (arr) => {
    return arr.join(str);
  };
}

function split(str) {
  return str.split("");
}

function reverse(arr) {
  return arr.reverse();
}

const composed =
  (...functions) =>
  (str) =>
    functions.reduce((acc, curr, index, array) => {
      return curr(acc);
    }, str);

//join uses currying

const composedFunction = composed(split, reverse, join("/"));

console.log(composedFunction("HELLO"));
