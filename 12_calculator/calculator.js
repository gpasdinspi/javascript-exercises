const add = function(nb1, nb2) {
  return nb1+nb2;
	
};

const subtract = function(nb1, nb2) {
  return nb1-nb2;
	
};

const sum = function(arr) {
	return arr.reduce((sum, nb) => sum += nb, 0);
};

const multiply = function(arr) {
  return arr.reduce((sum, nb) => sum *= nb, 1);
};

const power = function(nb1, nb2) {
	return nb1**nb2;
};

const factorial = function(nb1) {
  if (nb1 < 0){
    console.log("number must be positive !")
  }
  if (nb1 == 0){
    return 1;
  }else{
    return factorial(nb1-1)*nb1;
  }
	
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
