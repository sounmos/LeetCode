/*
* 原题链接：https://leetcode-cn.com/problems/roman-to-integer/
*
* 步骤：
* 1.将所有可能的罗马标识符做枚举
* 2.遍历字符串，查看当前字符和下一字符是否可组成对应的罗马标识符
* 3.如果2能对应上，则将i++。并将结果累加
* 4.对应不上，则将当前值累加
* 5.遍历完成，返回相加的结果
* */


function romanToInt(s){
  let data = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  }
  let result = 0;
  for (let i = 0, len = s.length; i < len; i++) {
    if (data[s[i] + s[i + 1]]) {
      result += data[s[i] + s[i + 1]]
      i ++
      continue
    }
    result += data[s[i]]
  }
  return result
}

console.log(romanToInt('MCMXCIV'))
