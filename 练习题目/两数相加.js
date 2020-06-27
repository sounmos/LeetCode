/*
  原题链接：https://leetcode-cn.com/problems/add-two-numbers/
* 步骤：
* 1.循环链表，将每一位计算。将得到的结果十位保留，个位赋值回去
* 2.链表递进
* */

function addTwoNumbers(l1, l2) {
  let result = null
  let right = null
  let shiwei = 0
  while(l1 || l2) {
    let a1 = l1 ? l1.val : 0
    let a2 = l2 ? l2.val : 0

    let middle = ~~a1 + ~~a2 + shiwei
    let gewei = middle % 10
    shiwei = ~~(middle / 10)

    let obj = {
      val: gewei,
      next: null
    }
    if (!result) {
      result = obj
      right = result;
    } else {
      right.next = obj
      right = right.next
    }
    // 个位为val的数
    l1 = l1 && l1.next || null
    l2 = l2 && l2.next || null
  }
  // 如果十位还是1 ，则添加到最后
  if (shiwei) {
    right.next = {
      val: shiwei,
      next: null
    }
  }
  return result
}
