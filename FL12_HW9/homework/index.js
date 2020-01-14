
// TASK 1
function convert(...args) {
	let initialArray = [...args];
	let finalArray = [];
	for (let i = 0; i < initialArray.length; i++) {
		if(typeof initialArray[i] === 'number') {
			finalArray.push(String(initialArray[i]))
		} else if (typeof initialArray[i] === 'string') {
			finalArray.push(parseInt(initialArray[i]))
		}
	} return finalArray;
}
convert('1', 2, 3, '4');

// TASK 2
function executeforEach(array, callback) {
	for(let i = 0; i < array.length; i++) {
		callback(array[i]);
	}
}

executeforEach([1, 2, 3], function (el) { 
	console.log(el *2);
});

//TASK 3
function mapArray(array, callback) {
	let result = [];
	executeforEach(array, function(el) {
		result.push(callback(parseInt(el)));
	});
	return result;
}
mapArray([2, '5', 8], function(el) { 
	return el + 3;
});

//TASK 4
function filterArray(array, callback) {
	let result = [];
	executeforEach(array, function(el) {
		if(callback(el)) {
			result.push(el);			
		}

	});
	return result;
}
filterArray([2, 5, 8], function(el) { 
	return el % 2 === 0;
});

//TASK 5
function flipOver(strng) {
	let result = '';
	let qtyOfChars = strng.length -1;
	for (let i = qtyOfChars; i >= 0; i--) {
		result += strng[i];
	}
	return result;
}
flipOver('hey world')

//TASK 6
function makeListFromRange(array) {
	let result = [];
	for (let i = array[0]; i <= array[1]; i++) {
		result.push(i);
	}
	return result;
}
makeListFromRange([2, 7])

//TASK 7
function getArrayOfKeys (array, property) {
	let result = [];
	executeforEach(array, function(el) {
		result.push(el[property]);
	});
	return result;
}

const actors = [
  {name: 'tommy', age: 36},
  {name: 'lee', age: 28}
];

getArrayOfKeys(actors, 'name');

//TASK 8
function substitute(array) {
	let result = [];
	mapArray(array, function(el) {
		if (el < 30) {
			result.push('*');
		} else {
			result.push(el)
		}
	});
	return result;
}
substitute([58, 14, 48, 2, 31, 29]); 

// TASK 9
function getPastDay(date, minusDays) {
	let mlsecIn24Hours = 24 * 3600 * 1000;
	let resultDate = new Date(date.getTime() - minusDays * mlsecIn24Hours).getDate();
	return resultDate;
}
const date = new Date(2019, 0, 2);
getPastDay(date, 1); // 1, (1 Jan 2019)
getPastDay(date, 2); // 31, (31 Dec 2018)
getPastDay(date, 365); // 2, (2 Jan 2018)

//TASK 10
function formatDate(inputDate) {
	let year = inputDate.getFullYear(),
		month = inputDate.getMonth() + 1,
		date = inputDate.getDate(),
		hour = inputDate.getHours() < 10 ? `0${inputDate.getHours()}` : inputDate.getHours(),
		mins = inputDate.getMinutes() < 10 ? `0${inputDate.getMinutes()}` : inputDate.getMinutes();
	return `${year}/${month}/${date} ${hour}:${mins}`;
}
formatDate(new Date('6/15/2018 09:15:00')) // "2018/6/15 09:15"
formatDate(new Date()) // "2020/1/7 12:56" // gets current local time
