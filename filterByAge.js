// Напишите функцию filterByAge,
// которая принимает массив объектов (пользователей) и минимальный возраст.
// Функция должна вернуть массив пользователей, чей возраст больше или равен заданному.

function filterByAge(users, minAge) {
	return users.filter((user) => user.age >= minAge)
}

const users = [
	{ name: 'Alice', age: 25 },
	{ name: 'Bob', age: 17 },
	{ name: 'Charlie', age: 30 },
]
console.log(filterByAge(users, 20))
