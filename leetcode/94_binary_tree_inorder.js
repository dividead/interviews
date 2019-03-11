var inorderTraversal = function (root) {
  if (!root) return []
  return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
};

// var inorderTraversal = function(root, arr = []) {
//   let current = root;    

//   if(current !== null){
//       inorderTraversal(current.left, arr)
//       arr.push(current.val)
//       inorderTraversal(current.right, arr)
//   } 

//   return arr;
// };