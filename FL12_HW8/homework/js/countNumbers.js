function countNumbers(string) {
	
	function makeNumber(string) {
		let output = '';
		let input = string.split('');
		for (let i = 0; i < input.length; i++) {
			if (!isNaN(Number(input[i]))) {
				output += input[i];
			}
		}
		return output;
	}
	let inputObject = makeNumber(string);
	let outputObject = {};
	for (const digit of inputObject) {
		if (!(digit in outputObject)) {
			outputObject[digit] = 1;
		} else {
			outputObject[digit] += 1;
		}
	}
	return outputObject;
}

countNumbers('qwe123qwe1234');