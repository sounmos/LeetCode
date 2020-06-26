let str = 'abc'

function countStr(str) {
  if (str.length <= 1) return [str]
  let result = []
  for (let i = 0; i < str.length; i++) {
    let child = str[i] // 保存当前遍历的字符
    let returnValue = countStr(str.replace(str[i], '')) // 将当前字符替换为空
    // 检查返回值是否为字符串，是 添加当前字符作为前缀，否 已经属于多级遍历，将当前字符添加到数组中的每一项上
    typeof returnValue === 'string'
      ? result.push(child + returnValue)
      : result.push(...returnValue.map(item => child + item))
  }
  return result
}


console.log(countStr(str))
