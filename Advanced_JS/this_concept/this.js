
// this inside golabl scope
// 'use strict'
this.table = "window table";

// const cleanTable = function (soap){
//     console.log(`cleaning ${this.table} using ${soap}`)
// }

// cleanTable() // will give error(in strict mode) and undefined (in non-strict mode)
// cleanTable.call(this,"some soap")
// cleanTable.call(this.garage,"some soap")
// cleanTable.call(johnstable,"some soap")

//this inside a function

this.garage={
    table:"garage table",
    cleanTable(){
        console.log(`cleaning ${this.table}`)
    }
}

/// this inside object 
// this inside object method

let johnstable ={
  table :"johns table",
  cleanTable(){
      console.log(`cleaning ${this.table}`)
  }
}

// console.log(this.johnstable.table) // wrong , table is not in global scope, will give error that table is not defined

// console.log(johnstable.table)   //right

// johnstable.cleanTable();
// this.garage.cleanTable();'

// cleanTable.call(this,"some soap")
// cleanTable.call(this.garage,"some soap")
// cleanTable.call(johnstable,"some soap")



// **********************************************************************

// this inside inner function

// const cleanTable = function (soap){
//     let that = this
//     function innerFunction(){
//         console.log(`cleaning ${that.table} using ${soap}`)
//     }

//     innerFunction(that,soap)
// }

// cleanTable.call(this,"some soap")
// cleanTable.call(this.garage,"some soap")
// cleanTable.call(johnstable,"some soap")


// **************************************************************************************

// const cleanTable = function (soap){
    
//     function innerFunction(){
//         console.log(`cleaning ${this.table} using ${soap}`)
//     }

//     innerFunction.call(this,soap) // bind  -> innerFunction.bind(this)(soap)
// }

// cleanTable.call(this,"some soap")
// cleanTable.call(this.garage,"some soap")
// cleanTable.call(johnstable,"some soap")

// **************************************************************************************

const cleanTable = function (soap){
    
    const innerFunction=()=>{
        console.log(`cleaning ${this.table} using ${soap}`)
    }

    innerFunction.call(this,soap)
}

cleanTable.call(this,"some soap")
cleanTable.call(this.garage,"some soap")
cleanTable.call(johnstable,"some soap")


//******************************************************************* */

// this in constructor


