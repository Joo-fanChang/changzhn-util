'use strict';

const addQueryStringArg = (url, name, value) => {
  if (url.includes('?')) {
    url += '&';
  } else {
    url += '?';
  }

  url += `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  return url;
};

module.exports = addQueryStringArg;
