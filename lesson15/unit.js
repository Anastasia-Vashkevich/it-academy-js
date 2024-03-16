const { Calculator } = import('./calculator.js');

const calc = new Calculator();

describe('check Add-functionality', function () {
  test.each([
    [1, 2, 3],
    [30, 8, 38],
    [40, 10, 50],
  ])('check addition of positive numbers: %d + %d = %d', async (a, b, c) => {
    expect(calc.add(a, b)).toBe(c);
  });

  test.each([
    [-1, 2, 1],
    [3, -3, 0],
    [-40, -10, -50],
  ])('check addition of negative numbers: %d + %d = %d', async (a, b, c) => {
    expect(calc.add(a, b)).toBe(c);
  });

  test.each([
    [0, 2, 2],
    [3, 0, 3],
    [0, 0, 0],
  ])('check addition of  "zero": %d + %d = %d', async (a, b, c) => {
    expect(calc.add(a, b)).toBe(c);
  });

  //bug

  test('check addition of numbers (number is written as string)', async () => {
    const result = calc.add('3', 5, -5);
    expect(typeof result).toEqual('number');
  });

  test('check addition of fractional numbers ', async () => {
    const result = calc.add(0.3, 0.5);
    expect(result).toBeCloseTo(0.8);
  });

  test('check addition of "null" ', async () => {
    const result = calc.add(null, 0);
    expect(result).not.toBeNull();
  });
});

describe('check Subtraction-functionality', function () {
  it.each([
    [10, 2, 8],
    [30, 10, 20],
    [40, 10, 30],
  ])('check Subtraction of positive numbers: %d - %d = %d', async (a, b, c) => {
    expect(calc.subtraction(a, b)).toBe(c);
  });

  it.each([
    [-1, 2, -3],
    [3, -3, 6],
    [-40, -10, -30],
  ])('check Subtraction of negative numbers: %d - %d = %d', async (a, b, c) => {
    expect(calc.subtraction(a, b)).toBe(c);
  });

  it.each([
    [0, -2, 2],
    [3, 0, 3],
    [0, 0, 0],
  ])('check Subtraction of  "zero": %d - %d = %d', async (a, b, c) => {
    expect(calc.subtraction(a, b)).toBe(c);
  });

  //bug

  it('check subtraction of more than 2 numbers ', async () => {
    const result = calc.subtraction(1, 5, 5, 5);
    expect(result).toEqual(-14);
  });

  it('check subtraction of fractional numbers ', async () => {
    const result = calc.subtraction(0.8, 0.5);
    expect(result).toBeCloseTo(0.3);
  });

  it('check subtraction of null', async () => {
    const result = calc.subtraction(null, 5);
    expect(result).not.toBeNull();
    expect(result).toBe(-5);
  });
});

describe('check Multiply-functionality', function () {
  it.each([
    [1, 2, 2],
    [30, 10, 300],
    [200, 200, 40000],
  ])('check multiply of positive numbers: %d * %d = %d', async (a, b, c) => {
    expect(calc.multiply(a, b)).toBe(c);
  });

  it.each([
    [-1, 2, -2],
    [3, -3, -9],
    [-40, -10, 400],
  ])('check multiply of negative numbers: %d * %d = %d', async (a, b, c) => {
    expect(calc.multiply(a, b)).toBe(c);
  });

  it.each([
    [0, 2, 0],
    [3, 0, 0],
    [0, 0, 0],
  ])('check multiply of  "zero": %d * %d = %d', async (a, b, c) => {
    expect(calc.multiply(a, b)).toBe(c);
  });

  it('check multiply of numbers (number is written as string) ', async () => {
    const result = calc.multiply('3', 5);
    expect(typeof result).toEqual('number');
    expect(result).toBe(15);
  });

  it('check multiply of fractional numbers ', async () => {
    const result = calc.multiply(0.3, 0.5);
    expect(result).toBeCloseTo(0.15);
  });

  it('check multiply of "null" ', async () => {
    const result = calc.multiply(null, 5);
    expect(result).not.toBeNull();
    expect(result).toBe(0);
  });
});

describe('check Divide-functionality', function () {
  it.each([
    [4, 2, 2],
    [10, 100, 0.1],
    [200, 200, 1],
  ])('check divide of positive numbers: %d / %d = %d', async (a, b, c) => {
    expect(calc.divide(a, b)).toBe(c);
  });

  //bug

  it('check result of division of more than 2 numbers', async () => {
    const result = calc.divide(10, 2, 5);
    expect(result).toBe(1);
  });

  it.each([
    [-4, 2, -2],
    [3, -3, -1],
    [-40, -10, 4],
  ])('check divide of negative numbers: %d / %d = %d', async (a, b, c) => {
    expect(calc.divide(a, b)).toBe(c);
  });

  //bug

  it.each([
    [0, 2, 0],
    [0, -2, 0],
  ])('check divide of  "zero" to number: %d / %d = %d', async (a, b, c) => {
    expect(calc.divide(a, b)).toBe(c);
  });

  it('check divide of only numbers (number is written as string) ', async () => {
    const result = calc.divide('3', 3);
    expect(result).toEqual(1);
    expect(typeof result).toEqual('number');
  });

  it('check divide of fractional numbers ', async () => {
    const result = calc.divide(0.6, 2);
    expect(result).toBeCloseTo(0.3);
  });

  it('check division null to number  ', async () => {
    const result = calc.divide(null, 5);
    expect(result).not.toBeNull();
    expect(result).toBe(0);
    expect(typeof result).toEqual('number');
  });


  it('check division to 0', async () => {
    const result = calc.divide(5, 0);
    expect(result).not.toBeNull();
    expect(typeof result).toEqual('number');
    expect(result).toEqual(Infinity);
  });
});

describe('check Exponentiation-functionality', function () {
  it.each([
    [0, 0],
    [3, 9],
    [10, 100],
  ])('check exponentiation of positive numbers: %d ^2 = %d', async (a, b) => {
    expect(calc.exponentiation(a)).toBe(b);
  });

  it.each([
    [-1, 1],
    [-3, 9],
    [-40, 1600],
  ])('check exponentiation of negative numbers: %d ^2 = %d', async (a, b) => {
    expect(calc.exponentiation(a)).toBe(b);
  });

  it('check exponentiation of numbers (when number is written as "string") ', async () => {
    const result = calc.exponentiation('3');
    expect(typeof result).toEqual('number');
    expect(result).toEqual(9);
  });

  it('check exponentiation of fractional numbers ', async () => {
    const result = calc.exponentiation(0.3);
    expect(result).toBeCloseTo(0.09);
  });

  it('check exponentiation of null ', async () => {
    const result = calc.exponentiation(null);
    expect(result).not.toBeNull();
    expect(result).toBe(0);
  });
});