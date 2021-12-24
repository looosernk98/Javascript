


let A = {
    name:"abcd",
    roll:23,
    AB:{
        place:"delhi"
    }
}

let B = {...A};

B.AB.place="Mumbai"


console.log(A);
console.log(B)