const convertToCelsius = function (fahrenheit) {
  let cel = ((fahrenheit - 32) * 5 / 9).toFixed(1)
  return parseFloat(cel);
};

const convertToFahrenheit = function (celsius) {
  let fah = ((celsius * (9 / 5)) + 32).toFixed(1)
  return parseFloat(fah)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
