
// ***************************** map() ******************************************************//

// 1.return a new array based on the result of the function provided inside it
// 2. does not change the original array
 

let arr1 = [1,2,3,4,5];

let narr1 = arr1.map((element,index)=>{
    return element*2;
})


// console.log(narr1);
// console.log(arr1);

// ************************************* filter() function *************************************************//
// 1. It filters the elements of the array that return false for the applied condition and returns the array 
//     which contains elements that satisfy the applied condition
// 2. returns new array and does not modify the original array

let arr2 = [1,2,3,4,5,6,7,8];

let narr2 = arr2.filter((ele)=>{
    return ele % 2 == 0 
})

// console.log(narr2)
// console.log(arr2)


//********************************* reduce()  ********************************************************//

// 1. It reduces all the elements of the array to a single value by repeatedly applying a function
// 2. return a single and does not modify original array

let numbers = [1,2,3,4,5];

let product = numbers.reduce((a,b)=>{      // Ist iteration -->  a-> initial value (1)  b-> current value(2)  
    return a*b;
})

// console.log(product);
// console.log(numbers);

let sum = numbers.reduce(function(a,b){   // Ist iteration -->  a-> initial value (5)  b-> current value(1)  
            return a+b;
          }, 5 );                  // here 5 is initial value

console.log(sum);         