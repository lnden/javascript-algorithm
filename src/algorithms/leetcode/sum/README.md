### 暴力枚举

#### 思路及算法
最容易想到的方法是枚举数组中的每一个数 x，寻找数组中是否存在 x + y == target 值，使用双层循环逐个判断 x + y 是否等于目标值， 等于目标值返回对应下标

#### 代码示例
```
function sum(nums, target) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
```
#### 复杂度分析
- 时间复杂度：O(n^2)，其中 n 是数组中的元素数量。最坏情况下数组中热议两个数都要被匹配一次
- 空间复杂度：O(1)

### 哈希表

#### 思路及算法
结合暴力枚举的方法，时间复杂度较高的原因是寻找 target - x 的时间复杂度过高。因此，我们需要一种更优秀的方法，能够快速寻找数组中是否存在目标元素。如果存在，我们需要找出它的索引。

#### 代码示例
```
function sum(nums, target) {
  const len = nums.length;
  const map = new Map();
  for (let i = 0; i < len; i += 1) {
    const result = target - nums[i];
    if (map.has(result) {
      return [map.get(result), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
```
#### 复杂度分析
- 时间复杂度：O(n)，其中 n 是数组中的元素数量。对于每一个元素 x，我们可以 O(1) 的寻找 target - x
- 空间复杂度：O(n)，其中 n 是数组中的元素数量，主要为哈希表的开销