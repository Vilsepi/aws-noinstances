#!/bin/bash

ansible-playbook --extra-vars "importer_mode=update interface_name=$1 interface_id=$2 interface_stage=$3" -i localhost, deploy.yml
