const lists = [
	[1, 4, 5],
	[1, 3, 4],
	[2, 6],
]

const merge = (arr) => {
	return arr.reduce((acc, arr) => [...acc, ...arr], []).sort((a, b) => a - b)
}
console.log(merge(lists))
