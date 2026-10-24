const removeFromArray = function(array, ...num) {
    let newArray = [];
    const numArray = num;
    for (let i = 0; i < array.length; i++) {
        if (numArray.includes(array[i]) === false) {
            newArray.push(array[i]);
        }
    }
    return newArray;
    
};


// Do not edit below this line
module.exports = removeFromArray;
