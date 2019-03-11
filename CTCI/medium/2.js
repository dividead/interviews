function count(words) {
  const m = {}
  for (const word of words) {
    if (m[word]) {
      m[word]++
    } else {
      m[word] = 1
    }
  }
  console.log(m)
}

count("asda asdad adsadas asdas das dasd asd as da sd as das d as da sd as da sd as das".split(' '))