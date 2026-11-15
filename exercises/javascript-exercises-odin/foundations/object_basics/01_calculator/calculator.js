const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	const sum = arr.reduce(function(acumulator, currentValue) {
    return acumulator + currentValue
  }, 0)
  return sum
};

const multiply = function(arr) {
	const multiply = arr.reduce(function(acumulator, currentValue) {
    return acumulator * currentValue
  }, 1)
  return multiply
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
    let acumulator = a
  if (a !== 0) {
	for (i = a - 1;i > 0; i--) {
     acumulator = acumulator * i 
  }
} else {
  acumulator = 1
}
  return acumulator
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
