
// *********************************** slice() ***************************************************//
// 1.used to cut out elements from an array
// 2.does not affect the original array.
// 3 array.slice(start, end)
    //  -> start denotes the index at which the array starts slicing.
    //  -> end denotes the index at which the array stops slicing.


    let arr = ["educative", 4, [1,3], {type: "animal"} , 8, 9];

    var res1 = arr.slice(1, 3);
    var res2 = arr.slice(2);   // returns arr containing element from index 2 in original arr
    var res3 = arr.slice(3,-1);  // removes element from end of original array
    // console.log(res1);
    // console.log(res2)
    console.log(res3,"*****************")


// **************************************** splice() *************************************************//
// 1.The splice() method adds/removes items to/from an array
// 2 returns the removed item(s).
// 3. changes the original array.
// 4. can accept n no. of arguments
// 5 . syntax   -->  array.splice(index, howmany, item1, ....., itemX)

                // index --> Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array
                // howmany --> 	Optional. The number of items to be removed. If set to 0, no items will be removed
                // item1, ..., itemX --> Optional. The new item(s) to be added to the array


var fruits = ["Banana", "Orange", "Apple", "Mango"];

// adding("lemon", "kiwi") from index 2 with 0  removal
var ans1 = fruits.splice(2, 0, "lemon", "kiwi");

// console.log(ans1);   // [] return empty arr because there is no removal 
// console.log(fruits);

// At position 2, add the new items, and remove 1 item:
var Fruits = ["Banana", "Orange", "Apple", "Mango"];
var result = Fruits.splice(2, 1, "Lemon", "Kiwi");

// console.log(result)   // [ 'Apple' ]
// console.log(Fruits)    // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango' ]

// At position 2, remove 2 items:
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
var res = fruits.splice(2, 2, );

// console.log(res);   // [ 'Apple', 'Mango' ]
// console.log(fruits);  //  [ 'Banana', 'Orange', 'Kiwi' ]

// removal from end and adding 1 item
var numbers = [1,2,3,4,5,6];
var res = numbers.splice(-2, 2, 10);
console.log(res);   // [ 'Apple', 'Mango' ]
console.log(numbers);









// ***************************************** split() **************************************************//
// 1.used to split a string into an array of substrings based on some separator like (" ", ",",".","/")
// 2. return a new array and does not modify original string

var str1 = "How are you doing today?";
var res1 = str1.split(" ");

var str2 = "How/are/you/doing/today?";
var res2 = str2.split("/");

// Using the limit parameter
var str3 = "How are you doing today?";
var res3 = str3.split(" ", 3);   // limit 3 elements
// console.log(res3);            // [ 'How', 'are', 'you' ]

