let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (euro) => {
    return dollar = euro * 1.2;
}

const fromDollarToYen = (dollar) => {
    return yen = (dollar * 127.9) / 1.2;
}

const fromYanToPound = (yen) => {
    return pound = (yen * 0.8) / 127.9;
}

console.log('Euros to Dollars: ', fromEuroToDollar(5))
console.log('Dollars to Yens: ', fromDollarToYen(5))
console.log('Yens to british pound: ', fromYanToPound(500))

module.exports = { fromEuroToDollar, fromDollarToYen, fromYanToPound };