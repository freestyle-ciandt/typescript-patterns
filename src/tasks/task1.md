# TASK 1: Configure ESLint (WIP...)

This task was designed to make you more familiar with configuring Lint rules for a new project.

Please follow the steps below:

1. Install the [ESLint](https://eslint.org/) dependencies:
    - Install the ESLint dependencies for NodeJS (`.js`) and Typescript (`.ts`).
    - Install the AirBNB dependencies too. Make sure you bring only the **base** version, since we don't need rules for other extra features like React or Prettier.
2. Create the configuration file:
    - Prefer to use the `.js` extension, as it makes the file more dynamic to configure.
    - The configuration must extend the AirBNB.
    - Add the Import plugin to the configuration.
3. Define specific rules:
    - (TODO: Define what rules need to be added)
4. Create a script named **lint** and another one named **lint:fix** in the `package.json` file.
    - The **lint** script will execute the ESLint validation and report the issues found.
    - The **lint:fix** script will execute the ESLint validation, report the issues found and it will fix the issues in the code for you.
5. Validate the configuration against the **getVehiclesLambda** code.
    - (TODO: Mess up the code a little bit so the errors can be found.)

---

[<- Go back](../../README.md)
