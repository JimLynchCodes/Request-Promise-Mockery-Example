const Mocha = require('mocha')
const runner = new Mocha({})
const mockery = require('mockery')

runner.addFile('./callForStuff.test.js')

mockery.enable({
    warnOnReplace: false,
    warnOnUnregistered: false
});

runner.run(failures => {
  if (failures) {
    console.error(failures)
  } else {
    console.log('All passed.')
  }
})