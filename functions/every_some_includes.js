//************************************************* some ************************************************/
 /*
    1. The some() method tests whether at least one element in the array passes the test implemented by the provided function
    2. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. 
    3. It doesn't modify the array.
 */

    const arr = [5,7,9,11,6,9];

    const res = arr.some((ele)=>{
        return ele % 2 ==0;
    })

   //  console.log(res)  // true

//****************************************** every ****************************************************/

/* 
    The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

    syntax : includes(searchElement)
             includes(searchElement, fromIndex)
 */

const names = ['rahul', 'pawan', 'ravi', 'sam', 'lyon'] ;

const result = names.includes('ravi')
// console.log(result);

/*************************************************every ************************************************************/

/* 
  1.The every() method tests whether all elements in the array pass the test implemented by the provided function. 
  2. It returns a Boolean value.
 */

const nums = [2,6,8,2,6,7];

const ans = nums.every((ele)=>{
   return ele % 2 == 0;
})

console.log(ans);
