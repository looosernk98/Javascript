
// function StringChallenge(str){
//     let ans ="";
//     let flag = false;
//     for(let i=0; i<str.length; i++){
//       let ch = str.charAt(i)+""; 
//       if((ch>='A' && ch<='Z') || (ch>='a' && ch<='z')){
//         ans += (i==0) ? ch.toLowerCase() : (flag ? ch.toUpperCase() : ch.toLowerCase());
//         flag = false;
//       }else{
//         flag = true;
//       }
//     }
//   return ans;
// }

// console.log(StringChallenge("cats AND*Dogs-are Awesome"))

function ArrayChallenge(arr){
  
    let min = arr[0];
    let maxProfit = 0;

    for(let i=1; i<arr.length; i++){
      min = Math.min(min, arr[i]);

      if(arr[i]-min > maxProfit){
          maxProfit = arr[i]-min;
      }
    }

    return maxProfit == 0 ? -1 : maxProfit
}

console.log(ArrayChallenge([10,9]))