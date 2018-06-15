/**
	 * formatTime：格式化时间
	 * @param:
	 * fm[string]：时间的格式 可以为 'yyyy-MM-dd h:m:s' 或者 'yy-M-d h:m:s'
	* */
module.exports = function(fm) {
	var date = new Date();
	/* eslint-disable */
	var time = {
		y: date.getFullYear(),
		M: date.getMonth() + 1,
		d: date.getDate(),
		h: date.getHours(),
		m: date.getMinutes(),
		s: date.getSeconds()
  };
	return fm.replace(/(y+|M+|d+|h+|m+|s+)/g, function(v) {
		return ((v.length > 1? '0' : '') + eval('time.' + v.slice(-1))).slice(-(v.length > 2 ? v.length : 2));
	});
};