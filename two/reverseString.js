// Напишите функцию reverseString,
// которая принимает строку и возвращает её перевернутую версию.

function reverseString(str) {
	return [...str].reverse().join('')
}

console.log(reverseString('JavaScript'))
