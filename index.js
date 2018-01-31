module.exports = {
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
	getQueryString: function (name) {
		var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
		var r = window.location.search.substr(1).match(reg);
		return r ? decodeURIComponent(r[2]) : '';
	},
	formatTime: function () {

	}
};
