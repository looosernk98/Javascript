// 1.https://hackernoon.com/hoisting-in-javascript-532203715c5c
// https://medium.com/@e.be.walk/variable-and-function-hoisting-in-javascript-e0c8ce1d31a5
// 3.https://dmitripavlutin.com/javascript-hoisting-in-details/
// https://www.tutorialsteacher.com/javascript/javascript-hoisting
// https://www.programiz.com/javascript/hoisting
// https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript
// https://www.javascripttutorial.net/javascript-hoisting/
// https://www.geeksforgeeks.org/javascript-hoisting/
// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting



function A(){
    var a = 8;

    B()
}

A()
function B(){
    console.log(a)
}

