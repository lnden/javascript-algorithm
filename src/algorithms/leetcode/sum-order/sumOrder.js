/**
 * @description 给定一个已按照 非递减顺序排列 的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。
 * 函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。
 * numbers 的下标 从 1 开始计数 ，所以答案数组应当满足 1 <= answer[0] < answer[1] <= numbers.length 。
 * 你可以假设每个输入 只对应唯一的答案 ，而且你 不可以 重复使用相同的元素。
 */

/**
 * 二分法查找
 * @param {Array} nums
 * @param {Number} target
 * @returns Array => index
 */
export const binarySearch = (nums, target) => {
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

/**
 * 双指针
 * @param {Array} nums
 * @param {Number} target
 * @returns Array => number
 */
export const doublePointer = (nums, target) => {
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
