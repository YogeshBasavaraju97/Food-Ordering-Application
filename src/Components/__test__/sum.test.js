import { Sum } from '../Sum';

test('sum function', () => {
  // const sum = (a, b) => {
  //   return a + b;
  // };
  const result = Sum(3, 4);
  expect(result).toBe(5);
});
