const multiplication = require("../First/excercise1");

describe('multiplication function', () => {

    test('multiplication of two values', () => {
        expect(multiplication(5, 12)).toBe(60);
        expect(multiplication(3, 2)).toBe(6);
        expect(multiplication(8, 4)).toBe(32);
    });

})
