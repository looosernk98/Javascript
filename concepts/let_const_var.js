// console.log(a);
// var a;
// console.log(a);
// a = 10;
// console.log(a);


// console.log(a);
// let a;
// console.log(a);
// a = 10;
// console.log(a);

// console.log("varName",varName);
// var varName;
// console.log("varName",varName);
// varName = "captain America";
// console.log("varName",varName);
// Fn();
// function Fn(){
//     console.log("hello from fn");
// }

// Fn();

// console.log(fnCont)
// // fnCont();
// var fnCont = function(){
//     console.log("hello from fnContainer");
// }

// fnCont();


// ************************************************  example *******************************************************

// Whenever you are declaring variables, always use the prefix let. If you don’t use the let keyword, then the variables are by default created in the global scope.

// let a = 9;
function outer(){
   var a = 4;
   function inner(){
       b=90
   }

   inner()

   console.log(a);
}
outer()
console.log(b);

// ********************************************************************************************
// JavaScript allows multiple white spaces and line breaks when you declare a variable with var keyword.
//Function parameters are considered as local variables.

var
             one
         =

         1,
            two
            =
            "two"


// ***************************************************************************************
// only for var --> JavaScript does not allow block level scope inside { }. For example, variables defined in if block can be accessed outside if block, inside a function.
function abc(){
    let a= 2;
    if(a==2){
        var b = 7;   // in case let b = 7 , gives reference error not defined
    }

    console.log(b)
}

abc()