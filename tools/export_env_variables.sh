#!/bin/bash

# This script exports the AWS user IAM credentials as environment variables
# for tools such as Ansible and boto. You can simply run this script with:
#
# . ./export_env_variables.sh
#
# This expects that the credentials.csv file exists in the same directory from
# where you invoke the script. You can also pass the file path as an argument.

FILE="credentials.csv"

if [ -n "$1" ]
then
  FILE=$1
fi

if [ -f "$FILE" ]
then
  CSV_USERNAME=`tail -n +2 $FILE|cut -d , -f 1`
  CSV_ACCESS_KEY=`tail -n +2 $FILE|cut -d , -f 2`
  CSV_SECRET_KEY=`tail -n +2 $FILE|cut -d , -f 3`

  export AWS_ACCESS_KEY=$CSV_ACCESS_KEY
  export AWS_ACCESS_KEY_ID=$CSV_ACCESS_KEY
  export AWS_SECRET_KEY=$CSV_SECRET_KEY
  export AWS_SECRET_ACCESS_KEY=$CSV_SECRET_KEY

  echo "IAM Credentials for user $CSV_USERNAME and key $AWS_ACCESS_KEY exported as environment variables"

else
	echo "File $FILE does not exists"
fi
