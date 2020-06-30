/*
* 原题链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
*
* 步骤：
* 1.将所有出现的1替换掉
* 2.使用递归的方式来求解。结束条件为传入的数组长度为1
* 3.将每次返回的数组拼接上当前的前缀。
*
* */

let numData = {
  2: ['a','b','c'],
  3: ['d','e','f'],
  4: ['g','h','i'],
  5: ['j','k','l'],
  6: ['m','n','o'],
  7: ['p','q','r','s'],
  8: ['t','u','v'],
  9: ['w','x','y','z']
}
function letterCombinations(digits) {
  if (!digits) return []
  digits = digits.replace(/1/g, '').split('')

  return zhixing(digits)
}


function zhixing (arr) {
  if (arr.length === 1) {
    return numData[arr[0]]
  }

  let middle = numData[arr[0]]
  let list = zhixing(arr.slice(1))
  let result = []
  for (let i = 0; i < middle.length; i++) {
    for (let j = 0; j < list.length; j++) {
      result.push(middle[i] + list[j])
    }
  }
  return result
}
let last = ["adg","adh","adi","aeg","aeh","aei","afg","afh","afi","bdg","bdh","bdi","beg","beh","bei","bfg","bfh","bfi","cdg","cdh","cdi","ceg","ceh","cei","cfg","cfh","cfi"]

letterCombinations('1234')
