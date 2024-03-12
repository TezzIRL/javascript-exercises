const reverseString = function (str) {
    if (str.length < 1) {
        return ""
    }
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
