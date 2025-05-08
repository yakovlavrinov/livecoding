/**
 * Выполняет функцию с задержкой
 * @param {Function} callback - Функция, которую нужно вызвать
 * @param {number} timeout - Задержка в миллисекундах
 */
const delayExecution = (callback, timeout) => {
	setTimeout(callback, timeout)
}

const logAction = () => console.log('внешняя функция')

delayExecution(logAction, 2000)
