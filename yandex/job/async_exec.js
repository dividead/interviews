const { promisify } = require('util')
// const { exec } = require('child_process')

const delay = promisify(setTimeout)

const exec = async c => {
  await delay(1000)
  console.log(c)
}
let cmds = [5, 6, 7, 8]
!(async () => {
  for (const cmd of cmds) {
    // await promisify(exec(cmd))
    await exec(cmd)
  }
}
)()