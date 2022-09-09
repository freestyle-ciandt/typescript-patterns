# TASK 3: Configure the Pipeline (CI/CD)

In this task you will practice your skills with CI/CD.

If you want to deep dive in the concepts of Continuous Integration and Continuous Delivery, here are some interesting links about the subject:
* [**Software Delivery Guide - Martin Fowler**](https://martinfowler.com/delivery.html)
* [**Continuous Integration - Martin Fowler**](https://www.martinfowler.com/articles/continuousIntegration.html)
* [**Continuous Delivery - Martin Fowler**](https://martinfowler.com/bliki/ContinuousDelivery.html)

In order to proceed with the tasks, please follow the instructions below:

1. Create a script in the `package.json` named `quality`. This script will perform the following:
    * Check for audit issues.
    * Run the lint validation
    * Run the unit tests
2. Set up the [Git Hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) to execute the script created in the previous step **every time someone executes a "git commit"**. As a suggestion, you can use the tool [Husky](https://typicode.github.io/husky/#/).
3. **(Will be done with the entire team together)** Set up an instance with a Jenkins application.
    * Install the necessary plugins (GitHub, AWS, SSH Server)
    * Generate a SSH Key and add that to the GitHub repository.
    * Configure the credentials necessary to access the GitHub repository via SSH.
    * Configure the credentials necessary to access the AWS Account.
4. Create a new Pipeline in Jenkins. The pipeline needs to have the following settings:
    * It should install the dependencies, run the `quality` validation. Users will be able to deploy to each environment only if the `quality` validation was executed successfully.
    * It should provide the option to deploy to the DEV, QA, UAT and PROD environments using the SAM commands. You can follow the example in [this page](https://aws.amazon.com/blogs/compute/building-a-jenkins-pipeline-with-aws-sam/).
        * In the `S3_BUCKET` use the value `typescript-patterns-dojo-assets`.
        * In the `STACK_NAME` use the name of your stack.
        * In the `credentials` use the value `sam-dojo-access-credentials`.
    * Filter what branches can be deployed in each environment:
        * **DEV:** any branch
        * **QA:** only `story/*`, `release/*` or `master`
        * **UAT:** only `release/*` or `master`
        * **PROD:** only `master`
    * It should have an "Approval" step before deploying to each environment. (E.g. Approve DEV Deployment, Approve QA Deployment, and so on...)
    * **(Extra/Optional)** Create a step to destroy the stack for each environment.
    * **(Extra/Optional)** Create a step to send an email to notify users of failed builds. (Might be necessary to configure SMTP and install plugins. Feel free to challenge yourself to figure that out.)

[<- Go back](../../README.md)
