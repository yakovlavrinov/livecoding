// Напишите функцию getEvenNumbers,
// которая принимает массив чисел и возвращает новый массив,
// содержащий только четные числа из исходного массива.

function getEvenNumbers(numbers) {
	return numbers.filter((number) => number % 2 === 0)
}

console.log(getEvenNumbers([1, 3, 4, 2, 6, 7]))
