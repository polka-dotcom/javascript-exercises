const palindromes = function (arr) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890"; 
    arr = arr.toLowerCase();
    const newArr = arr.split(''); 

    const filteredArr = newArr.filter((chara) => {
        return alphanumerical.includes(chara); 
    });

    const JfilteredArr = filteredArr.join(''); 

    const reversedArr = JfilteredArr.split('').reverse().join(''); 

    return reversedArr === JfilteredArr; 
};

// Do not edit below this line
module.exports = palindromes;
