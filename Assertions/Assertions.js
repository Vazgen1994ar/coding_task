const chalk = require('chalk');

class Assert {
    assertEqual (actual, expected) {
        if (actual!== expected) {
            console.log("Actual-     " + chalk.blue(actual))
            console.log("Expected-   " + chalk.green(expected))
            throw new Error("Values are not equal")

        }
    }
}

module.exports = new Assert()
