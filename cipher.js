const cipherBuild = (str, numb) => {
	numb = numb % 26;
	let myString = str.toLowerCase();
	let myLetters = "abcdefghijklmnopqrstuvwxyz".split("");
	let result = "";

	for (i = 0; i < myString.length; i++) {
		let index = myString[i];

		// if (index === " ") {
		// 	result += myLetters[index];
		// 	continue;
		// }

		let newIndex = myLetters.indexOf(index);
		let currentIndex = newIndex + numb;

		if (currentIndex > 25) {
			currentIndex = currentIndex - 26;
		} else if (currentIndex < 0) {
			currentIndex = 26 + currentIndex;
		} else {
			if (str[i] === str[i].toUpperCase()) {
				result += myLetters[currentIndex].toUpperCase();
			} else {
				result += myLetters[currentIndex];
			}
		}
	}

	return result;
};

console.log(cipherBuild("Peter", 40));

//peter - 17520521  +3 20823 Pp

console.log(10 % 3);