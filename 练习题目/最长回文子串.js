/*
* 原题链接：https://leetcode-cn.com/problems/longest-palindromic-substring/
*
* 方法：使用由中间向两边扩散的算法。
*
* 步骤：
* 1.遍历字符
* 2.将每个字符使用由中间向两边的方式得到回文串
* 3.判断得到的回文串长度是不是超过当前的最长值。超过之后变化位置。
*
*
* */

let longestPalindrome = function (s) {
  let start = 0, maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    let len1 = maxLenAroundCenter(s, i, i);
    let len2 = maxLenAroundCenter(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > maxLen) {
      maxLen = len;
      start = i - ~~((maxLen - 1) / 2);
    }
  }
  return s.substr(start, maxLen);
};

let maxLenAroundCenter = function (s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}
