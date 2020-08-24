class Score {
    constructor() {
        this.currentEl = document.querySelector('.currentScore');
    }

    /**
     * @param {Settings} settings настройки игры
     */
    init(settings) {
        this.settings = settings;

    }

    setCurrent(text) {
        this.currentEl.innerText = text;
    }
}