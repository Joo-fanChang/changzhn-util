/**
	* uuid：随机生成一个 16进制的id 4eef3609-5b83-4408-866a-aee202bf1a20
	*/
module.exports =  function () {
  var i,
    random;
  var uuid = '';

  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += '-';
    }
    uuid += (
      i === 12
        ? 4
        : (
          i === 16
            ? (random & 3 | 8)
            : random)).toString(16);
  }

  return uuid;
};
