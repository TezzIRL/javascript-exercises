const fibonacci = function (n) {
    let sequence = [0, 1];

    const nth = parseInt(n)
    if (nth < 0) return "OOPS"
    if (nth === 0) return 0;

    for (let index = 2; index <= nth; index++) {
        let value = sequence[index - 1] + sequence[index - 2]
        sequence.push(value)
    }
    return sequence.pop()
};

// Do not edit below this line
module.exports = fibonacci;
