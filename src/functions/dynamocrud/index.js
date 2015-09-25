var doc = require('dynamodb-doc');
var dynamo = new doc.DynamoDB();
var config = require('./config');

exports.handler = function(event, context) {
  console.log('Received request:', JSON.stringify(event, null, 2));

  var operation = event.operation;
  var params = {'TableName': config.tableName};

  switch (event.operation) {
    case 'upsert':
      params.Item = event.payload;
      if (!("id" in params.Item)) {
        params.Item.id = Math.random().toString(36).slice(2);
      }
      dynamo.putItem(params, context.done);
      break;
    case 'getById':
      params.Key = {"id": event.id};
      dynamo.getItem(params, context.done);
      break;
    case 'delete':
      params.Key = {"id": event.id};
      dynamo.deleteItem(params, context.done);
      break;
    case 'list':
      dynamo.scan(params, context.done);
      break;
    case 'echo':
      context.succeed(event);
      break;
    case 'ping':
      context.succeed('pong');
      break;
    default:
      context.fail(new Error('Unrecognized operation: ' + event.operation));
  }
};
