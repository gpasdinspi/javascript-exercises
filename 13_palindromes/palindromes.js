const palindromes = function (string) {

    let lower = string.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reverse = lower.split('').reverse().join('')

    if (reverse == lower){
        return true
    }else{
        return false;
    }



};

// Do not edit below this line
module.exports = palindromes;
