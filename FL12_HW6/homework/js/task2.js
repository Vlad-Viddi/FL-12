let sides = [];

for (let i = 0; i < 3; i++) {
	sides[i] = prompt('please input value of "a" side of a triangle');
	

	if (isNaN(sides[i]) || sides[i] === '' || sides[i] === undefined || sides[i]) {
		alert('input values should be ONLY numbers')
		throw 'stop';
	} else if (parseInt(sides[i]) <= 0) {
		alert('A triangle must have 3 sides with a positive definite length ');
		throw'stop';
	} else {
		sides[i] = parseInt(sides[i]);
	}

}

if (sides[0] + sides[1] < sides[2] || sides[2] + sides[1] < sides[0] || sides[0] + sides[2] < sides[1]) {
	alert('‘Triangle doesn’t exist');
	throw 'stop';
} else if (sides[0] === sides[1] && sides[1] === sides[2] && sides[0] === sides[2]) {
	console.log('Equilateral triangle');
} else if (sides[0] === sides[1] || sides[0] === sides[2] || sides[1] === sides[2]) {
	console.log('Isosceles triangle');
} else {
	console.log('Scalene triangle');
}


