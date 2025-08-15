// Напишите функцию isPalindrome,
// которая проверяет, является ли строка палиндромом
// (читается одинаково слева направо и справа налево).

function isPalindrom(str) {
	const string = [...str]
		.filter((el) => el !== ' ')
		.join('')
		.toLowerCase()
	const string2 = string
	return string2 === [...string].reverse().join('')
}

function isPalindrome(str) {
  const isAlphaNum = (ch) => /[a-z0-9]/i.test(ch);
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    // Пропускаем не-буквенно-цифровые символы
    while (left < right && !isAlphaNum(str[left])) left++;
    while (left < right && !isAlphaNum(str[right])) right--;

    // Сравниваем символы
    if (str[left].toLowerCase() !== str[right].toLowerCase()) return false;

    left++;
    right--;
  }

  return true;
}


console.log(isPalindrome('A man a plan a canal Panama'))
console.log(isPalindrome('Hello'))
