"use strict";

/**Фунция разбивает вводимое число на разряды
 * и вовращает объект с соответствующими свойствами 
 * (единицы, десятки, сотни) и значениями
 * @param {int} число в диапозоне [0,999]
 * @returns {Object} Объект с разрядами числа или пустой объект
 */
function getNumberObject(number) {
    if (!Number.isInteger(number) || number < 0 || number > 999) {
        console.log("Число должно быть целым и находить в диапозоне [0,10]");
        return {};
    } else {
        return {
            units: number % 10,
            tens: Math.floor(number / 10) % 10,
            hundreds: Math.floor(number / 100),
        }
    }
}

console.log(getNumberObject(254));

