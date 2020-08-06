"use strict";

let count = prompt('Какое количество денег вы хотите положить на счет в банк?');

let lastSymbol = count.charAt(count.length-1);

/**Функция возвращает слово "рубль" в верном падеже
 * в зависимости от последней цифры вводимого пользователем числа
 * @param {number} number
 */
function createPhrase(number) {
    switch (number) {
        case "1":
            return "рубль";
        case "2":
        case "3":
        case "4":
            return "рубля";
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            return "рублей"; 
    }
}

alert("Ваша сумма в " + count + " " + createPhrase(lastSymbol)+ " " + "успешно зачислена");