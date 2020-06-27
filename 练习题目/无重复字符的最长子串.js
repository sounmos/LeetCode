/*
  原题链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
* 使用滑动窗口算法求解
*
* 步骤：
*
* 1.查找middle中不包含的元素依次加入。
* 2.如果查找到重复元素。停止right扩张，查询当前窗口中的最大的子串
* 3.判断子串的长度和max的长度。如果max>子串，保留max。否则保留子串长度。
* 4.将得到的结果返回。
*
* */

let lengthOfLongestSubstring = function(s) {
  let middle = {}

  let left = 0;
  let right = 0;
  let max = 0;
  let len = s.length;

  while(right < len) {
    if (!middle[s[right]]) {
      middle[s[right]] = 1
      right ++
    } else {
      while(left < right) {
        middle[s[left]] = 0
        if (middle[s[left++]] === middle[s[right]]) break;
      }
    }
    max = Math.max(max, right - left);
  }
  return max;
};


let str = 'abcdba'
console.log(lengthOfLongestSubstring(str))
