export default function sort(array) {
  const len = array.length - 1;
  const arr = [...array];

  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len - i; j += 1) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
