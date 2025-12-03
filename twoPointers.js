// Есть отсортированный массив чисел, нужно найти, есть ли два числа, сумма которых равна target.

function twoSum(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    const sum = arr[left] + arr[right]

    if (sum === target) {
      return [arr[left], arr[right]]
    }

    if (sum < target) {
      left++
    } else {
      right--
    }
  }

  return null
}

// Разворот массива на месте

function reverseArray(arr) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]

    left++
    right--
  }

  return arr
}

// Проверка, является ли массив палиндромом

function isPalindrome(arr) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false
    }

    left++
    right--
  }

  return true
}
