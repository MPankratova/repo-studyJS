//Инициализируем игру после загрузки страницы
window.addEventListener('load', function() {
    const board = new Board();//Создаем объект board
    const game = new Game();//Создаем оъект game
    const status = new Status();//Создаем объект status  

    board.init(game, status);//Инициализируем классы game и status в board
    game.init(status, board);//Инициализируем классы status и board в game
    
    board.renderMap();//Отрисовываем игровое поле
    board.initEventHandlers();//Запускаем слушателя событий
});