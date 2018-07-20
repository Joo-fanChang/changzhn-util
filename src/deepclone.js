'use strict';

const getDataType = data => {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
};

const deepclone = source => {
  let sourceType = getDataType(source);

  switch (sourceType) {
  case 'number':
  case 'string':
  case 'boolean':
  case 'null':
  case 'undefined':
  case 'function':
    return source;
  case 'object':
    let o = {};
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        const src = source[key];
        o[key] = deepclone(src);
      }
    }
    return o;
  case 'array':
    let a = [];
    source.forEach(item => a.push(deepclone(item)));
    return a;
  }
};


module.exports = deepclone;
