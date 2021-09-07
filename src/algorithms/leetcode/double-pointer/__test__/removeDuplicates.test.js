import removeDuplicates from '../removeDuplicates';

test('use the brute force method', () => {
  expect(removeDuplicates([])).toBe(0);
  expect(removeDuplicates([1, 2, 3])).toBe(3);
  expect(removeDuplicates([1, 1, 2])).toBe(2);
});
