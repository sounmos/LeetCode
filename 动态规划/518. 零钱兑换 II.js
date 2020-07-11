/**
 * 原题地址：https://leetcode-cn.com/problems/coin-change-2/
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = function(amount, coins) {
  // 首先我们先生成一个 amount+1 长度，以0为填充的数组
  const dp = new Array(amount + 1).fill(0)
  dp[0] = 1

  // 循环金币列表
  for (let coin of coins) {
    // 从当前金币的大小开始循环枚举
    for (let x = coin; x < amount + 1; x++) {
      dp[x] += dp[x - coin]
    }
  }

  return dp[amount]
};
