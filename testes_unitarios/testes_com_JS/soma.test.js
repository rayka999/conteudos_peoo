// soma.test.js
const soma = require('./soma');


test('soma de 2 e 3 deve ser 5', () => {
  expect(soma(2, 3)).toBe(5);
});

test('soma de números negativos', () => {
  expect(soma(-1, -1)).toBe(-2);
});
