import { binarySearch, doublePointer } from '../sumOrder';

test('use the binary search method', () => {
  expect(binarySearch([2, 7, 11, 15], 9)).toEqual([1, 2]);
  expect(binarySearch([2, 7, 11, 15], 10)).toEqual([-1, -1]);
});

test('use the double poninter method', () => {
  expect(doublePointer([2, 7, 11, 15], 9)).toEqual([1, 2]);
  expect(doublePointer([2, 7, 11, 15], 10)).toEqual([-1, -1]);
});
