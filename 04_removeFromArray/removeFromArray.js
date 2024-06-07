const removeFromArray = function(arr, ...val) {
    const newArr = [];
    arr.forEach(item => {
        if (!val.includes(item)) {
            newArr.push(item);
        }
    });
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
