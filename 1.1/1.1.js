"use strict";

//es5
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price -= 0.25 * this.price;
}

let product1 = new Product('Beer', 100);

console.log(product1);
product1.make25PercentDiscount();
console.log(product1);

//es6
class Production {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make15PercentDiscount () {
        this.price -= 0.15 * this.price;
    }
}

let product2 = new Production('Vodka', 50);
console.log(product2);
product2.make15PercentDiscount();
console.log(product2);