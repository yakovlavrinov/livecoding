const urls = ['https://ya.ru', 'https://google.com', 'https://alfabank.ru']

function loadUrls() {
	const results = [] // сюда будем сохранять результаты fetch'ей
	let chain = Promise.resolve() // начальная цепочка — выполненное обещание
	// Итерируем по массиву URL'ов
	urls.forEach((url, i) => {
		// Каждый следующий запрос добавляется в цепочку .then
		chain = chain
			.then(() => {
				console.log(`Загружаем URL #${i + 1}: ${url}`)
				return fetch(url) // возвращаем fetch — промис попадёт в цепочку
			})
			.then((response) => {
				results.push(response) // сохраняем ответ (можно .text() или .json() при необходимости)
			})
	})
	// В конце возвращаем цепочку, которая разрешается, когда все запросы завершены
	return chain.then(() => {
		console.log('Все запросы завершены. Результаты:')
		console.log(results)
		return results // если нужно использовать дальше
	})
}
