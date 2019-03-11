var maxProfit = function (prices) {
  let maxprofit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1])
      maxprofit += prices[i] - prices[i - 1];
  }
  return maxprofit;
  // 100%!
  // let total = 0
  // let buy = 0
  // let canbuy = true
  // let cansell = false
  // for (let i = 0; i < prices.length; i++) {
  //   let tod = prices[i]
  //   if (i + 1 == prices.length && tod > buy && cansell) {
  //     total += tod - buy
  //     break
  //   }
  //   let tom = prices[i + 1]
  //   if (canbuy && tom > tod) {
  //     buy = tod
  //     canbuy = false
  //     cansell = true
  //     console.log("buy!", { i, total, tod, buy })
  //     continue
  //   }
  //   if (tod > tom && cansell) {
  //     total += tod - buy
  //     canbuy = true
  //     cansell = false
  //     buy = 0
  //     console.log("sell!", { i, total, tod, tom })
  //   }
  // }
  // console.log(total)
  // return total
};

maxProfit([7, 1, 5, 3, 6, 4])
maxProfit([1, 2, 3, 4, 5])