export default function insertSort(arr) {
  const len = arr.length;
  let preIndex;
  let current;
  for (let i = 1; i < len; i += 1) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      // eslint-disable-next-line no-param-reassign
      arr[preIndex + 1] = arr[preIndex];
      preIndex -= 1;
    }
    // eslint-disable-next-line no-param-reassign
    arr[preIndex + 1] = current;
  }
  return arr;
}
