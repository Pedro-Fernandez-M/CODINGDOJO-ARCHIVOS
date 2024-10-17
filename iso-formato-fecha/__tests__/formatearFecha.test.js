const formatearFecha = require('../iso-formato-fecha/formatearFecha');

test('formatearFecha should return formatted date', () => {
  const date = new Date('2022-01-01');
  const formattedDate = formatearFecha(date);
  expect(formattedDate).toBe('01/01/2022');
});

test('formatearFecha should return null for invalid date', () => {
  const date = 'invalid date';
  const formattedDate = formatearFecha(date);
  expect(formattedDate).toBeNull();
});

test('formatearFecha should return null for null input', () => {
  const date = null;
  const formattedDate = formatearFecha(date);
  expect(formattedDate).toBeNull();
});