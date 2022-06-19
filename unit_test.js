const MyApp = require('./MyApp/App')
const TestData = require('./TestData/TestData')
const Assert = require('./Assertions/Assertions')

describe('Task tests', function () {
    it('Check incoming articles with long string', function () {
        Assert.assertEqual(MyApp.myFunc(TestData.actualLongStr), TestData.expectedLongStr)
    });

    it('Check incoming articles with short string', async function () {
        Assert.assertEqual(MyApp.myFunc(TestData.actualShortStr), TestData.expectedShortStr)
    });

    it('Check incoming articles with exact length string', async function () {
        Assert.assertEqual(MyApp.myFunc(TestData.actualExactLengthStr), TestData.expectedExactLengthStr)
    });

    it('Check incoming articles with empty value', async function () {
        Assert.assertEqual(MyApp.myFunc(TestData.actualEmptyStr), TestData.expectedEmptyStr)
    });

});
