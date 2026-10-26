const convertToCelsius = function(tempFahrenheit) {
  
  const celsiusFinal = (tempFahrenheit - 32) * 5 / 9
  const rounded = Math.round(celsiusFinal * 10) / 10
  return rounded
};

const convertToFahrenheit = function(tempCelsius) {

  const fahrenheitFinal = tempCelsius * 9 / 5 + 32
  const rounded = Math.round(fahrenheitFinal * 10) / 10
  return rounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
