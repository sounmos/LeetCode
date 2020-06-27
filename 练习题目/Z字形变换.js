/*
* 原题链接：https://leetcode-cn.com/problems/zigzag-conversion/
*
* 步骤：
* 1.首先查看每次操作的字符范围。每次操作为一个循环段
* 2.将得到的字符范围，按照固定的顺序放到数组中。
* 3.将得到的数组拼接为一个字符串返回。
*
* */


function convert(s, numRows) {
  if (numRows === 1) return s

  let result = new Array(numRows).fill('')
  let start = 0
  let end = 2 * numRows - 2
  let speed = end

  while(start < s.length) {
    let child = s.slice(start, end)

    let flag = true
    let index = 0;
    for (let i = 0; i < child.length; i++) {
      result[index] += child[i]

      flag ? index++ : index--

      if (index === numRows - 1) {
        flag = false
      }
    }

    start = end;
    end = end + speed;
  }
  return result.join('')
}

console.log(convert('LEETCODEISHIRING', 3) === "LCIRETOESIIGEDHN")
/*
0   4   8
1 3 5 7 9
2   6   10


0    6      12
1  5 7   11 13
2 4  8 10   14
3    9      15


0     8         16
1   7 9      15 17
2  6  10   14   18
3 5   11 13     19
4     12        20

*/
