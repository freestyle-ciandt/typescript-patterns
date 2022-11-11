# TASK 5: Implement the Singleton Pattern

In this task you'll be able to implement the Singleton design pattern.

## Reference

* [**Refactoring Guru - Singleton**](https://refactoring.guru/pt-br/design-patterns/singleton)

## Context

Your team decided to standardize the log messages by creating a custom logging class in your API. Your job is to make sure all parts of your code is using the same library.

## Specification

Please follow the steps below:

1. Create a class with the following methods `info()`, `error()` and `debug()`. Each of these methods should call the corresponding function from the `console` global variable. For example `info()` should call the `console.info()`.
2. Make sure there is **ONLY ONE** single instance of this class being created in the entire project.
3. Do NOT pass the instance as parameter of the methods. If you need the instance of the class, import that in the file that is going to use it.
4. Update all parts of the code that is using `console.log()`, replace with your custom class.

**Extra - Reinforcing the Factory Pattern**

5. Create different sub-classes for logging. Each sub-class using a different third-party-lib (Examples [**here**](https://blog.logrocket.com/comparing-node-js-logging-tools/))
6. Create a Factory to instantiate different logger classes. Play out combining the Singleton with this factory to make sure **ONLY ONE** single instance is getting created.
7. Also, play out with the existing code by making usage of the different created.


[<- Go back](../../README.md)
