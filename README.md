# Precondition

- Installed `node.js`

# Instruction on how to run the unit tests 

- Install all dependencies `npm i`

- Run unit tests `npm test`

# App structure

- `unit_test.js` - Unit tests are written in Mocha to make them more structured

- `Assertions.js` - Assertions are located in `Assertions/Assertions.js` path. They are written in pure JS and don't use outsider packages.

- `App.js` - File is located in `MyApp/App.js` path. It contains a single function, which covers all required cases.

- `TestData.js` - File which stores all necessary data for test writing, is located in `TestData` folder.

# Used packages

- [mochajs](https://mochajs.org/) - Test framework running on Node.js and in the browser

- [chalk](https://www.npmjs.com/package/chalk) - Customize the color of the output of the command-line output
