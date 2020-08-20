'use strict';
let basketToBuyBtns = document.querySelectorAll('.toBuyBtn');
basketToBuyBtns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        let id = event.target.dataset.id;
        let price = event.target.dataset.price;
        let name = event.target.dataset.name;
        basket.addProduct({ id: id, price: price, name: name});
    });
});

let basket = {
    products: {},

    /**Метод добавляет продукт в корзину
     * @param {{ id: string, price: string, name: string}} product 
     */
    addProduct(product){
        this.addProductToObject(product);//метод добавляет продукт в объект продуктов
        this.renderProductInBasket(product);//метод прорисовывает продукт в корзине
        this.renderTotalSum();//Метод отображает общую сумму заказа
        this.addRemoveBtnsListeners();//Обрабатывает события кнопки удаления
    },

/**Метод добавляет продукт в объект с продуктами
 *  * @param {{ id: string, price: string, name: string}} product 
 */
    addProductToObject(product) {
        if (this.products[product.id] == undefined) {
            this.products[product.id] = {
                price: product.price,
                name: product.name,
                count: 1
            }
        } else {
            this.products[product.id].count++;
        }
    },

/**Метод отрисовывает продукт в корзине,
 * если он там уже есть, то увеличивает количество
 * @param {{ id: string, price: string, name: string}} product 
 */
    renderProductInBasket(product) {
        let productExist = document.querySelector(`.productCount[data-id="${product.id}"]`);
        if (productExist) {
            productExist.textContent++;
            return;
        }
        let productRow = `
            <tr>
                <th>${product.id}</th>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td class="productCount" data-id="${product.id}">1</td>
                <td><i class="fas fa-trash-alt productRemoveBtn" data-id="${product.id}"></i></td>
            </tr>
        `;
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentHTML("beforeend", productRow);
    },

    /**Метод записывает общую сумму в корзине
     */
    renderTotalSum() {
        document.querySelector('.total').textContent = this.getTotalSum();
    },

    /**Метод подсчитывает общую сумму всех товаров в корзине
     */
    getTotalSum() {
        let totalSum = 0;
        for (let key in this.products) {
            totalSum += this.products[key].price * this.products[key].count;
        }
        return  totalSum;
        },
    
    /**Метод добавляет кнопке удаление слушание события click
     */
    addRemoveBtnsListeners() {
        let btns = document.querySelectorAll('.productRemoveBtn');
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener('click', this.removeProductListener);            
        }
    },

    /**Обработчик события клика по кнопке удаления параметра
     * 
     * @param {MouseEvent} event 
     */
    removeProductListener(event) {
        basket.removeProduct(event);
        basket.renderTotalSum();
    },

    /**Удаляет продукт из объекта продуктов и корзины
     * @param {MouseEvent} event 
     */
    removeProduct(event) {
        let id = event.target.dataset.id;
        this.removeProductFromObject(id);
        this.removeProductFromBasket(id);
    },

    /**
     * Метод удаляет товар из корзины.
     * @param {string} id
     */
    removeProductFromBasket(id) {
        let countTd = document.querySelector(`.productCount[data-id="${id}"]`);
        if (countTd.textContent == 1) {
            countTd.parentNode.remove();
        } else {
            countTd.textContent--;
        }
    },

    /**
     * Метод удаляет продукт из объекта с продуктами.
     * @param {string} id
     */
    removeProductFromObject(id) {
        if (this.products[id].count == 1) {
            delete this.products[id];
        } else {
            this.products[id].count--;
        }
    }
}