const request = require('request-promise')

const callForStuff = async(name) => {
  
  const options = {
    url: 'https://api.github.com/events',
    headers: {
      'User-Agent': 'http://developer.github.com/v3/#user-agent-required'
    }
  }

  return await request(options, function(error, response, body) {

    console.log('statusCode:', response && response.statusCode);

    if (error) {
      console.log('there was an error! ', error);
      reject(error)
    }

    console.log(JSON.parse(body))
   
    return JSON.parse(body)

  });
};

module.exports = callForStuff;
