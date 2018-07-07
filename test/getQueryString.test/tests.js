let expect = chai.expect;

describe('getQueryString', function() {
  it('should return true', function() {
    expect(getQueryString('key1')).to.be.equal('value1');
  });
});
