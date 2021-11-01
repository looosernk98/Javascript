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

// console.log(profile.setname ("niru ruchi"));
// console.log(window.firstname)  window is a browser onject
// console.log(this.firstname)


// *************************************************************************************************************************

// const  person  = {
//     name :"sam curran",
//     balance:1800,
//     deduct:function (amount){
//        this.balance = this.balance-amount
//        return `${this.name} has a balance of ${this.balance}`
//     }
// }

// const person  = {
//     name :"sam curran",
//     balance:1800,
//     deduct:(amount)=>{
//        this.balance = this.balance-amount    // in this this does not refer to outer scope instead it refer its own block
//        return `${this.name} has a balance of ${this.balance}`
//     }
// }

const person  = {
    name :"sam curran",
    balance:1800,
    deduct(amount){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                this.balance = this.balance-amount
                resolve(`${this.name} has a balance of ${this.balance}`)
            },2000) 
        })
        
    }
}

// console.log(person.deduct(500).then(message=>console.log(message)));
// person.deduct(500).then(message=>console.log(message))

//****************************************************************************************************************** */

const Me = {
    name : "babulal",
    hobby : "bak-bak",
    getName:function(){
        return this.name;
    },
    getHobby:()=>{
        return this.hobby
    }
}

console.log(`${Me.getName()} , ${Me.getHobby()}`)