# TASK 5: Implement the Builder Pattern

In this task you'll be able to apply the Builder design pattern.

## Context

You work as a software developer in a burger restaurant. The restaurant offers only some types of burgers. Your manager decided to offer users a possibility to register their favorite burger in the system. The favorite burger can be a predefined recipe or a custom recipe.

## Specifications

1. Create a table named **YOUR_STACK-favorite-burgers**.
    * The partition key will be `user` of type `String`.
    * The billing mode should be on demand.

2. Create a mutation named **registerFavoriteBurger**.
    * The mutation will accept the following parameters:
        * `user`: The user name. It is of type `String` and it is required.
        * `type`: Accepts either of the two strings: `predefined` or `custom`.
        * `value`: An object containing a variety of attributes to specify the burger ingredients. Please check the examples ahead.
    * The lambda should validate if all parameters are valid. If any parameter is invalid, the API should return status code `400` and the following payload in the response body:

      ```json
      {
        "result": "Invalid parameters."
      }
      ```
    * When `type` is `predefined`, the user will specify the preferred option in the `value` attribute. Here's an example of input:

      ```json
        {
          "user": "Foo",
          "type": "predefined",
          "value": {
            "option": "Cheeseburger"
          }
        }
        ```
      And the object saved in the database should look like:

      ```json
        {
          "user": "Foo",
          "lastUpdated": 1663157847,
          "bread": {
            "type": "brioche",
            "slices": 2
          },
          "meat": [
            { "type": "cow", "state": "well-done", "sizeInGrams": 150 }
          ],
          "cheese": [
            { "type": "mozzarella", "slices": 2 }
          ],
          "sauce": [
            { "type": "mustard", "amountInGrams": 20 }
          ]
        }
      ```

      **Note 1:** Create at least 3 types of predefined burger recipes.

      **Note 2:** If a predefined burger was not found, the API should return status code `404` and the following payload in the response body:

      ```json
      {
        "result": "Predefined burger recipe not found."
      }
      ```

    * When `type` is `custom`, the user will specify the list of ingredient attributes in the `value` object. Here's an example of input:

      ```json
        {
          "user": "Bar",
          "type": "custom",
          "value": {
            "breadType": "australian",
            "breadSlices": 2,
            "meatType": "cow",
            "meatState": "well-done",
            "meatSizeInGrams": 150,
            "cheeseType": "mozzarella",
            "cheeseSlices": 2,
            "extras": [
              { "type": "meat", "values": { "type": "pork", "state": "done", "sizeInGrams": 100 } },
              { "type": "cheese", "values": { "type": "cheddar", "amountInGrams": 50 } },
              { "type": "bacon", "values": { "cut": "slices", "amount": 2 } },
              { "type": "salad", "values": { "type": "lettuce", "amountInGrams": 10 } },
              { "type": "salad", "values": { "type": "tomato", "amountInGrams": 50 } },
              { "type": "sauce", "values": { "type": "ketchup", "amountInGrams": 20 } },
              { "type": "sauce", "values": { "type": "mustard", "amountInGrams": 50 } },
              { "type": "sauce", "values": { "type": "barbecue", "amountInGrams": 30 } }
            ]
          }
        }
        ```
      And the object saved in the database should look like:

      ```json
        {
          "user": "Foo",
          "lastUpdated": 1663157847,
          "bread": {
            "type": "australian",
            "slices": 2
          },
          "meat": [
            { "type": "cow", "state": "well-done", "sizeInGrams": 150 },
            { "type": "pork", "state": "done", "sizeInGrams": 100 }
          ],
          "cheese": [
            { "type": "mozzarella", "slices": 2 },
            { "type": "cheddar", "amountInGrams": 50 }
          ],
          "bacon": {
            "cut": "slices",
            "amount": 2
          },
          "salad": [
            { "type": "lettuce", "amountInGrams": 10 },
            { "type": "tomato", "amountInGrams": 50 },
          ],
          "sauce": [
            { "type": "ketchup", "amountInGrams": 20 },
            { "type": "mustard", "amountInGrams": 50 },
            { "type": "barbecue", "amountInGrams": 30 }
          ]
        }
      ```

      **Note 1:** Feel free to mix up the attributes, add new ones, make some of them optional, and so on. The idea is to create as many variations as possible in the input data.
    * Once the data is saved in the database successfully, the API should return status code `200` and the following payload in the response body:

      ```json
      {
        "result": "Successfully registered favorite burger."
      }
      ```
    * If something goes wrong, the API should return status code `500` and the following payload in the response body:

      ```json
      {
        "result": "Something went wrong."
      }
      ```
3. Do NOT create child classes for each burger variation.
4. Do NOT add parameters in the constructor of the burger/ingredient classes.
5. Feel free to create as many builders/directors as you need.


[<- Go back](../../README.md)
