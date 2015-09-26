//var doc = require('dynamodb-doc');
//var dynamo = new doc.DynamoDB();
var config = require('./config');

exports.handler = function(event, context) {
    console.log('Received event:', JSON.stringify(event, null, 2));
    event.Records.forEach(function(record) {
        console.log(record.eventID);
        console.log(record.eventName);
        console.log('DynamoDB Record: %j', record.dynamodb);
    });
    context.succeed("Successfully processed " + event.Records.length + " records.");
};
