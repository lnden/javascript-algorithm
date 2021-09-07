/**
 * @description 给定一个整数数组 nums 和一个整数目标值 target
 * 请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。
 */

/**
 * 暴力枚举法
 * @param {Array} nums
 * @param {Number} target
 * @returns Array => index
 */
export const twoSum = (nums, target) => {
  const len = nums.length;
  for (let i = 0; i < len; i += 1) {
    for (let j = i + 1; j < len; j += 1) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

/**
 * 哈希表发
 * @param {Array} nums
 * @param {Number} target
 * @returns Array => index
 */
export const twoSumHash = (nums, target) => {
  const len = nums.length;
  const map = new Map();
  for (let i = 0; i < len; i += 1) {
    const result = target - nums[i];
    if (map.has(result)) {
      return [map.get(result), i];
    }
    map.set(nums[i], i);
  }
  return [];
};
