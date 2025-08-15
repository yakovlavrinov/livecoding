// Случайное число в определенном интервале
// + 1 нужен дял того чтобы захватить весь промежуток интервала
// + min нужен чтобы случайное число не попало в интервал 0 - min

const getRandomInt = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(getRandomInt(5, 15))
