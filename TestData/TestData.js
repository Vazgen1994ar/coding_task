class TestDate{
    actualLongStr = "Volvo released a new car with the following spec: V6 236HP. It will cost $22647 and going to be sold in New York only"
    expectedLongStr = "Volvo released a new car..."
    actualEmptyStr = ""
    expectedEmptyStr = ""
    actualShortStr = "Volvo released"
    expectedShortStr = "Volvo released"
    actualExactLengthStr = "Volvo released a new carr" //25 length
    expectedExactLengthStr = "Volvo released a new carr"
}

module.exports = new TestDate()
