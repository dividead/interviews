var deleteDuplicates = function (head) {
  if (!head) return head
  let seen = new Set()
  let c = head
  let prev
  while (c.next) {
    if (!seen.has(c.val)) {
      seen.add(c.val)
      prev = c
      c = c.next
    } else {
      c = prev.next
    }
  }
  return head
};