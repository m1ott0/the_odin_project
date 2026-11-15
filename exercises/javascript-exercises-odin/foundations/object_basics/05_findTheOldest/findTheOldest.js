const findTheOldest = function(persons) {
    let result;
    const oldestOne = persons.reduce(function(acumulator, currentValue) {
        let birthDate;
        if (currentValue.yearOfBirth !== undefined && currentValue.yearOfDeath !== undefined) {
            birthDate = currentValue.yearOfDeath - currentValue.yearOfBirth
            if (acumulator < birthDate) {
                acumulator = birthDate
            } 
        } else if (currentValue.yearOfBirth !== undefined && currentValue.yearOfDeath === undefined) {
            birthDate = 2026 - currentValue.yearOfBirth
            if (acumulator < birthDate) {
                acumulator = birthDate
            } 
        }
        return acumulator
    }, 0)
    const filteredOld = persons.filter(function(person) {
        let personBirthDate
        if (person.yearOfBirth !== undefined && person.yearOfDeath !== undefined) {
        personBirthDate = person.yearOfDeath - person.yearOfBirth
        if (personBirthDate === oldestOne){
        return person.name
}
        } else if (person.yearOfBirth !== undefined && person.yearOfDeath === undefined) {
        personBirthDate = 2026 - person.yearOfBirth
        if (personBirthDate === oldestOne){
        return person.name
}
        }
    })
    result = filteredOld[0]
    return result
};

// Do not edit below this line
module.exports = findTheOldest;
