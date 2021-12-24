// https://www.telerik.com/blogs/debouncing-and-throttling-in-javascript

// Debouncing is used for performance optimization by limiting the rate of excecution of particular function or api
//Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.

let counter = 1;
function getData(){
    console.log("getting data",counter++)
}

const debounce = (fn,time)=>{
  let timer;
  return function(){
   
      let context = this
      console.log("context", context)
      let args = arguments;
     console.log(context,arguments)

      clearTimeout(timer)

      timer = setTimeout(()=>{
        fn.apply(context,args);
      },time)
  }
}

const getSearchResults = debounce(getData,1000)