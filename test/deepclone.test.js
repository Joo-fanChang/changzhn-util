let deepclone = require('../src/deepclone');
let expect = require('chai').expect;

let n = 4175;
let s = 'hello';
let b = true;
let o = {
  name: 'changzhn',
  age: 18,
  others: {
    key1: n,
    key2: s,
    key3: b,
    key5: function() {},
    key6: ['a', 'b', 'c']
  }
}

describe('deepclone', function() {
  it('should return true', function() {
    expect(deepclone(n)).to.equal(n);
  });

  it('should return true', function() {
    expect(deepclone(s)).to.equal(s);
  });

  it('should return true', function() {
    expect(deepclone(b)).to.equal(b);
  });

  it('should return true', function() {
    expect(deepclone(o)).to.not.equal(o);
  });
});
