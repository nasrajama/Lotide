const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅  Arrays are equal: [${array1}] === [${array2}]`);
  } else {
    console.log(`🛑🛑🛑  Arrays are not equal: [${array1}] !== [${array2}]`);
  }
};

const flatten = function(array) {
  let flattenedArray = [];
  
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flattenedArray = flattenedArray.concat(array[i]);
    } else {
      flattenedArray.push(array[i]);
    }
  }
  
  return flattenedArray;
};

module.exports = flatten;
