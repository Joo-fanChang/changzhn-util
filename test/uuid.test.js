let uuid = require('../src/uuid');
let expect = require('chai').expect;

let char = '[0-9a-f]';

describe('uuid', function() {
  it('should return true', function() {
    expect(uuid()).to.match(new RegExp(`${char}{8}-${char}{4}-${char}{4}-${char}{4}-${char}{12}`));
  });
});
