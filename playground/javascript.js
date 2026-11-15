const usuarios = [
    {name : "Felipe", age: 15},
    {name: "Roberto", age: 43},
    {name: "Robson", age: 32},
    {name: "Marcelo", age: 57}
]
const testEvery = usuarios.every(u => u.age > 18)
const testeSome = usuarios.some(u => u.age > 50)
const testeFind = usuarios.find(u => u.age === 32)
const testeFindIndex = usuarios.findIndex(u => u.age < 22)
console.log(testeSome)
console.log(testEvery)
console.log(testeFind)
console.log(testeFindIndex)