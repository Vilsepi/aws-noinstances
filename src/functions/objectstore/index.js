var config = require('./config');

exports.handler = function(event, context) {
  console.log('Received request:', JSON.stringify(event, null, 2));
  context.succeed('Hello from objectstore function');

};
