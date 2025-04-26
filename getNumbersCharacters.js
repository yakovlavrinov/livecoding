// Написать функцию подсчета символов в строке

const getNumberCharacters = (str) => {
	const charCount = new Map()

	for (const char of str) {
		charCount.set(char, (charCount.get(char) || 0) + 1)
	}

	return Array.from(charCount, ([char, count]) => `${count}-${char}`).join('\n')
}

console.log(getNumberCharacters('aaaabb!!cgaff11333!!!!'))
