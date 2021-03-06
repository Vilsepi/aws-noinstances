# AWS with no instances

> Look Mom, No Instances!

Cloud is fun, but sometimes it is a bit tedious to manage all the instances and networks. Even PaaS offerings fail to abstract away the infrastructure, and instead offer nodes and whatnot. What if you could deploy code to a major cloud platform without ever seeing any notion of virtual machines or load balancers? Well now you can!

![Amazon Web Services](/doc/images/aws_service_icons.png)

Amazon Web Services has published a set of new services:

- [API Gateway](http://aws.amazon.com/api-gateway/)
- [Lambda](http://aws.amazon.com/lambda/)

With these, we will have the compute infrastructure for our REST server. Add some storage services and we are all done:

- [DynamoDB](http://aws.amazon.com/dynamodb/)
- [Simple Storage Service](http://aws.amazon.com/s3/)

## Getting started

Install prerequisites [Ansible](https://github.com/ansible/ansible) and [AWS CLI](https://github.com/aws/aws-cli):

    sudo pip install awscli ansible

Install [Amazon API Gateway Importer](https://github.com/awslabs/aws-apigateway-importer) under `tools/`:

    cd tools
    git clone https://github.com/awslabs/aws-apigateway-importer
    cd aws-apigateway-importer
    mvn assembly:assembly

Set your account-related variables:

    cd ../../src/config/
    cp secrets_example.yml secrets.yml
    nano secrets.yml

Finally export your IAM credentials as environment variables and run deployment:

    cd ../../
    . tools/export_env_variables.sh credentials.csv
    ./deploy.sh

### Advanced

Once you have deployed the stack, you can shave off a second or two (*yeaaah!*) from deploying the lambda functions with:

    ./deploy.sh --skip-tags=base

### Defining APIs

Unfortunately, as of September 5th 2015, CloudFormation and Boto do not support API Gateway (see [thread](https://forums.aws.amazon.com/thread.jspa?threadID=192530) and [issue](https://github.com/boto/botocore/issues/607)). However AWS Labs has published an [import tool](https://github.com/awslabs/aws-apigateway-importer) that allows us to define APIs with [Swagger](http://swagger.io/). Swagger in turn provides an [editor](http://editor.swagger.io/#/) for creating API specifications.
