# Typescript Patterns DOJO

This repository contains a basic structure to learn good practices of Typescript, as well as some Design Patterns alongside the AWS SAM framework.

## build the resources
sam build --template template.yaml --build-dir .aws-sam/build --beta-features

## pack resources and convert SAM template into a CloudFormation template
sam package --template-file .aws-sam/build/template.yaml --s3-bucket typescript-patterns-dojo-assets --output-template-file .aws-sam/build/packaged-template.yaml

## create and deploy the CloudFormation stack
sam deploy --template-file .aws-sam/build/packaged-template.yaml --s3-bucket typescript-patterns-dojo-assets --no-fail-on-empty-changeset --stack-name typescript-patterns-test --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM
