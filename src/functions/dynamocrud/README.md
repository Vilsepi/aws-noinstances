
Adding new objects:

    {
      "operation": "upsert",
      "payload": {
        "name": "Seppo",
        "profession": "coffee-drinker"
      }
    }

Get an object by id:

    {
      "operation": "getById",
      "id": "ycwk13a7pzwr8uxr"
    }

To delete an object:

    {
      "operation": "delete",
      "id": "ycwk13a7pzwr8uxr"
    }

To scan the DynamoDB table and get a list of objects:

    {
      "operation": "scan"
    }

To test the Lambda function you can echo your input back:

    {
      "operation": "echo",
      "everything": {
        "is": "returned"
      }
    }

To test the Lambda function you can ping:

    {
      "operation": "ping"
    }

