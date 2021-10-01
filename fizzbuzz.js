const fizzBuzz = (m) => {
	const arrayOfNums = [];
	let str = '';
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
	if (
		str.includes('Fizz') ||
		str.includes('Buzz') ||
		str.includes('FizzBuzz')
	) {
		s = str.replace('N/A', '');
		console.log(s);
	} else {
		console.log('N/A');
	}
};

fizzBuzz(1);
fizzBuzz(4);
fizzBuzz(10);
fizzBuzz(15);
