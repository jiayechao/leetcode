/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = {}
    let i = 0
    while(i < nums.length) {
      if(typeof obj[target - nums[i]] === 'number') {
        return [obj[target - nums[i]], i]
      }
      obj[nums[i]] = i
      i++
    }
};
// @lc code=end

