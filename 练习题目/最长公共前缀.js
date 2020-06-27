/*
* 原题链接：https://leetcode-cn.com/problems/longest-common-prefix/submissions/
*
* 步骤：
* 1.将数组的第一个当做备选值
* 2.遍历数组，查看是否所有的元素都符合当前前缀（也就是查找索引是否为0，不符合的话，索引不为0）
* 3.如果不符合，将备选值的长度减1，之后再次对比。
*
* */

function longestCommonPrefix(strs) {
  if (strs.length <= 0) return ''

  let str = strs[0];
  for(let i = 1,len = strs.length; i < len; i++){
    while(strs[i].indexOf(str) !== 0){
      str = str.substring(0, str.length - 1);
    }
  }
  return str;
}


console.log(longestCommonPrefix(["flower","flow","flight"]))
