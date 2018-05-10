# create-update-aws-ses-template

Set-up aws-cli with access key and secret key

Commands: 
Install aws-cli in system: 
https://docs.aws.amazon.com/cli/latest/userguide/installing.html

Run Command
aws configure - in terminal
if you dont have an access key then get it from IAM service
https://console.aws.amazon.com/iam/home#/home
set access key
set secret key
set default region
set default output type

1. Create the ses template in aws ses service
2. Update the ses template in aws ses service

to run these file:
1. node createTemplate.js - To create template
2. node updateTemplate.js - To update template
