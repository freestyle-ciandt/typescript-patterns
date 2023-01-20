sam build --template template.yaml --build-dir .aws-sam/build --beta-features

sam package --template-file .aws-sam/build/template.yaml --s3-bucket typescript-patterns-dojo-assets --output-template-file .aws-sam/build/packaged-template.yaml

sam deploy --template-file .aws-sam/build/packaged-template.yaml --s3-bucket typescript-patterns-dojo-assets --no-fail-on-empty-changeset --stack-name cabulosos-ts --capabilities CAPABILITY_IAM CAPABILITY_NAMED_IAM
