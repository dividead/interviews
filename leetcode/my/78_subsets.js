var subsets = function (nums) {
  const x = [[]] // Array(2**nums.length).fill([])
  for (const i of nums) {
    const l = x.length
    for (let z = 0; z < l; z++) {
      x.push([...x[z], i])
    }
  }
  return x
};

function subsetsR(nums) {
  let x = Array(nums.length).fill(null)
  return rec(nums, 0, x)
}

function rec(nums, i, x) {
  if (i == nums.length) return console.log(x.filter(i => i))
  x[i] = null
  rec(nums, i + 1, x)
  x[i] = nums[i]
  rec(nums, i + 1, x)
}

subsets([1, 2, 3])
subsetsR([1, 2, 3])