# 一些实用的工具函数

![image](https://www.travis-ci.org/Joo-fanChang/changzhn-util.svg?branch=master)

##　使用方法
```shell
npm i changzhn-util -S
```


```js
import util from 'changzhn-util';

var id = util.uuid();
```
或者
```js
var util = require('changzhn-util');

```


## 函数列表
- uuid：生成一个随机的id
```js
var id = util.uuid();
console.log(id); // 9f673cb6-459f-4595-bf05-1bfabeec1a6c
```

- getQueryString: 获取url的query参数
```js
//　例如当前页面url http://print.yonyoucloud.com?tenantid=hello&sendType=2
var tenantId = util.getQueryString('tenantid');
console.log(tenantId); // hello
```

- formatTime:　格式化时间
```js
//fm[string]：时间的格式 可以为 'yyyy-MM-dd h:m:s' 或者 'yy-M-d h:m:s'

var time1 = util.formatTime('yyyy-MM-dd h:m:s');
console.log(time1); // 2018-07-06 16:7:10

var time2 = util.formatTime('yyyy-MM-dd h:m:s');
console.log(time2); // 18-7-6 16:8:10
```

- deepclone: 深度克隆一个数据
```js
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
};

let co = util.deepclone(o);

console.log(co === o); //false
```

- addQueryStringArg　向url中添加参数，经过encoded处理
```js
let encodedStr = util.addQueryStringArg('https://www.baidu.com', 'name', '中国');
console.log(encodedStr); // https://www.baidu.com?name=%E4%B8%AD%E5%9B%BD
```
