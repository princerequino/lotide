const assert = require('chai').assert;
const tail = require('../tail');
const result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns [2,3] for  [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns 2 for the length of elements in array for results.", () => {
    tail(result);
    assert.strictEqual(result.length, 2); 
  });


  it("returns [] for ['Hello']", () => {
    assert.deepEqual(tail(['Hello']), []);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

});

module.exports = tail;