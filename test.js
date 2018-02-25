var util = require('./index');

var r1 = util.uuid();

var r2 = util.query('?key1=value1&key2=value2');

var r3 = util.formatTime('yyyy-MM-dd h:m:s');


console.log(r1);

console.log(r2);

console.log(r3);