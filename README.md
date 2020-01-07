# Request-Promise-Mockery-Example

Source code for the repl.it project here: https://repl.it/@JimLynch/Request-Promise-Mockery-Example

Currently, the test is failing because we want the required `request-promise` module to return `{ "foo": "bar" }` (mocked with [mockery](https://github.com/mfncooper/mockery), but instead it is still using the real implementation and making an actual request...
