// import { printDetails4, msg } from "./fun.js" //named import
import printDetails4 from "./fun.js"//default import
import { msg } from "./fun.js"

const student = {
    studentName: "Deepika",
    batch: "FSD56WE",
    score: 90,
};


console.log(printDetails4(student));
console.log(msg)