// scope => lifetime of a variable
// let, const  => block scope
// var  => global scope        
// {}  => block

{
    let y1 = 10;
    var y2 = 20
}

// console.log(y1)

//not defined(error)  vs undefined (value)

//can a block hold y2 or will it leak outside?  => 

// var price = 1000

// function getPrice() {
//     console.log("The old price is", price)
//     var price = 500;
//     console.log("The new price is", price)
// }

// getPrice()

//hoisting + lexical scope

//lexical scope

//grandFather  => 💰    => 🏠(Own scope)

// Father => 💰  +  💰 => 🚗(Own scope) + 🏠(lexical scope)

// Child => 💰  +  💰 + 💰   =>  💻(Own scope)  +🚗(Lexical scope=> Father) + 🏠(Father lexical scope => grandFather)


//Closure => own scope + lexical scope

function outer() {
    var a = 20
    function inner() {
        console.log(a)
    }
    return inner
}
console.log(outer())
// ƒ inner() {
//     console.log(a)
// }

// var close = outer()
// close()
outer()()


//Hoisting

// console.log(z)
// var z = 50
// console.log(z)

//Does in JS compilation happens? Yes

// JS  => JIT => Just In Time Compilation
// 1. Compilation Phase  => console => skip
// 2. Execution Phase  => JS & Context

//Example - 1  => var
// 1. Compilation Phase
// console.log(z) // Skip
// var z = 50 // JS => Do you know z? No || what is the value? => context => z = undefined
// console.log(z) //Skip

// 2. Execution Phase 
console.log(z) //  JS => Do you know z? Yes || what is the value? => context => z = undefined
var z = 50 //  JS => Do you know z? Yes || what is the value? => context => z = 50
console.log(z) //  JS => Do you know z? Yes || what is the value? => context => 50



//Example - 2  => let
// 1. Compilation Phase
// console.log(x) // Skip
// let x = 50 // JS => Do you know x? No || what is the value? => context => x = don't initialize
// console.log(x) //Skip

// 2. Execution Phase
// console.log(x) //  JS => Do you know x? Yes || what is the value? => context => x = Uncaught ReferenceError: Cannot access 'x' before initialization
// let x = 50
// console.log(x)


//shadowing
var price1 = 1000 //Pant

function getPrice() {
    console.log("The old price is", price)
    var price = 500; //MSD
    console.log("The new price is", price1)
}

getPrice()



//lexical scope in callback

function outerFunc() {
    const outerVar = "I am a outer func"

    function callbackFunc() {
        console.log(outerVar)
    }
    //pass callback to another func
    anotherFunc(callbackFunc)

}

//callback func
function anotherFunc(callback) {
    callback()
}



outerFunc()