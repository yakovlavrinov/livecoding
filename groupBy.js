// Напишите функцию groupBy,
// которая принимает массив объектов и ключ,
// и группирует объекты по значению этого ключа.

function groupBy(arr, key) {
	return arr.reduce((groups, item) => {
		const groupKey = item[key]
		if (!groups[groupKey]) {
			groups[groupKey] = []
		}
		groups[groupKey].push(item)
		return groups
	}, {})
}

const items = [
	{ category: 'fruit', name: 'apple' },
	{ category: 'fruit', name: 'banana' },
	{ category: 'vegetable', name: 'carrot' },
]
console.log(groupBy(items, 'category'))
