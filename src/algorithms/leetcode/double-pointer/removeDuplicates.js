/**
 * @description 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
 *不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */

/**
 * 删除有序数组中的重复项
 * @param {Array} nums
 * @returns
 */
export default function removeDuplicates(nums) {
  const len = nums.length;
  if (len === 0) return 0;
  let i = 0;
  for (let j = 1; j < len; j += 1) {
    if (nums[j] !== nums[i]) {
      i += 1;
      // eslint-disable-next-line no-param-reassign
      nums[i] = nums[j];
    }
  }
  return i + 1;
}
