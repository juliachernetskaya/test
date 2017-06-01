;(function($) {
	jQuery.fn.plugin = function() {
		var intervalArray = $('time');
		for (var i = 0; i < intervalArray.length; i++) {
			var arrayTimes = intervalArray[i].attributes['data-interval'].value.split(','),
				firstDate = new Date(arrayTimes[0]).toDateString(),
				lastDate = new Date(arrayTimes[arrayTimes.length - 1]).toDateString(),
				d = firstDate.slice(8,10),
				m = firstDate.slice(4,7),
				y = firstDate.slice(11,),
				ld = lastDate.slice(8,10),
				lm = lastDate.slice(4,7),
				ly = lastDate.slice(11,),
				string = "";
			if (m === lm && y === ly) {string = `${m} ${d} - ${ld}, ${arrayTimes.length} days`;}
			if (m !== lm && y === ly) {string = `${m} ${d} - ${lm} ${ld}, ${arrayTimes.length} days`;}
			if (m !== lm && y !== ly) {string = `${y} ${m} ${d} - ${ly} ${lm} ${ld}, ${arrayTimes.length} days`;};

			intervalArray[i].append(string);
		}
	};
})(jQuery);