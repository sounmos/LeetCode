/*
* 原题链接：https://leetcode-cn.com/problems/integer-to-roman/
*
* 步骤：
* 1.将可能的罗马数字和对应阿拉伯数字做枚举
* 2.判断当前的num在哪个区间下，
* 3.辗转相减法求出对应的罗马字符表示。
*
* */


function intToRoman(num){
  let numList = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
  let roManList = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']

  let index = 0;
  let html = ''
  while(num) {
    if (num >= numList[index]) {
      num = num - numList[index]
      html += roManList[index]
    } else {
      index++
    }
  }
  return html
}

console.log(intToRoman(58))
