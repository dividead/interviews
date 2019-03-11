const invertTree = function (root, parent = null) {
  if (root === null) return root;
  const left = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(left);
  return root;
};
