// write a function that counts the maximum amount of caracters in a string

// step 1: convert the sting to an object
// count:

function stringToObject(str: string) {
    let obj = {};
  
    for (const char of str.split(" ").join("")) {
      obj[char] = obj[char] + 1 || 1;
    }
    return obj;
  }
  
  function findMax(obj) {
    let max = 0;
    let result;
    for (const key in obj) {
      if (obj[key] > max) {
        max = obj[key];
        result = key;
      }
    }
    return result;
  }
  
  const compose =
    (...functions) =>
    (str) =>
      functions.reduce((acc, curr, index, arr) => {
        return curr(acc);
      }, str);
  
  let compositionFunction = compose(stringToObject, findMax);
  
  console.log("answer:", compositionFunction("olaoluwatade"));
  