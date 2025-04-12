// Напишите функцию countVowels,
// которая принимает строку и возвращает количество гласных букв (a, e, i, o, u) в этой строке.

function countVowels(str) {
	const vowels = 'aeiouAEIOU'

	return str.split('').filter((char) => vowels.includes(char)).length
}

console.log(countVowels('Hello World'))
