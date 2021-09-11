function StringChallenge(str1,str2) { 

    let arr1 = str1.split("");
    let arr2 = str2.split("");
  
   let flag = true; 
    for(let i=0; i<arr2.length; i++){
       let char = arr2[i]
       var res = removeElement(arr1, char);
       if(res===false) return false;
    }
  
    if(arr1.length!==0) return false;
    else return true;
  
  }
  
  function removeElement(arr, ele){
    var idx = arr.indexOf(ele);
  
    if(idx > -1){
      arr.splice(idx, 1)
      return true
    }else return false;
   
  }
  
     
  // keep this function call here 
  console.log(StringChallenge("olleh", "hello"));


//   ID	Name	DivisionID	ManagerID	Salary
// 356	Daniel Smith	100	133	40000
// 122	Arnold Sully	101	null	60000
// 467	Lisa Roberts	100	null	80000
// 112	Mary Dial	105	467	65000
// 775	Dennis Front	103	null	90000
// 111	Larry Weis	104	35534	75000
// 222	Mark Red	102	133	86000
// 577	Robert Night	105	12353	76000
// 133	Susan Wall	105	577	110000