module.exports = {
	/**
	* uuid：随机生成一个 16进制的id 4eef3609-5b83-4408-866a-aee202bf1a20
	*/
	uuid: function () {
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
	},
	/**
	 * getQueryString：获取query中某个name对应的值
	 */
	getQueryString: function (name) {
		var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
		var r = window.location.search.substr(1).match(reg);
		return r ? decodeURIComponent(r[2]) : '';
	},
	/**
	 * query：url查询参数转为json格式
	 * @param:
	 * 	search[string]：查询参数，只是 ? 后的部分
	 * */
	query: function (search) {
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
	},
	/**
	 * formatTime：格式化时间
	 * @param:
	 * fm[string]：时间的格式 可以为 'yyyy-MM-dd h:m:s' 或者 'yy-M-d h:m:s'
	* */
	formatTime: function(fm) {
		var date = new Date();
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
	}
};
