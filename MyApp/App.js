class MyApp {
    myFunc(yourTitle) {
        if (yourTitle.length === 0) {
            return ""
        } else if(yourTitle.length <= 25) {
            return yourTitle
        }

        let yourString = yourTitle
        const maxLength = 25

        // JS substr() function substitution created with low level code
        let subString = function (yourString, maxLength) {
            let new1 = []
            let i = 0
            while (i < maxLength) {
                new1.push(yourString[i])
                i++
            }
            return new1.join("")
        }

        // JS Math.Min() function substitution created with low level code
        let mathMin = function (arrayOfValues) {
            let minVal = arrayOfValues[0]
            arrayOfValues.forEach(nthValue => {
                if (nthValue < minVal) {
                    minVal = nthValue
                }
            })
            return minVal
        }

        // JS lastIndexOf() function substitution created with low level code
        let lastIndexOf = function (yourString, yourSubString) {
            for (let i = yourString.length; i > 0; i--) {
                if (yourString[i] === yourSubString) {
                    return i
                }
            }
        }

        let trimmedString = subString(yourString, maxLength)
        trimmedString = subString(trimmedString, mathMin([trimmedString.length, lastIndexOf(trimmedString, " ")]))
        return trimmedString+"..."
    }
}

module.exports = new MyApp()
