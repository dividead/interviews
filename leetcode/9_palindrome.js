var isPalindrome = function (x) {
  if (x < 0) return false
  if (x < 10) return true
  if (x % 10 == 0) return false
  let res = []
  while (x > 0) {
    let i = x % 10
    res.push(i)
    x = (x - i) / 10
    x = x < 1 ? 0 : x
  }
  console.log(res)
  for (let i = 0; i < Math.floor(res.length / 2); i++) {
    if (res[i] != res[res.length - 1 - i]) return false
  }
  return true

  // BEST
  // if ( x < 0 ) { return false ; }

  // var reversedX = 0;
  // var t = x ;
  // while ( t ) {
  //   reversedX = reversedX * 10 + t % 10;
  //   t = Math.floor ( t / 10 );
  // }

  // return x == reversedX;
};

console.log(isPalindrome(1221))