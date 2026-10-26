let leapYear;
const leapYears = function(year) {
    if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
        leapYear = true
    }else if (year % 100 === 0 && year % 400 !== 0 ||year % 4 !== 0) {
        leapYear = false
    } 
    return leapYear
};

// Do not edit below this line
module.exports = leapYears;
