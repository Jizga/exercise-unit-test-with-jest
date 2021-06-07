let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (euro) => {
    return dollar = Number((euro * oneEuroIs.USD).toFixed(2));
}

const fromDollarToYen = (dollar) => {
    return yen = Number(((dollar * oneEuroIs.JPY) / oneEuroIs.USD).toFixed(2));
}

const fromYanToPound = (yen) => {
    return pound = Number(((yen * oneEuroIs.GBP) / oneEuroIs.JPY).toFixed(2)) ;
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYanToPound };