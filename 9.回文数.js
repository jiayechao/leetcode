/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  // 先处理边界值
  if(x >= 0 && x < 10) return true
  if(x < 0 || !(x%10)) return false
  var rev = 0
  
  while(x > rev) {
    rev = rev*10 + x%10
    x = Math.floor(x/10)
  }
  return rev === x || Math.floor(rev/10) === x
};
// @lc code=end

