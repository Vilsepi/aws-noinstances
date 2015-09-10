
Get the metadata of an object by id:

    {
      "operation": "getHead",
      "id": "s3-key-of-my-object.txt"
    }

Get the whole object by id (not advisable to pull objects through Lambda, you should just pass the S3 URL instead):

    {
      "operation": "getObject",
      "id": "s3-key-of-my-object.txt"
    }

Get a list of objects:

    {
      "operation": "list"
    }

Test the Lambda function:

    {
      "operation": "ping"
    }

