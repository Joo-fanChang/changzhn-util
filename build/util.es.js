var uuid=function(){var t,e,n="";for(t=0;t<32;t++)e=16*Math.random()|0,8!==t&&12!==t&&16!==t&&20!==t||(n+="-"),n+=(12===t?4:16===t?3&e|8:e).toString(16);return n},formatTime=function formatTime(fm){var date=new Date,time={y:date.getFullYear(),M:date.getMonth()+1,d:date.getDate(),h:date.getHours(),m:date.getMinutes(),s:date.getSeconds()};return fm.replace(/(y+|M+|d+|h+|m+|s+)/g,function(v){return((v.length>1?"0":"")+eval("time."+v.slice(-1))).slice(-(v.length>2?v.length:2))})},getQueryString=function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(e);return n?decodeURIComponent(n[2]):""},changzhnUtil={uuid:uuid,formatTime:formatTime,getQueryString:getQueryString},changzhnUtil_1=changzhnUtil.uuid,changzhnUtil_2=changzhnUtil.formatTime,changzhnUtil_3=changzhnUtil.getQueryString;export default changzhnUtil;export{changzhnUtil_1 as uuid,changzhnUtil_2 as formatTime,changzhnUtil_3 as getQueryString};
