const fibonacci = function(num) {
    num = parseInt(num)

    if (isNaN(num) || num < 0) return "OOPS";
    if (num == 0) return 0; 

    let num1 = 0;
    let num2 = 1;

    for(let i = 2; i <= num; i++) {
        let total = num1 + num2;
        num1 = num2; 
        num2 = total;
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
