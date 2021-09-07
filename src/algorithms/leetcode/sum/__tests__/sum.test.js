import { twoSum, twoSumHash } from '../sum';

test('use the brute force method', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(twoSum([2, 7, 11, 15], 10)).toEqual([]);
});

test('use the hash map method', () => {
  expect(twoSumHash([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(twoSumHash([2, 7, 11, 15], 10)).toEqual([]);
});
