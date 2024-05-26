//class => blueprint of an object


//class creation 

class Cars {
    constructor() {
        this.name = "BMW"
        this.model = "x7"
        this.color = "black"
    }
}
//create object

const bmw = new Cars()
console.log(bmw)

const bmw1 = new Cars()
console.log(bmw1)




class Cars1 {
    constructor(name1, model1, color1) {
        this.name1 = name1
        this.model1 = model1
        this.color1 = color1
    }
}
//create object

const rr = new Cars1("RR", "RR1", "White")
console.log(rr)

const vw = new Cars1("VW", "polo", "red")
console.log(vw)


//this => access property of an object

let firstName = "Aditya"
let lastName = "Sanap"

const user = {
    firstName: "Bala",
    lastName: "Chandra",
    greet: function () {
        // return `Say hi to ${firstName} ${lastName}`
        return `Say hi to ${this.firstName} ${this.lastName}`
    }
}

console.log(user.greet()) //Say hi to Aditya Sanap