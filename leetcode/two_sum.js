var twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let el = nums[i]
    let diff = target - el
    let ex = map.get(diff)
    console.log({ ex, map })
    if (ex != undefined) {
      return [ex, i]
    } else {
      map.set(el, i)
    }
  }
  return []
};

console.log(twoSum([2, 7, 11, 15], 9))