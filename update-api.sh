#!/bin/bash

if [ "$#" -eq 3 ]; then
    ansible-playbook --extra-vars "importer_mode=update interface_name=$1 interface_id=$2 interface_stage=$3" -i localhost, deploy.yml
else
	echo "Usage: ./update-api.sh interface_name interface_id interface_stage"
	echo "Usage: ./update-api.sh main vz5y30yrel prod"
fi
