
// Q1. what is prototypal inheritance ?

// ****reference --> https://www.educative.io/blog/understanding-and-using-prototypal-inheritance-in-javascript
// https://medium.com/@venkatiyengar/proto-vs-prototype-d3c9df933f58

// 1. prototypical inheritance refers to the ability to access object properties from another object.
// 2. We use a JavaScript prototype to add new properties and methods to an existing object constructor. 
// 3. We can then essentially tell our JS code to inherit properties from a prototype. 
// 4. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through 
//    a reference pointer function.

// All JavaScript objects inherit properties and methods from a prototype:

// Date objects inherit from Date.prototype.
// Array objects inherit from Array.prototype.
// Player objects inherit from Player.prototype.

// The Object.prototype is on top of the prototype inheritance chain. ​ 
// Date objects, Array objects, and Player objects all inherit from Object.prototype.


//  __proto__ property  -->

// In Javascript, every object has its own hidden, internal property, [[Prototype]]. 
// We can access that [[Prototype]] using the __proto__ property.

// difference bw __proto__ and prototype  --> __proto__ is an object in every class instance that points to the prototype it was created from.
            //  In reality, the only true difference between prototype and __proto__ is that the former is a property of a 
            // class constructor, while the latter is a property of a class instance.

            // The __proto__ is an object within every object that points out (references) the prototype that has been set for that object. 
            // __proto__ is the actual object that is used in the lookup chain to resolve methods, etc.
// The prototype property is only present for functions and is a property that’s set only 
// if you’re using the ‘new’ keyword when creating objects with this (constructor) function.
//*****************************************************************************************************************/
let car = function(model){
    this.model = model;
}

car.prototype.getModel= function(){
    return this.model ;
}

let toyota = new car("toyota");
// console.log(toyota.getModel());

let farari = new car('farari');
// console.log(farari.getModel())

// ***************************************************************************************************************
let user = { 			//create the user object
    showAccess: true 	//create and set showAccess property of user
};
let premiumUser = {		//repeat of the above for this object
    ads: false
};
 
premiumUser.__proto__ = user;	//user is the prototype of premiumUser
 
// console.log(premiumUser.showAccess);	// "true"
// console.log(premiumUser);
// console.log(user);


// *************************************************function declaration ,  function expression, anonymous function , **************************

console.log(funcD())   //
// console.log(funcE())  // ReferenceError: Cannot access 'funcE' before initialization

function funcD(){
    console.log("function declaration");
}

let funcE = function(){
    console.log("function expression");
}

// notes : when you want to pass a function in another function you cannot pass function declaration , instead you have to pass function expression

// (function(message) {
//     console.log(message);
//   }('foo'))()

// anonymous function --> function without name are stoed in a varibale
