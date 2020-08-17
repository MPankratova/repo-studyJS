'use strict';
let body = document.querySelector('body');
let productName = "Товар";
let productImgUrl = "http://unsplash.it/150/150?random&gravity=center";
let textButton = "Подробнее";

for (let index = 1; index <= 3; index++) {

    let productAreal = `
        <div class="product">
            <div class="productName">${productName} ${index}</div>
            <img src=${productImgUrl} alt="${productName}">
            <button>${textButton}</button>
        </div>
    `;

    body.insertAdjacentHTML("beforeend", productAreal);
};

const buttons = document.querySelectorAll('button');

buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handleClick(event);
    })
});

/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(event) {
    const cardNode = event.target.parentNode;
    const card = {
        wrap: cardNode, 
        img: cardNode.querySelector('img'), 
        productName: cardNode.querySelector('.productName'), 
        button: cardNode.querySelector('button'), 
    };

        const textOnButton = card.button.innerText;

    if (textOnButton === 'Подробнее') { 
        showMoreText(card);
    } else if (textOnButton === 'Отмена') { 
        hideMoreText(card);
    }
}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function hideMoreText(card) {
    // 5. картинке внутри .product ставим стиль display: block
    card.img.style.display = 'block';
    // 5.1 внутри .product находим элемент с классом .desc и удаляем его
    card.wrap.querySelector('.desc').remove();
    // 5.2 кнопке, которая внутри .product ставим текст "Подробнее"
    card.button.innerText = 'Подробнее';
}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button 
 */
function showMoreText(card) {
    // 6. картинке внутри .product ставим display: none
    card.img.style.display = 'none';
    // 6.1 сохраняем произвольный текст в переменную
    const text = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';
    // 6.2 внутри .product есть .productName, после него вставляем div.desc и текстом из переменной из п. 6.1
    card.productName.insertAdjacentHTML('afterend', `<div class="desc">${text}</div>`);
    // 6.3 внутри .product у кнопки текст ставим "Отмена"
    card.button.innerText = 'Отмена';
}

