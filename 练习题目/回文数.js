/*
  原题链接：https://leetcode-cn.com/problems/palindrome-number/
* 方法: 双指针
* 步骤：
* 1.将传入的数字转换为字符串，可以使用 s[i] 来选取元素
* 2.定义左指针和右指针
* 3.由于回文数有对称性，所以当发现左和右不相等的时候直接返回false
* 4.如果遍历到最后全部相等，返回true
*
* */

function isPalindrome(x) {
  x = '' + x
  let l = 0;
  let r = x.length - 1;

  while(l <= r) {
    if (x[l] !== x[r]) {
      return false
    }
    l ++
    r --
  }
  return true
}


console.log(isPalindrome(1))
