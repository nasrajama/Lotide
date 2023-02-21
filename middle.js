const middle = function(array) {
  let result = [];
  let middleIndex = Math.floor(array.length / 2);
  
  if (array.length <= 2) {
    return result;
  } else if (array.length % 2 === 0) {
    result.push(array[middleIndex - 1], array[middleIndex]);
  } else {
    result.push(array[middleIndex]);
  }
  
  return result;
};

module.exports = middle;