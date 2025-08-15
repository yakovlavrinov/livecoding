/**
 * Выдаёт набор купюр для запрашиваемой суммы.
 *
 * @param {number} amount                — сумма к выдаче (должна быть > 0 и кратна 50)
 * @param {Object<number,number>} limits — текущее количество купюр в банкомате.
 *                                         Ключ — номинал, значение — доступное число купюр.
 *                                         По умолчанию считаем, что в банкомате по 100 купюр
 *                                         каждого стандартного номинала.
 * @returns {Object<number,number>}       — объект‑«чек» в формате
 *                                         {5000: n, 1000: n, 500: n, 100: n, 50: n},
 *                                         где n — выданное количество купюр каждого номинала.
 *                                         Порядок ключей сохраняем, чтобы было удобно читать.
 * @throws {Error} если банкомат не может выдать указанную сумму с учётом лимитов.
 */
function getMoney(
  amount,
  limits = { 5000: 100, 1000: 100, 500: 100, 100: 100, 50: 100 }
) {
  const nominals = Object.keys(limits)
    .map(Number)
    .sort((a, b) => b - a); // [5000, 1000, 500, 100, 50]

  const result = {};
  nominals.forEach(n => result[n] = 0);

  let amountLeft = amount;

  // Используем for вместо while
  for (let i = 0; i < nominals.length; i++) {
    const nominal = nominals[i];
    const limit = limits[nominal];
    const need = Math.floor(amountLeft / nominal);      // сколько нужно этого номинала
    const use = Math.min(limit, need);                  // сколько реально можем использовать
     
    console.log(result[nominal], use)
         result[nominal] = use;
    
    limits[nominal] -= use;
    amountLeft -= use * nominal;

    if (amountLeft === 0) break;                        // досрочно выходим, если выдали всё
  }

  if (amountLeft > 0) {
    throw new Error('Не могу выдать такое');
  }

  return result;
}



console.log(getMoney(6200))



Array.prototype.customMap = (arr) => {
    const result = []

    for(let i = 0; i < arr.length; i++){
        
    }

    return result
}