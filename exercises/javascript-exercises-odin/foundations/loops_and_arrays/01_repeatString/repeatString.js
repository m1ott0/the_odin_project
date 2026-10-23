
function repeatString(str, num) {
let initialValue = ""
    for (let i = 0; i < num; i++) {
       if (num > 0){
            initialValue += str
    } else if (num <= 0){
            initialValue = initialValue
    }
    }
    if (num >= 0) {
        return initialValue
    } else {
        return "ERROR"
    }
};
repeatString("hey", 3)
// Do not edit below this line
module.exports = repeatString;