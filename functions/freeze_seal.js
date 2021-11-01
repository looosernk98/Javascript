let profile={
    name:"Niranjan"

}

Object.freeze(profile) // freeze cant let us either add new property or update in given property

profile.age = 23
profile.name="niru"

console.log(profile)

//***********************************************************************************/

Object.seal(profile)  // seal let us update value of the given property but we can't add new property

profile.age = 23
profile.name="niru"

console.log(profile)

//************************************************************************/

// what if i want to user is able to update name but not age

let myProfile ={
    name : "niranjan",
}

Object.defineProperties(myProfile,'age',{
    value:24,
    writable:false
})

promyProfilefile.age = 23
myProfile.name="niru"

console.log(myProfile)

