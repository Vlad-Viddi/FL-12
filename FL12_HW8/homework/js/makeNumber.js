function makeNumber(string) {
	let input = string.split('');
	let output = '';
	for (let i = 0; i < input.length; i++) {
		if (!isNaN(Number(input[i]))) {
			output += input[i];
		}
	}
	return output;
}

makeNumber('qw1w2t3m4yyi5');