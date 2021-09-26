// https://www.telerik.com/blogs/debouncing-and-throttling-in-javascript

let counter = 1;
function getData(){
    console.log("getting data",counter++)
}

const debounce = (fn,time)=>{
  let timer;
  return function(){
   
      let context = this
    //   console.log("context", context)
      let args = arguments;
    //  console.log(context,arguments)

      clearTimeout(timer)

      timer = setTimeout(()=>{
        fn.apply(context,args);
      },time)
  }
}

const getSearchResults = debounce(getData,1000)