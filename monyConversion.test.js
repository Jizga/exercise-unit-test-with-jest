
const { fromEuroToDollar, fromDollarToYen, fromYanToPound } = require('./monyConversion.js');

test("One euro should be 1'206 dollars", () => {

    expect(fromEuroToDollar(3.5)).toBe(4.2)
})

test("One dollar should to be 106'583 yens => 127.9/1.2", () => {

    expect(fromDollarToYen(15)).toBe(1598.75)
})

test("One yen should to be  0,00625 british pound =>  0.8/127.9", () => {

    expect(fromYanToPound(800)).toBe(5.003909304143862)
})

// test("One dollar should to be 0,667 british pound => 0.8/1.2", () => {
//     const dollar = fromDollarToYen(1)
//     const yens = fromYanToPound(1)
// })