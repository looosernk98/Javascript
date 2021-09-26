
// references
// 1. https://www.tutorialsteacher.com/javascript/closure-in-javascript
// 2.https://www.geeksforgeeks.org/closure-in-javascript/?ref=rp
// 3.https://dmitripavlutin.com/simple-explanation-of-javascript-closures/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36
// https://www.codingame.com/playgrounds/6516/closures-in-javascript-for-beginners
// https://www.freecodecamp.org/news/lets-learn-javascript-closures-66feb44f6a44/

// ********************************** example 1 **************************************************************//
function outerfunction(...args){
    console.log(args)
    var outervariable = 8;

     function innerFunction(){
         console.log("fisrt name :",args[0], "last name :",args[1])
        console.log(outervariable);
    }

    return innerFunction
}

// let innerFunc = outerfunction("niranjan", "kumar")

// innerFunc()

// ********************************************** exmaple 2 *******************************************************//

// function Counter(){
//     var counter = 0;

//     setTimeout(() => {
//          counter+=1;

//          var innerCounter = 0;
//          console.log("counter : ",counter);

//          setTimeout(()=>{
//             counter+=1;
//             innerCounter+=1;

//             console.log("couner : ",counter, " ", "innerCouneter",innerCounter);
//          },5000)
         
//     }, 1000)
// }

// for(let i=0; i<5; i++){
//     Counter()
// }

// ***************************************** example 3 ***************************************************************//

var counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    };   
  })();
  
// //   console.log(counter)
//   console.log(counter.value()); // 0
//   counter.increment();
//   counter.increment();
//   console.log(counter.value()); // 2
//   counter.decrement();
//   console.log(counter.value()); // 


// ********************************************** example 4 ***************************************************************//

function outer(){
    let arr = [];
    // let i;

    for(var i=0; i<4; i++){
        arr[i] = function (){
            return i;
        }
    }

    return arr;
}

// let result = outer();

// console.log(result[0]());
// console.log(result[1]());
// console.log(result[2]());
// console.log(result[3]());

//*************************************************** example 5 ***********************************************************************/

function outer(){

    function createClojure(val){
        return function (){
            return val
        }
    }


    let arr = [];
    var i;

    for( i=0; i<4; i++){
        arr[i] = createClojure(i)
    }

    return arr;
}

// let result = outer();

// console.log(result[0]());
// console.log(result[1]());
// console.log(result[2]());
// console.log(result[3]());


for(var i=1; i<=5; i++){
    setTimeout(()=>{
     console.log(i);
    },i*1000)
}


