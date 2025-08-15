const fibonacci = function(nb) {
    if (nb < 0){
        return "OOPS"
    }

    if (nb == 0){
        return 0;
    }
    if (nb == 1){
        return 1;
    }
    return fibonacci(nb-1) + fibonacci(nb-2);

};

// Do not edit below this line
module.exports = fibonacci;
