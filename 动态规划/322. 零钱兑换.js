/**
 * 原题链接：https://leetcode-cn.com/problems/coin-change
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function(coins, amount) {
  // 初始化一个元素都为infinity的数组，长度为amount + 1
  const dp = new Array(amount + 1).fill(Infinity)
  // 由于金额为0时，硬币数量为0，因此初始化第0个元素为0
  dp[0] = 0

  // 遍历 1~amount 这个区间的硬币总额
  for (let i = 1; i <= amount; i++) {
    // 循环遍历每个可用硬币的面额
    for (let j = 0; j < coins.length; j++) {
      // 若当前循环到的硬币面额小于目标总额，则证明问题成立
      if (coins[j] <= i) {
        // 设置最小的数量
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
      }
    }
  }

  // 如果目标金额对应的解是无穷大，则证明没有符合条件的硬币数来更新该值，无解返回-1
  // 如果有解，则直接返回数组内容
  return dp[amount] === Infinity ? -1 : dp[amount]
};

/**
 * 时间复杂度：O(Sn)，其中 S 是金额，n 是面额数。我们一共需要计算 O(S) 个状态，S 为题目所给的总金额。对于每个状态，每次需要枚举 n 个面额来转移状态，所以一共需要 O(Sn) 的时间复杂度。
 * 空间复杂度：O(S)。DP 数组需要开长度为总金额 S 的空间。
 */
