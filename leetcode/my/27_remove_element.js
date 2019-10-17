var removeElement = function (nums, val) {
  let start = 0
  let end = nums.length - 1
  while (start <= end) {
    if (nums[start] != val) {
      start++
    } else if (nums[end] != val) {
      nums[start] = nums[end]
      start++
      end--
    } else {
      end--
    }
  }
  console.log({ start, end, nums })
  return start
  // BEST
  // первый индекс отстает от второго и просто копирует нужные элементы назад
  // let i = 0
  // for(let j = 0, len = nums.length; j < len; j++) {
  //   if(nums[j] !== val) {
  //     nums[i] = nums[j]
  //     i++
  //   }
  // }
  // return i
};

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)
removeElement([2], 3)
removeElement([1], 1)
removeElement([3, 3], 3)
removeElement([4, 5], 5)
removeElement([3, 2, 2, 3], 3)