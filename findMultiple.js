function findMultiple(n = 2) {
	const result = []
	// Нижняя граница диапазона: самое маленькое n‑значное число.
	// Например, при n = 2 → 10; при n = 3 → 100.
	const start = 10 ** (n - 1)
	// Верхняя граница (НЕ включительно): первое (n + 1)-значное число.
	// При n = 2 → 100; при n = 3 → 1000.
	const end = 10 ** n
	// Перебираем все возможные комбинации пар [i, j]
	// в диапазоне [start, end).
	for (let i = start; i < end; i++) {
		for (let j = start; j < end; j++) {
			const multiple = i * j // произведение текущей пары
			// Разбиваем оба множителя на массивы цифр, объединяем и сортируем.
			// Пример: i = 12, j = 35 → ['1','2','3','5'].
			const inputNumbers = [...String(i), ...String(j)].sort()
			// Разбиваем произведение на массив цифр и сортируем.
			// Пример: multiple = 4215 → ['1','2','4','5'].
			const outputNumbers = [...String(multiple)].sort()
			// Проверяем, не встречалась ли уже зеркальная пара [j, i],
			// чтобы избежать дубликатов вида [12, 35] и [35, 12].
			const hasInResult = result.some((pair) => pair[0] === j && pair[1] === i)
			// Если sorted‑набор цифр совпадает и зеркали ещё нет → сохраняем пару.
			if (inputNumbers.toString() === outputNumbers.toString() && !hasInResult) {
				result.push([i, j])
			}
		}
	}

	return result
}

console.log(findMultiple())