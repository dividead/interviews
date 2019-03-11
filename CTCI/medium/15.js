const rgby = { r: 0, g: 1, b: 2, y: 3 }

function comb(fact, guess) {
  let hits = 0
  let pseudohits = 0
  let pseudo = {}
  for (let i in guess) {
    let c = guess[i]
    if (fact[i] == c) {
      hits++
    } else {
      pseudo[c] = pseudo[c] ? pseudo[c] + 1 : 1
    }
  }

  for (let i in guess) {
    let c = guess[i]
    if (rgby[c] && pseudo[c] > 0 && c != fact[i]) {
      pseudohits++
      pseudo[c]--
    }
  }

  return { hits, pseudohits, pseudo }
}

console.log(comb("rgby", "ggbr"))