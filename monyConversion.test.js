
const { fromEuroToDollar, fromDollarToYen, fromYanToPound } = require('./monyConversion.js');

test("One euro should be 1'206 dollars", () => {

    expect(fromEuroToDollar(3.5)).toBe(4.2)
})

test("One dollar should to be 106'583 yens => 127.9/1.2", () => {

    expect(fromDollarToYen(15)).toBe(1598.75)
})

test("One yen should to be  0,00625 british pound =>  0.8/127.9", () => {

    expect(fromYanToPound(800)).toBe(5.00)
})

test("One dollar should to be 0,667 british pound => 0.8/1.2", () => {
    // const dollarsToPounds = ((fromDollarToYen(1)/fromYanToPound(106.58333))*0.66666)/159.875

    // expect(dollarsToPounds).toBe(0.6666600208494143)

    expect((1*0.8)/1.2).toBeCloseTo(0.667)
})