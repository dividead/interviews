function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var sortedArrayToBST = function (nums) {
  if (!nums.length) return null
  let mid = Math.floor(nums.length / 2)
  console.log({ nums, x: nums[mid] })
  let root = new TreeNode(nums[mid])
  if (nums.length == 1) return root
  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid + 1))
  return root
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))