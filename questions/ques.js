// const profile ={
//     firstname : "raju",
//     lastname : "",
//     setname : function(str){
//         let namearr = str.split(" ")
//         // this.firstname = namearr[0];
//         // this.lastname = namearr[1];
//     //    console.log(window.firstname)
//         return this.firstname;
//     }
// }
// console.log(window.firstname)




const profile ={
    firstname : "raju",
    lastname : "",
    setname : function(name){
        let splitName = function(name){
            let namearr = name.split(" ")
            this.firstname = namearr[0];
            this.lastname = namearr[1];
            console.log(firstname)
        }
        console.log(this.firstname)
        splitName(name);
    }
}

console.log(profile.setname ("niru ruchi"));
// console.log(window.firstname)  window is a browser onject
// console.log(this.firstname)