
function findMaxProductPair(arr) {
    let max1 = -Infinity
    let max2 = -Infinity
    let min1 = Infinity
    let min2 = Infinity

    for (num of arr) {
        if (num > max1) {
            [max1, max2] = [num, max1]
        }

        if (num < min1) {
            [min1, min2] = [num, min1]
        }
    }

    const resMax = max1 * max2
    const resMin = min1 * min2

    return resMax > resMin? [max1, max2] : [min1, min2]
}

const input = '3 5 -7 2 9 -1'; // ← твой ввод
const arr = input.split(' ').map(Number);
const result = findMaxProductPair(arr);
console.log(result.join(' '));