/*
- started off by stripping all special characters (except space) and numbers from the string
- then converted string to array of words
- then checked if word in current iteration matches word or is part of words in rest of array
- if yes, i pushed that word to the output array
*/

const stringResponse = (res) => {
	if (!res) console.log('Please enter a string');
	else {
		const outputArray = [];

		resNoDigits = res.replace(/\d/g, '');
		resNoDigitsAndSpecialCharacters = res.replace(/[^a-zA-Z ]/g, '');
		str = resNoDigitsAndSpecialCharacters.toLowerCase();
		strArray = str.split(' ');

		for (let i = 0; i < strArray.length; i++) {
			currWord = strArray[i];

			for (let j = i + 1; j < strArray.length; j++) {
				if (strArray[j].includes(currWord) || strArray[j] === currWord) {
					outputArray.push(currWord);
					break;
				}
			}
			if (currWord === strArray[i + 1]) {
				outputArray.pop();
			}
		}
		console.log(outputArray);
	}
};

stringResponse('abc jghj Abc: abc12');
stringResponse('lol BYE: s@v3lol123 no bye');
