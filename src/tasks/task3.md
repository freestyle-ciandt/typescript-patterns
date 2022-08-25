# TASK 3: Configure the Pipeline (CI/CD)

In this task you will practice your skills with CI/CD. Please follow the instructions below:

1. Create a script in the `package.json` named `quality`. This script will perform the following:
    * Check for audit issues.
    * Run the lint validation
    * Run the unit tests
2. Set up the [Git Hook](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks) to execute the script created in the previous step **every time someone executes a "git commit"**. As a suggestion, you can use the tool [Husky](https://typicode.github.io/husky/#/).
3. Create a workflow using [Git Actions](https://docs.github.com/en/actions/quickstart). The workflow needs to be executed **every time someone pushes a branch**. For now, the workflow will execute the following:
    * Install the project dependencies.
    * Run the quality check created in the **Step 1**.


[<- Go back](../../README.md)
