var merge = function (nums1, m, nums2, n) {
  m = m - 1
  n = n - 1
  for (let i = m + n + 1; i >= 0; i--) {
    let a = nums1[m]
    let b = nums2[n]
    if (n < 0 || a > b) {
      nums1[i] = a
      m--
    } else {
      nums1[i] = b
      n--
    }
  }
  console.log({ nums1 })
};

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
// merge([0], 0, [1], 1)
merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)