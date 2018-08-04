let addQueryStringArg = require('../src/addQueryStringArg');
let expect = require('chai').expect;

let encodedString = 'https://www.baidu.com?name=%E4%B8%AD%E5%9B%BD';

describe('addQueryStringArg', function() {
  it('should return true', function() {
    expect(addQueryStringArg('https://www.baidu.com', 'name', '中国')).to.equal(encodedString);
  });
});
