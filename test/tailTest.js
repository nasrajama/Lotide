const assertEqual = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assertEqual.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [4, 5] for [3, 4, 5]", () => {
    assertEqual.deepEqual(tail([3, 4, 5]), [4, 5]); 
  });
});
