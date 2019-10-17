var lengthOfLongestSubstring = function (s) {
  let n = s.length
  if (!n) return 0
  let cur_len = 1
  let max_len = 1
  let prev = 0
  let visited = Array(256).fill(-1)
  visited[s.charCodeAt(0)] = 0
  for (let i = 1; i < n; i++) {
    prev = visited[s.charCodeAt(i)]
    if (prev == -1 || (i - cur_len > prev)) {
      cur_len++
    } else {
      if (cur_len > max_len) {
        max_len = cur_len
        cur_len = i - prev
      }
    }
    visited[s.charCodeAt(i)] = i
  }
  if (cur_len > max_len) max_len = cur_len
  console.log("->", { s, max_len })
  return max_len
}

lengthOfLongestSubstring("")
lengthOfLongestSubstring("jbpnbwwd")
lengthOfLongestSubstring("abcabcbb")
lengthOfLongestSubstring("pwwkew")
lengthOfLongestSubstring("bbbbb")
lengthOfLongestSubstring("dvdf")

// const node = val => ({ val, c: [] })