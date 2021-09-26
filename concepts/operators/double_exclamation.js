// https://brianflove.com/2014-09-02/whats-the-double-exclamation-mark-for-in-javascript/

// The following values are considered by JavaScript to be falseys:

// 1.Empty string: ""
// 2. 0
// 3. null
// 4. undefined
// 5. NaN


// The following values are considered by JavaScript to be truthys:

// 1. Object: {}
// 2. Array: []
// 3. Not empty string: "anything"
// 4. Number other than zero: 3.14
// 5. Date: new Date();

function check() {
    var name = null;
  
    //alert 'string'
    console.log(typeof name);
  
    //cast to boolean
    var bool = !!name;
  
    //alert 'boolean'
    console.log(typeof bool, bool);
  }

  check()