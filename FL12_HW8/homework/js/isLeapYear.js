function isLeapYeap(input) {
	let date = new Date(input).getFullYear();
	if (isNaN(date)) {
		return 'Invalid Date';
	} else {
		let output = new Date(date, 1, 29).getDate();

		if (output === 29) {
			return `${date} is a leap year`;
		} else {
			return `${date} is not a leap year`;
		}
	}
}
isLeapYeap('2020-01-01 00:00:00');