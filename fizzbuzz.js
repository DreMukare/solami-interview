const fizzBuzz = (m) => {
	// if (n && m && n >= 1 && n <= 100 && m >= 1 && m <= 100) {
	// if (m && m >= 1 && m <= 100) {
	const arrayOfNums = [];
	let str = '';
	// for (let i = 0; i < n; i++) {
	for (let j = 0; j <= m; j++) {
		arrayOfNums.push(j);
	}
	arrayOfNums.shift();
	for (let i = 0; i < arrayOfNums.length; i++) {
		if (arrayOfNums[i] % 3 === 0 && arrayOfNums[i] % 5 === 0)
			str += 'FizzBuzz ';
		else if (arrayOfNums[i] % 3 === 0) str += 'Fizz ';
		else if (arrayOfNums[i] % 5 === 0) str += 'Buzz ';
		else str += 'N/A ';
	}
	console.log(str);
	// }
	// } else {
	// 	console.log('Please enter a valid value');
	// }
};

fizzBuzz(1);
fizzBuzz(4);
fizzBuzz(10);
fizzBuzz(15);
