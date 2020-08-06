"use strict";

/**Функция возвращает сумму 2ух заданных чисел
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function summarize(a , b) {
    return (a + b);
}

/**Функция возвращает разницу 2ух заданных чисел
 * @param {number} c 
 * @param {number} d 
 * @returns {number}
 */
function deduction(c, d) {
    return(c - d);
}

/**Функция возвращает деление 2ух заданных чисел
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function division(a, b) {
    return(a / b);
}

/**Функция возвращает произведение 2ух заданных чисел
 * @param {number} c 
 * @param {number} d 
 * @returns {number}
 */
function multiplication(c, d) {
    return(c * d);
}

/**Функция возвращает случайное целое число от 0 до 99
 */
function randomNumber() {
    return parseInt(Math.random() * 100);
}

/**Функция возвращает значение одной из выбранных арифмитических операций
 * 
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation 
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case '+' :
            return summarize(arg1 , arg2);
        case '-' :
            return deduction(arg1, arg2);
        case '*' :
            return multiplication(arg1, arg2);
        case '/' :
            return division(arg1, arg2).toFixed(1);
    }
}

let number1 = randomNumber();
let number2 = randomNumber();

console.log(mathOperation(number1, number2, '+'));
console.log(mathOperation(number1, number2, '-'));
console.log(mathOperation(number1, number2, '*'));
console.log(mathOperation(number1, number2, '/'));