// 1. получить элемент с классом .wrap и сохранить
// его в переменную
let animateWindow = document.querySelector('.wrap');
// 2. получить тег span, сохранить в переменную
let closeWindow = document.querySelector('span');
// 3. получить тег button, сохранить в переменную
let buttonForWindow = document.querySelector('button');

// 4. на кнопку показа модального окна назначить обработку
// события клика
// 4.1 при клике функция обработчик у элемента с
// классом .wrap должна удалять класс hidden,
// элементу с классом .wrap добавить классы magictime и twisterInDown
buttonForWindow.addEventListener('click', function (event) {
    animateWindow.classList.remove('hidden');
    animateWindow.classList.add('magictime', 'twisterInDown');
});

// 5. назначить обработку клика по тегу span
// 5.1 при клике у элемента с классом .wrap удалите
// класс twisterInDown и добавьте класс magic
// 5.2 используя setTimeout через секунду элементу
// .wrap добавьте класс .hidden

closeWindow.addEventListener('click', function (event) {
    animateWindow.classList.remove('magictime', 'twisterInDown');
    animateWindow.classList.add('magictime', 'magic');
    setTimeout(function (event) {
        animateWindow.classList.add('hidden');
    }, 1000)
});