/* 

  1.All JavaScript objects inherit properties and methods from a prototype.
  2.you can not add a new property to an existing object constructor

-> Date objects inherit from Date.prototype
-> Array objects inherit from Array.prototype
-> Person objects inherit from Person.prototype

The Object.prototype is on the top of the prototype inheritance chain:

Date objects, Array objects, and Person objects inherit from Object.prototype





*/

// Sometimes you want to add new properties (or methods) to all existing objects of a given type.

// Sometimes you want to add new properties (or methods) to an object constructor.

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";

// The JavaScript prototype property also allows you to add new methods to objects constructors:
Person.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};

// Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.

var str = "name";
var strobj = new Object("strt");
strobj.add = 123
console.log( typeof str);
console.log( typeof strobj, strobj.add);
