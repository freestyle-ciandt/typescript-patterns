pipeline {
  agent any
 
  stages {
    stage('Install sam-cli') {
      steps {
        sh 'python3 -m venv venv && venv/bin/pip install aws-sam-cli'
        stash includes: '**/venv/**/*', name: 'venv'
      }
    }
    stage('Build') {
      steps {
        unstash 'venv'
        sh 'venv/bin/sam build --beta-features'
        stash includes: '**/.aws-sam/**/*', name: 'aws-sam'
      }
    }
    stage('dev') {
      environment {
        STACK_NAME = 'sam-typescript-jenkins-dojo-marco'
        S3_BUCKET = 'typescript-patterns-dojo-assets'
      }
      steps {
        withAWS(credentials: 'sam-dojo-jenkins', region: 'us-east-1') {
          unstash 'venv'
          unstash 'aws-sam'
          sh 'venv/bin/sam deploy --stack-name $STACK_NAME -t template.yaml --s3-bucket $S3_BUCKET --capabilities CAPABILITY_IAM'
        }
      }
    }
  }
}
