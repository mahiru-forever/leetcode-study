// 一个环，有n个点（编号 0 ~ n-1 ）, 问从0点出发，经过k步（可以往前一步或者往后一步）回到原点（0点）有多少种方法 ?
// 可以转化为他相邻的点经过 k − 1步回到原点的问题，点 j 相邻的点即 j − 1 和 j + 1

function getStepNum(n, k) {
  if (n === 0 || n === 1) {
    return 1
  }

  // 如果只有2个元素，则偶数有1个方法，奇数则不能到达
  if (n === 2) {
    if ((k & 1) === 1) {
      // 判断为奇数 则不能到达
      return 0
    } else {
      return 1
    }
  }

  const dp = new Array(k + 1).fill(0).map(v => new Array(n))

  dp[0][0] = 1

  for (let i = 1; i < n; i++) {
    dp[0][i] = 0
  }

  for (let j = 1; j <= k; j++) {
    for (let i = 0; i < n; i++) {
      // j步到达i点
      // 相当于j-1步从相邻两节点到达目标节点数之和
      // 需要保证在0~n-1的范围之内，进行防越界处理
      dp[j][i] = dp[j - 1][(i - 1 + n) % n] + dp[j - 1][(n + 1) % n]
    }
  }

  // k步到达0点
  return dp[k][0]
}

console.log(getStepNum(5, 4))
