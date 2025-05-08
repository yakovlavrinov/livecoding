const elevators = [
	{ name: '1', floor: 10 },
	{ name: '2', floor: 2 },
	{ name: '5', floor: 4 },
	{ name: '3', floor: 15 },
	{ name: '4', floor: 7 },
	{ name: '6', floor: 1 },
]

const callElevator = (floor, elevators) => {
	let closestElevator = elevators[0]
	let minDiff = Math.abs(floor - elevators[0].floor)

	elevators.forEach((elevator) => {
		const diff = Math.abs(floor - elevator.floor)
		if (minDiff > diff) {
			minDiff = diff
			closestElevator = elevator
		} else if (diff === minDiff) {
			if (elevator.floor > closestElevator.floor) {
				console.log('Разница такая же -> выбираем тот, что выше этажом')
				closestElevator = elevator
			}
		}
	})

	return closestElevator.name
}

console.log(callElevator(3, elevators))
