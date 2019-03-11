function split(str, by) {
  let res = []
  let temp = ''
  for (let c of str) {
    if (c != by) {
      temp += c
    } else {
      res.push(temp)
      temp = ''
    }
  }
  if (temp != '') res.push(temp)
  console.log(res)
  return res
}

split(`ReferenceError: i is not defined
at Module._compile (internal/modules/cjs/loader.js:689:30)
at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
at Module.load (internal/modules/cjs/loader.js:599:32)
at tryModuleLoad (internal/modules/cjs/loader.js:538:12)')`, '/')