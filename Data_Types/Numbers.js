let billion1 = 1000000000;

// JavaScript engine simply ignores _ between digits
// let billion2 = 1_000_000_000; // syntactic sugar (more concise,readable)

// console.log(billion1===billion2)
// console.log(1000===10_00)


console.log( 7.3e9);  // 7.3 billions (same as 7300000000 or 7_300_000_000)

let ms = 0.000001;

// let ms = 1e-6; // six zeroes to the left from 1

//****************************  HexaDecimal (0x) **************************************************

console.log( 0xff ); // 255
console.log( 0xFF ); // 255 (the same, case doesn't matter)

/* toString(base) function ==> The method num.toString(base) returns a string representation of num in the numeral system with the given base.
                           ==>The base can vary from 2 to 36. By default it’s 10.
                           1.base=16 is used for hex colors, character encodings etc, digits can be 0..9 or A..F.
                           2.base=2 is mostly for debugging bitwise operations, digits can be 0 or 1.
                           3.useful case for 36 is when we need to turn a long numeric identifier into something shorter, for example to make a short url.

                           */
let num = 255;

console.log( num.toString(16) );  // ff
console.log( num.toString(2) );   // 11111111

console.log( 123456..toString(36) ); // 2n9c