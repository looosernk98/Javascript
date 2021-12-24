
let personA = {
    name:"vinay",
    roll:"34"
}

let student = {
    bag:"1",
    dogs:"32"
}

student.__proto__ = personA   // link one object with another 

console.log(student.prototype)
console.log(student.__proto__)

console.log(student.name)
console.log(student.prototype==student.__proto__)

console.log(typeof null)

