# AWS with no instances

> Look Mom, No Instances!

Cloud is fun, but sometimes it is a bit tedious to manage all the instances and networks. Even PaaS offerings fail to abstract away the infrastructure, and instead offer nodes and whatnot. What if you could deploy code to a major cloud platform without ever seeing any notion of virtual machines or load balancers? Well now you can!

Amazon Web Services has published a set of new services:

- [Lambda](http://aws.amazon.com/lambda/)
- [API Gateway](http://aws.amazon.com/api-gateway/)

With these, we will have the compute infrastructure for our REST server. Add some storage services and we are all done:

- [DynamoDB](http://aws.amazon.com/dynamodb/)
- [Simple Storage Service](http://aws.amazon.com/s3/)

## Getting started

    cd deploy
    git clone https://github.com/awslabs/aws-apigateway-swagger-importer
    cp vars/secrets_example.yml vars/secrets.yml
    . ./export_env_variables.sh
    ansible-playbook -i localhost, deploy.yml

### Prerequisites

- [Ansible](https://github.com/ansible/ansible)
- [AWS CLI](https://github.com/aws/aws-cli)
- [aws-apigateway-swagger-importer](https://github.com/awslabs/aws-apigateway-swagger-importer)

### Defining APIs

Unfortunately, as of September 5th 2015, CloudFormation and Boto do not support API Gateway (see [thread](https://forums.aws.amazon.com/thread.jspa?threadID=192530) and [issue](https://github.com/boto/botocore/issues/607)). However AWS Labs has published an [import tool](https://github.com/awslabs/aws-apigateway-swagger-importer) that allows us to define APIs with [Swagger](http://swagger.io/). Swagger in turn provides an [editor](http://editor.swagger.io/#/) for creating API specifications.
