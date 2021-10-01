const fizzBuzz = (n, array_m) => {
	if (n && array_m) {
		for (let i = 0; i < n; i++) {
			if (!Number.isInteger(array_m[i])) array_m[i] = Number(array_m[i]);
			if (array_m[i] % 3 === 0 && array_m[i] % 5 === 0) console.log('FizzBuzz');
			else if (array_m[i] % 3 === 0) console.log('Fizz');
			else if (array_m[i] % 5 === 0) console.log('Buzz');
			else console.log('N/A');
		}
	} else {
		console.log('Please enter a valid value');
	}
};

fizzBuzz(4, [1, 4, 10, 15]);
