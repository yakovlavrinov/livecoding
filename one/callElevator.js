
const findClosestElevator = (targetFloor, elevatorPositions) => {
	let nearestElevator = elevatorPositions[0]
	let minDistance = Math.abs(targetFloor - elevatorPositions[0])

	elevatorPositions.forEach((elevatorPosition)=> {
		const distance = Math.abs(targetFloor - elevatorPosition)

		if(distance < minDistance) {
			minDistance = distance
			nearestElevator = elevatorPosition
		}
	})

	return nearestElevator
}


console.log(findClosestElevator(5, [6, 22, 1, 3, 33]))


// findClosestElevator → понятно, что функция ищет ближайший лифт.

// targetFloor → целевой этаж, с которого вызвали лифт.

// elevatorPositions → список этажей, где находятся лифты.

// nearestElevator → ближайший лифт (по этажу).

// minDistance → минимальная разница в этажах.

// distance → текущая разница для сравнения.






const elevators = [
	{ name: '1', floor: 10 },
	{ name: '2', floor: 2 },
	{ name: '5', floor: 4 },
	{ name: '3', floor: 15 },
	{ name: '4', floor: 7 },
	{ name: '6', floor: 1 },
]

const callElevator1 = (floor, elevators) => {
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

const callElevator2 = (floor, elevators) => {
    return elevators.reduce((closest, current) => {
        const diffCurrent = Math.abs(floor - current.floor)
        const diffClosest = Math.abs(floor - closest.floor)

        if (diffCurrent < diffClosest) {
            return current
        } else if (diffCurrent === diffClosest) {
            return current.floor > closest.floor ? current : closest
        } else {
            return closest
        }
    }).name
}

console.log(callElevator1(3, elevators))

console.log(callElevator2(3, elevators))





