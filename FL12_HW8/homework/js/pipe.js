function pipe() {
	function addOne(x) {
		return x + 1;
	}
    let output = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        output = addOne(output);
    }

    return output;
}
pipe();