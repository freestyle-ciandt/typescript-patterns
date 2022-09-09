# TASK 1: Configure ESLint

This task was designed to make you more familiar with configuring Lint rules for a new project.

Please follow the steps below:

1. Install the [ESLint](https://eslint.org/) dependencies:
    - Install the ESLint dependencies for NodeJS (`.js`) and Typescript (`.ts`).
    - Install the AirBNB dependencies for NodeJS (`.js`) and Typescript (`.ts`). Make sure you bring only the **base** version, since we don't need rules for other extra features like React or Prettier.
2. Create the configuration file:
    - Prefer to use the `.js` extension, as it makes the file more dynamic to configure.
    - The configuration must extend the AirBNB.
    - Add the Import plugin to the configuration.
3. Overwrite specific rules:
    * Do not allow a function parameter to get reassigned. For example:
    ```javascript
    // Do not allow this
    function(myParam: string) {
        myParam = 'another value';
    }
    ```
    * If an object has more than 3 attributes, it should be broken in a new line. The object indentation must be consistent. Here are a few examples:
    ```javascript
    // OK
    const obj = { a: 1, b: 2, c: 3 };
    const obj = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
    };
    const obj = {
        a: 1, b: 2, c: 3, d: 4, e: 5
    };

    // NOT OK
    const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    const obj = { a: 1,
        b: 2, c: 3,
        d: 4, e: 5 };
    ```
    * If the developer made an assignment inside a condition, allow it only if the expression is surrounded by parenthesis. Example:
    ```javascript
    // Incorrect
    do {
        // some logic...
    } while (node = list.nextNode)

    // Expected
    do {
        // some logic...
    } while ((node = list.nextNode))
    ```
    * Allow developers to use the "plus-plus" syntax. Example:
    ```javascript
    let a = 0;
    a++;
    ```

4. Create a script named **lint** and another one named **lint:fix** in the `package.json` file.
    - The **lint** script will execute the ESLint validation and report the issues found.
    - The **lint:fix** script will execute the ESLint validation, report the issues found and it will fix the issues in the code for you.
5. Adjust the code of the `getVehicleLambda` to meet the Lint rules.

---

[<- Go back](../../README.md)
