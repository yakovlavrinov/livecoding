/**
 * Функция‑«шпион»: оборачивает любую функцию `fn`
 * и позволяет отследить её вызовы и результаты.
 */
function spy(fn) {
	// === Закрытые (приватные) массивы, видимые только внутри spy ===
	const calls = [] // сюда кладём аргументы всех вызовов
	const results = [] // сюда кладём все возвращённые значения

	/**
	 * Обёртка‑функция, которую будем возвращать наружу.
	 * Она вызывает оригинальную `fn`, но заодно пишет статистику.
	 */
	function wrapper(...args) {
		// 1. логируем аргументы вызова
		calls.push(args)
		// 2. вызываем оригинальную функцию с теми же аргументами
		const result = fn(...args)
		// 3. логируем возвращённое значение
		results.push(result)
		// 4. отдаём наружу тот же результат
		return result
	}
	/**
	 * === Методы‑помощники шпиона ===
	 * Они живут как свойства функции‑обёртки.
	 */
	// Был ли вызов с точным набором аргументов?
	wrapper.calledWith = (...expectedArgs) => {
		return calls.some(
			(call) =>
				call.length === expectedArgs.length && // длина совпадает
				call.every((arg, i) => arg === expectedArgs[i]) // все аргументы равны по значению
		)
	}
	// Возвращала ли функция хотя бы раз указанное значение?
	wrapper.returned = (value) => results.includes(value)
	// Сколько раз вызывали функцию?
	wrapper.callCount = () => calls.length
	// === Отдаём наружу шпиона ===
	return wrapper
}

const spyFn = spy((a, b) => a + b)

spyFn(1, 2) // вызов 1
spyFn(3, 4) // вызов 2

spyFn.calledWith(1, 2) // true
spyFn.calledWith(3, 5) // false
spyFn.calledWith(1) // false — другая длина аргументов
