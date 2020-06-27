let str = 'a'

/*
* 步骤：
* 1.终止条件，str的长度小于等于1
* 2.将返回数组的所有元素添加上当前字符前缀。
* */
function countStr(str) {
  if (str.length <= 1) return [str]
  let result = []
  for (let i = 0; i < str.length; i++) {
    result.push(...countStr(str.replace(str[i], '')).map(item => str[i] + item))
  }
  return result
}


console.log(countStr(str))
