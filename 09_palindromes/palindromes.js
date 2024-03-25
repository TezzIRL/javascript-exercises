const palindromes = function (string) {
    // regex filter
    const alpha_num = /[a-zA-Z0-9]/
    const cleaned_string = string.toLowerCase()
        .split("")
        .filter((char) => char.match(alpha_num))
        .join()

    const reversed = cleaned_string.split("")
        .reverse()
        .join("")

    return cleaned_string === reversed
};

// Do not edit below this line
module.exports = palindromes;
