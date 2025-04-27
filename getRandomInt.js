// Случайное число в определенном интервале

const getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(getRandomInt(5, 15))
