const Mocha = require('mocha')
const runner = new Mocha({})

console.log('ok')
runner.addFile('./callForStuff.test.js')

runner.run(failures => {
  if (failures) {
    console.error(failures)
  } else {
    console.log('All passed.')
  }
})