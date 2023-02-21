const assertArraysEqual = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [[1], []]", () => {
    assertArraysEqual.deepEqual(middle([[1], []]), [])
  });
  it("returns [] for [[1, 2], []]", () => {
    assertArraysEqual.deepEqual(middle([[1, 2], []]), [])
  });
  it("returns [2] for [1, 2, 3]", () => {
    assertArraysEqual.deepEqual(middle([1, 2, 3]), [2])
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assertArraysEqual.deepEqual(middle([1, 2, 3, 4, 5]), [3])
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assertArraysEqual.deepEqual(middle([1, 2, 3, 4]), [2, 3])
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assertArraysEqual.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  });
});

