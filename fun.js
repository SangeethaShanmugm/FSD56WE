const printDetails4 = ({ studentName, score, batch }) =>
    `${studentName} has got ${score} and she belong to ${batch} batch`;


const msg = "Happy Day😀"

export default printDetails4;//default export
export { msg };

// export  { printDetails4, msg } //named export

//export & import

// 1. named export & import  => preferred
// 2. default export & import


// JS file type
// commonJS - ES5
// module  - ES6