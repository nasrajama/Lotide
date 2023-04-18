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


const takeUntil = (array, callback) => {
  let results = [];
  for (let i of array) {
    if (!callback(i)) {
      results.push(i);
    } else {
      return results;
    }
  }
  return results;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2 ]));

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, (x) => x === ',');
console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood" ]));

module.exports = takeUntil;