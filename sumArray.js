// Напишите функцию sumArray,
// которая принимает массив чисел и возвращает их сумму.

function sumArray(arr) {
	return arr.reduce((sum, num) => sum + num, 0)
}

console.log(sumArray([1, 2, 3, 4, 5]))
