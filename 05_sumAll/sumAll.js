const sumAll = function (num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR'
    }
    else if (num1 < 0 || num2 < 0) {
        return 'ERROR'
    }

    let largestNumber = num1 > num2 ? num1 : num2
    let smallestNumber = num1 < num2 ? num1 : num2
    let answer = 0;
    while (smallestNumber <= largestNumber) {
        answer += smallestNumber
        smallestNumber++
    }
    return answer
};

// Do not edit below this line
module.exports = sumAll;
