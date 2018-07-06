/**
	 * getQueryString：获取query中某个name对应的值
	 */
export default function() {
	var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
	var r = window.location.search.substr(1).match(reg);
	return r ? decodeURIComponent(r[2]) : '';
}