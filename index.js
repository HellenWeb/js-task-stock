
// Modules

const chalk = require("chalk")

// Solving

let a = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]

let priceBuy = (price) => {
    let minPrice = price[0];
    let maxProfit = 0;

    for(let i = 0; i < price.length; i++) {
        let current = price[i];

        if (current < minPrice) {
            minPrice = current
        }

        if (current - minPrice > maxProfit) {
            maxProfit = current - minPrice
        }
    }

    return maxProfit
}

console.log( a, '|', priceBuy(a) )