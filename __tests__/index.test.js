const { soma, divisao } = require('../index');

describe('testes de soma', () => {
  test('soma de 1 com 2', () => {
    expect(soma(1, 2)).toBe(4);
  });

  test('soma de -1 e -4', () => {
    expect(soma(-1, -4)).toBe(-5);
  });

  test('soma de 1 e undefined', () => {
    expect(() => soma(1, undefined)).toThrow(
      'Você precisa passar dois números',
    );
  });
});

describe('testes de divisão', () => {
  test('divisao de 1 e 1', () => {
    expect(divisao(1, 1)).toBe(1);
  });

  test('divisao de -1 e -1', () => {
    expect(divisao(-1, -1)).toBe(1);
  });

  test('divisao de 1 por undefined', () => {
    expect(() => divisao(1, undefined)).toThrow(
      'Você precisa passar dois números',
    );
  });

  test('divisao de 1 por 0', () => {
    expect(() => divisao(1, 0)).toThrow(
      'O denominador precisa ser diferente de 0',
    );
  });
});
