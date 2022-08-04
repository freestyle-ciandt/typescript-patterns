# TASK 2: Configure Jest

In this task you'll become more experienced in configuring a code quality mechanism using the Jest framework.

Please follow the steps below:

1. Install the [Jest](https://jestjs.io/) dependency:
    - Install the Jest types so your development environment can recognize the Jest native features.
2. Create the Jest configuration file:
    - Prefer to use the `.js` version, since it makes the configuration a little more dynamic. As a challenge, you can try to use the `.ts` extension.
    - The test files should match the pattern `.test.ts` at any directory. Make sure you also ignore other directories that don't need to be tested, such as `node_modules/` and `.aws-sam/`.
    - Enable the **Coverage**.
        * Set the coverage threshold to 80% for branches, functions, lines and statements.
        * Collect coverage only from `.ts` files, except the ones inside test directories. (For example, if you intend to create a `__test__` directory, ignore the coverage for the files inside that directory.)
    - Enable the **verbose** mode, so you can see more details in the logs.
3. Add a new script named **test** and another one named **test:watch**.
    - The **test** script should execute all the tests.
    - The **test:watch** script should execute the tests only for the modified files. It will listen for updates and execute the tests automatically.
4. Create unit tests for the **getVehicleLambda**. Make sure you explore all the possible scenarios.


---

[<- Go back](../../README.md)
