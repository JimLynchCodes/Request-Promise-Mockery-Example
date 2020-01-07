
const mockery = require('mockery')
const expect = require('chai').expect

function setUpMocks(desiredResponse) {
  mockery.registerMock('request-promise', desiredResponse);
  return require('./callForStuff');
}

describe('callForStuff', () => {

  it("should call for stuff and return said stuff.", async () => {

    let response = {"foo": "bar"};

      const callForStuff = setUpMocks(function request(){return Promise.resolve(response)});
      return callForStuff("ok").then(result => {
        console.log('result ', result.body)

        expect(result).to.deep.equal({"foo": "bar"})
      });
  
  })

})