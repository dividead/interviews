var deleteDuplicates = function (head) {
  if (!head) return head
  let c = head
  while (c.next) {
    if (c.val == c.next.val) {
      c.next = c.next.next
    } else {
      c = c.next
    }
  }
  return head
};