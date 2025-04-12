// Напишите асинхронную функцию fetchData,
// которая имитирует получение данных с сервера через setTimeout и возвращает промис с данными.

function fetchData() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				data: 'Sample data',
			})
		})
	})
}

fetchData().then((data) => console.log(data))
