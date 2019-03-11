var findMedianSortedArrays = function (a, b) {
  let merged = [...a, ...b].sort((z, x) => z - x)
  let l = merged.length
  console.log({ merged })
  if (l % 2 == 1) {
    console.log(merged[Math.ceil(l / 2)], Math.ceil(l / 2), l)
    return merged[Math.floor(l / 2)]
  } else {
    console.log(merged[l / 2], merged[l / 2 - 1], l)
    return (merged[l / 2] + merged[l / 2 - 1]) / 2
  }
};

console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))
console.log(findMedianSortedArrays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22], [0, 6]))
