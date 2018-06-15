/**
 * query：url查询参数转为json格式
 * @param:
 * 	search[string]：查询参数，只是 ? 后的部分
 * */
module.exports = function(search) {
	if (search === void 0) {
		search = '';
	}
	return (function(queryString) {
		if (queryString === void 0) {
			queryString = '';
		}
		return (function(q) {
			return (queryString.split('&').forEach(function(item) {
				return (function(kv) {
					return kv[0] && (q[kv[0]] = kv[1]);
				})(item.split('='));
			}), q);
		})({});
	})(search.split('?')[1]);
};