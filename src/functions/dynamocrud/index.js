var doc = require('dynamodb-doc');
var dynamo = new doc.DynamoDB();
var config = require('./config');

exports.handler = function(event, context) {
  console.log('Received request:', JSON.stringify(event, null, 2));

  var operation = event.operation;
  var params = {"TableName": config.tableName};

  switch (event.operation) {
    case 'create':
      params.Item = event.payload;
      params.Item.id = Math.random().toString(36).slice(2);
      dynamo.putItem(params, context.done);
      break;
    case 'read':
      params.Key.id = event.id;
      dynamo.getItem(params, context.done);
      break;
    case 'update':
      dynamo.updateItem(event, context.done);
      break;
    case 'delete':
      dynamo.deleteItem(event, context.done);
      break;
    case 'list':
      dynamo.scan(event, context.done);
      break;
    case 'echo':
      context.succeed(event);
      break;
    case 'ping':
      context.succeed('pong');
      break;
    default:
      context.fail(new Error('Unrecognized operation "' + event.operation + '"'));
  }
};
