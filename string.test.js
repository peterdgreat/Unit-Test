const charCount = require ('./string');

test('peter has 5 chars', () => {
    expect(charCount('peter')).toBe(5);
  });
  test('kolawole has 8 chars', () => {
    expect(charCount('kolawole')).toBe(8);
  });
  test('Oluwafunmilayo throws error', () => {
    expect(() => charCount('oluwafunmilayo')).toThrow();
  });