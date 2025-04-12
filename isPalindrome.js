// Напишите функцию isPalindrome,
// которая проверяет, является ли строка палиндромом
// (читается одинаково слева направо и справа налево).

function isPalindrome(str) {
	const string = [...str]
		.filter((el) => el !== ' ')
		.join('')
		.toLowerCase()
	const string2 = string
	return string2 === [...string].reverse().join('')
}

console.log(isPalindrome('A man a plan a canal Panama'))
console.log(isPalindrome('Hello'))
