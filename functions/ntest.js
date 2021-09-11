function ArrayChallenge(arr) { 

    var sandwiches = arr[0];
    var narr = arr.slice(1);
     
     while(sandwiches>0){
       sandwiches = distribute(narr, sandwiches)
     }
    
       var sum = 0;
       for(let i=0; i<narr.length; i++){
         sum += Math.abs(narr[i+1]-narr[i]);
       }
       console.log(sum);
       return sum;
    }
    
    function distribute(narr, sandwiches){
      let sum = narr.reduce((a,b)=>{
        return a+b;
      })
    
    
      let mean = sum / narr.length;
      let first = sandwiches;
    
      for(let i=0; i<narr.length; i++){
        let x = narr[i];
    
        if(x<mean){
          let rem = Math.min(sandwiches, x -mean)
          narr[i] -= rem;
          sandwiches += rem;
          if(sandwiches===0) break;
        }
      }
    
      if(first==sandwiches) return 0;
    
      return sandwiches;
    }
       
    // keep this function call here 
    console.log(ArrayChallenge([3, 2, 1, 0, 4, 1, 0]));

// function StringChallenge(str1,str2) {
  
//   for(let i=0; i<str2.length; i++){
//     let ch1 = str2.charAt(i);
//      var foundch1 = false;
//      for(let j=0; j<str1.length; j++){
//            let ch2 = str1.charAt(j);
//         if(ch1==ch2){
//            str1 = str1.slice(0,j)+str1.slice(j+1);
//            console.log(str1);
//            foundch1=true;
//         }
//      }

//      if(foundch1==false) return "false";
//   }
  
//   return "true"; 

// }
   
// // keep this function call here 
// console.log(StringChallenge("cdore","coder"));

// function StringChallenge(str) { 
//   var ans ="";
//    for(let i=0; i<str.length; i++){
//      var ch = str.charAt(i);
     
//      if(ch>='a' && ch<='z'){
//         ans +=  ch.charCodeAt(0)-('a').charCodeAt(0)+1
//      }else if(ch>='A' && ch<='Z'){
//         ans +=  ch.charCodeAt(0)-('A').charCodeAt(0)+1
//      }else{
//         ans += ch;
//      }
//    }
//    return ans; 
 
//  }
    
//  // keep this function call here 
//  console.log(StringChallenge(readline()));

const foodDistribution = (input) => {
  const numberOfSandwiches = input[0];
  const hungerLevels = input.splice(1);

  const optimizedHungerLevels = optimizeHungerLevels(
    numberOfSandwiches,
    hungerLevels
  );

  return sumOfHungerDifferences(optimizedHungerLevels);
};

const optimizeHungerLevels = (numberOfSandwiches, hungerLevels) => {
  if (numberOfSandwiches === 0 || sumOfHungerDifferences(hungerLevels) === 0)
    return hungerLevels;

  const optimizedHungerLevelStep = optimizeHungerLevelsStep(
    hungerLevels,
    indexOfMaxDifference(calculateHungerDifferences(hungerLevels))
  );

  return optimizeHungerLevels(--numberOfSandwiches, optimizedHungerLevelStep);
};

const indexOfMaxDifference = (hungerDifferences) =>
  hungerDifferences.indexOf(Math.max(...hungerDifferences));

// const sumOfHungerDifferences = (hungerLevels) =>
//   calculateHungerDifferences(hungerLevels).reduce(
//     (sum, current) => sum + current,
//     0
//   );

// const calculateHungerDifferences = (hungerLevels) =>
//   hungerLevels.map((hungerLevel, hungerLevelIndex) =>
//     hungerLevelIndex < hungerLevels.length - 1
//       ? Math.abs(hungerLevel - hungerLevels[hungerLevelIndex + 1])
//       : 0
//   );

const optimizeHungerLevelsStep = (hungerLevels, indexOfMaxDifference) => {
  const newHungerLevels = [...hungerLevels];
  const indexToBeOptimized =
    hungerLevels[indexOfMaxDifference] > hungerLevels[indexOfMaxDifference + 1]
      ? indexOfMaxDifference
      : indexOfMaxDifference + 1;

  newHungerLevels[indexToBeOptimized] = --newHungerLevels[indexToBeOptimized];

  return newHungerLevels;
};

console.log(foodDistribution([3, 2, 1, 0, 4, 1, 0]))



// function SeatingStudents(arr) {   
  
//   if(arr.length <1) return -1;
  
//   //Number of valid pairs
//   var count=0;
  
//   //Number of students; first number in the array
//   var n=arr[0];
  
//   //Now remove the first number from the array so we only have
//   arr.splice(0,1);
  
//   //For each seat
//   for(var i=1; i<n; i++){
      
//       //Skip seats that are already assigned
//       if(arr.includes(i)) continue;
      
//       //If i is even (it's on the right side)
//       if(0 === i%2){
          
//           //Check the seat below; if it's free, that's a valid pair
//           if( (i+2)<=n && !arr.includes(i+2)) count++;
      
//           //Otherwise, it's odd and on the left side
//       } else {
          
//           //Check the seat to the right; if it's free, that's a valid pair
//           if( (i+1)<=n && !arr.includes(i+1)) count++;
          
//           //Check the seat below; if it's free, that's a valid pair
//           if( (i+2)<=n && !arr.includes(i+2)) count++;

//       }
//   }
  
//   //Return the number of results found
//   return count; 
       
// }
 
 
// keep this function call here 
// console.log(SeatingStudents(readline()));
console.log(SeatingStudents([12, 2, 6, 7, 11]));