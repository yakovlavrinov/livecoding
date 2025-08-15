// Напишите функцию generatePassword,
// которая генерирует случайный пароль заданной длины,
// используя буквы, цифры и специальные символы.

function generatePassword(length) {
	const chars = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()`
	let password = ''
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * chars.length)
		password += chars[randomIndex]
	}
	return password
}

console.log(generatePassword(10))
