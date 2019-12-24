let a,
	b,
	c,
	discriminant,
	x,
	x1,
	x2;

a = prompt('please input value of a');

if (isNaN(a) || a.length < 1) {
	alert('Invalid data input');
	throw 'stop';
} else if (parseFloat(a) === 0){
	alert('Invalid data input');
	throw 'stop';
} else {
	a = parseFloat(a);
}

b = prompt('please input value of b');

if (isNaN(b) || b.length < 1) {
	alert('Invalid data input');
	throw 'stop';
} else {
	b = parseFloat(b);
}

c = prompt('please input value of c');

if (isNaN(c) || c.length < 1) {
	alert('Invalid data input');
} else {
	c = parseFloat(c);
}

const four = 4;
const two = 2;

discriminant = b * b - four * a * c;

if (discriminant === 0) {
	x = (-b + Math.sqrt(discriminant))/two * a;
	console.log('x = ' + Math.round(x));
} else if (discriminant > 0) {
	x1 = (-b + Math.sqrt(discriminant))/two * a;
	x2 = (-b - Math.sqrt(discriminant))/two * a;
	console.log('x1 = ' + Math.round(x1) + ' and x2 = ' + Math.round(x2));
} else {
	console.log('no solution');
}