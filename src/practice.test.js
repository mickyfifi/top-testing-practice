const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./practice');

test('1. capitalize', () => {
  expect(capitalize('m')).toBe('M');

  expect(capitalize('testing')).toBe('Testing');
});

test('2. reverseString', () => {
  expect(reverseString('mystring')).toBe('gnirtsym');
});

test('3. calculator', () => {
  expect(typeof calculator).toBe('object');

  expect(calculator.add(5, 7)).toBe(12);

  expect(calculator.subtract(10, 6)).toBe(4);

  expect(calculator.divide(30, 5)).toBe(6);

  expect(calculator.multiply(5, 3)).toBe(15);

});

test('4. Caesar Cipher', () => {
  expect(caesarCipher('abc', 3)).toBe('def');

  expect(caesarCipher('xyz', 3)).toBe('abc');

  expect(caesarCipher('abc', 5)).toBe('fgh');

  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');

  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('5. Analyze Array', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});
