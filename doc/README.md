
# Lambda

- Invocation types: Event (async, no response) and Request-Response (sync, response) http://docs.aws.amazon.com/lambda/latest/dg/intro-core-components.html
-- API Gateway uses Lambda with RR model

- Also related [Push vs Pull](http://docs.aws.amazon.com/lambda/latest/dg/intro-invocation-modes.html)


## Lambda configuration

- name and description
- runtime (Node.js or Java 8)
- the code itself
- handler (the entry point in your code)
- IAM role for execution
- memory allocated (128-1536 MB)
- timeout (1-60 seconds)

## Lambda integration

- Event sources (S3, SNS, DynamoDB, Kinesis, Cognito Sync Trigger, Alexa Skills kit)
- API Gateway endpoints

## Lambda [pricing](https://aws.amazon.com/lambda/pricing/)

- $0.20 per 1 million requests (first 1 million free per month)
- $0.00001667 per GB-second based on execution time and memory allocated (400,000 GB-seconds free per month)
- Example 1: 128 MB, 30 million executions, 200 ms duration = $11.63 per month
- Example 2: 512 MB, 3 million executions, 1000 ms duration = $18.74 per month


# API Gateway


## API [pricing](https://aws.amazon.com/api-gateway/pricing/)

- $3.50 per million API calls received (Free Tier available)
- $0.09/GB for the first 10 TB data transfer out
- Optional caching: 0.5 GB $0.020 per hour, 6.1 GB $0.200 per hour
- Example: 5 million calls, 3 kB responses, no caching = $18.79 per month

