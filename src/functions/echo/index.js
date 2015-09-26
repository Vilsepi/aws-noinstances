var config = require('./config');

exports.handler = function(event, context) {
  console.log('Received request:', JSON.stringify(event, null, 2));

  var response = {
    'lambdaEvent': event,
    'lambdaContext': context,
    'lambdaRemainingMillis': context.getRemainingTimeInMillis()
  };
  
  context.succeed(response);

};
