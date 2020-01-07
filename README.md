# Request-Promise-Mockery-Example

Source code for the repl.it project here: https://repl.it/@JimLynch/Request-Promise-Mockery-Example

This project demonstrates specifically how to test a function that loads the [request-promise](https://github.com/request/request-promise) library by using [mockery](https://github.com/mfncooper/mockery) to have the function under test use a mocked response rather than requiring the library and using the real implementation.

More generally, it shows how to use mockery to mock objects and functions that are require'd in other files.
