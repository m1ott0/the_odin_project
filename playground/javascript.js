let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupByiD(arr) {
    let userById = arr.reduce(function(acumulator, currentValue) {
        const key = currentValue.id
        acumulator[key] = currentValue
        return acumulator

    }, {})
    return userById
}
console.log(groupByiD(users))