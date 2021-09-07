### 暴力枚举

#### 思路及算法


#### 代码示例
```

```
#### 复杂度分析
- 时间复杂度：O(n)，其中 n 是数组中的元素数量。
- 空间复杂度：O(n)

### 双指针

#### 思路及算法
- 创建一个慢指针 i，指向数组第一位数字，再创建一个快指针 j，指向数组第二位。
- 若 nums[j] 和 nums[i]不等，则先将 i 递增 1，然后把 nums[i] 改为 nums[j]。
- 因为最初 i 等于 0 时的数字未统计，所以最终返回结果需要 +1。

#### 代码示例
```
function removeDuplicates(nums) {
  const len = nums.length;
  if (len === 0) return 0;
  let i = 0;
  for (let j = 1; j < len; j += 1) {
    if (nums[j] !== nums[i]) {
      nums[i += 1] = nums[j];
    }
  }
  return i + 1;
}
```
#### 复杂度分析
- 时间复杂度：O(n)O(n)，其中 nn 是数组的长度。快指针和慢指针最多各移动 nn 次。
- 空间复杂度：O(1)O(1)。只需要使用常数的额外空间。