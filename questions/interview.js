// console.log("line no 1",varName);
// let varName = 10;

// function b(){
//     console.log("line no 5",varName);
// }
// console.log("line no 7", varName);
// function fn(){
//   console.log("line no 9",varName);
// //   var varName =20;

//   b();
//   console.log("line no 13",varName);
// }

// fn();

 //******************************8 */
// let letFruit = "orange";
// let varFruit = "orange";

// console.log("letFruit",letFruit,"varFruit",varFruit);

// {
//     let letFruit = "Apple";
//     let varFruit = "Apple";

//     console.log("letFruit",letFruit,"varFruit",varFruit);
// }
// console.log("letFruit",letFruit,"varFruit",varFruit);

//*************************************************** */

let name ="niru"
console.log(name);
function a(){

    function b(){
         name ="veeru";
        console.log(name)
    }
    b()
}

console.log(name)
a();
console.log(name)


//*************************************************** */

function StringChallenge(str){
    let ans ="";
    let flag = false;
    for(let i=0; i<str.length; i++){
      let ch = str.charAt(i)+""; 
      if((ch>='A' && ch<='Z') || (ch>='a' && ch<='z')){
        ans += (i==0) ? ch.toLowerCase() : (flag ? ch.toUpperCase() : ch.toLowerCase());
        flag = false;
      }else{
        flag = true;
      }
    }
  return ans;
}

// console.log(StringChallenge("cats AND*Dogs-are Awesome"))