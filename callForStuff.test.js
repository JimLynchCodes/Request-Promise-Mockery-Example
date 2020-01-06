
const expect = require('chai').expect
const callForStuff = require('./callForStuff')
const mockery = require('mockery')

var requireMock = {
    request: function (path, cb) { return 42; }
};
mockery.registerMock('request-promise', requireMock);

const desiredResponse = 42;
mockery.registerMock('request-promise', desiredResponse);
  mockery.registerAllowable('path-under-test', true);

describe('callForStuff', () => {

  it("should call for stuff and return said stuff.", async () => {

    const result = await callForStuff('callForStuff');
    
    expect(result).to.equal(42)
  
  })

})