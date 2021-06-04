
const { fromEuroToDollar, fromDollarToYen, fromYanToPound } = require('./monyConversion.js');

test("One euro should be 1'206 dollars", () => {

    const dollars = fromEuroToDollar(3.5)

    const expected = 3.5 * 1.2;

    expect(expected).toBe(dollars)
})

test("One dollar should to be 106'583 yens => 127.9/1.2", () => {

    const dollars = fromDollarToYen(15);
    const expected = (15 * 127.9) / 1.2;

    expect(expected).toBe(dollars)
})

test("One yen should to be  0,00625 british pound =>  0.8/127.9", () => {

    const yen = fromYanToPound(800);
    const expected = (800 * 0.8) / 127.9

    expect(expected).toBe(yen)
})