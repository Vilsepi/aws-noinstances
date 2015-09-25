var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var config = require('./config');

exports.handler = function(event, context) {
  console.log('Received request:', JSON.stringify(event, null, 2));

  var operation = event.operation;
  var params = {'Bucket': config.bucketName};
  console.log(params);

  switch (event.operation) {
    case 'getHead':
      params.Key = event.id;
      s3.headObject(params, context.done);
      break;
    case 'getObject':
      params.Key = event.id;
      s3.getObject(params, context.done);
      break;
    case 'list':
      s3.listObjects(params, context.done);
      break;
    case 'ping':
      context.succeed('pong');
      break;
    default:
      context.fail(new Error('Unrecognized operation: ' + event.operation));
  }
};
