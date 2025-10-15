// Напишите функцию findMax,
// которая принимает массив чисел и возвращает максимальное число.

function findMax(numbers) {
	return Math.max(...numbers)
}

console.log(findMax([10, 5, 20, 8]))
