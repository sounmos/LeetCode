/**
 * 原题链接：https://leetcode-cn.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  // 处理n小于0的情况
  if (n <= 0) return 0
  // n小于等于3时，结果为n本身的值，因此直接返回
  if (n <= 3) return n

  /*
  * allWays：代表到达第[n]阶台阶解的数量
  * oneStepBefore：代表到达第[n-1]阶台阶解的数量
  * twoStepsBefore：代表到达第[n-2]阶台阶解的数量
   */
  let oneStepBefore = 2, twoStepsBefore = 1, allWays = 0;

  // 当n小于3试跳出循环
  while (n-- >= 3) {
    allWays = oneStepBefore + twoStepsBefore
    twoStepsBefore = oneStepBefore;
    oneStepBefore = allWays;
  }

  return allWays
};
