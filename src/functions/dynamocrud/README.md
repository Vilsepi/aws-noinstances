
Add new objects:

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

Delete an object:

    {
      "operation": "delete",
      "id": "ycwk13a7pzwr8uxr"
    }

Get a list of objects:

    {
      "operation": "list"
    }

Test the Lambda function:

    {
      "operation": "echo",
      "everything": {
        "is": "returned"
      }
    }

Test the Lambda function:

    {
      "operation": "ping"
    }

