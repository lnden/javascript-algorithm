### 二分法查找

#### 思路及算法
在数组中找到两个数，使得它们的和等于目标值，可以首先固定第一个数，然后寻找第二个数，第二个数等于目标值减去第一个数的差。利用数组的有序性质，可以通过二分查找的方法寻找第二个数。为了避免重复寻找，在寻找第二个数时，只在第一个数的右侧寻找。

#### 代码示例
```
function binarySearch(nums, target) {
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  let mid = 0;
  for (let i = 0; i < len; i += 1) {
    left = i + 1;
    while (left <= right) {
      mid = parseInt(right - left, 10) / 2 + left;
      if (nums[mid] > target - nums[i]) {
        right = mid - 1;
      } else if (nums[mid] < target - nums[i]) {
        left = mid + 1;
      } else {
        return [i + 1, mid + 1];
      }
    }
  }
  return [-1, -1];
};
```
#### 复杂度分析
- 时间复杂度：O(nlogn)，其中 n 是数组的长度。需要遍历数组一次确定第一个数，时间复杂度是 O(n)，寻找第二个数使用二分查找，时间复杂度是 O(logn)，因此总时间复杂度是 O(nlogn)。
- 空间复杂度：O(1)

### 双指针

#### 思路及算法
初始时两个指针分别指向第一个元素位置和最后一个元素的位置。每次计算两个指针指向的两个元素之和，并和目标值比较。如果两个元素之和等于目标值，则发现了唯一解。如果两个元素之和小于目标值，则将左侧指针右移一位。如果两个元素之和大于目标值，则将右侧指针左移一位。移动指针之后，重复上述操作，直到找到答案

#### 代码示例
```
function doublePointer(nums, target) {
  let [left, right] = [0, nums.length - 1];
  while (left < right) {
    if (nums[left] + nums[right] > target) {
      right -= 1;
    } else if (nums[left] + nums[right] < target) {
      left += 1;
    } else {
      return [left + 1, right + 1];
    }
  }
  return [-1, -1];
};
```
#### 复杂度分析
- 时间复杂度：O(n)，其中 n 是数组的长度。两个指针移动的总次数最多为 n 次
- 空间复杂度：O(1)