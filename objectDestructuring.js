const farm = {
    animalName: "🐄",
    type: "Domestic animal",
    amount: "2L",
};

console.log(farm);

const {
    animalName,
    type,
    count = 500,
    country = ["India", "Africa"],
} = {
    animalName: "🐄",
    type: "Domestic animal",
    amount: "2L",
};

console.log(animalName, count, country);
// "🐄", 500, ["India", "Africa"]

const avenger = {
    name: "Tony Stark",
    house: "🏠",
    networth: "💰💰💰💰💰💰",
    power: "🤖",
    phrase: "Happy Day",
};

console.log(avenger);

const {
    name,
    networth,
    power = "💿",
    skill = ["genius", "billionarie", "philanthropist"]
} = {
    name: "Tony Stark",
    house: "🏠",
    networth: "💰💰💰💰💰💰",
    power: "🤖",
    phrase: "Happy Day",
};


console.log(name, power, skill)
//"Tony Stark" ,"🤖", ["genius", "billionarie", "philanthropist"]



const avg = {
    name: "Tony Stark",
    house: "🏠",
    networth: "💰💰💰💰💰💰",
    power: "🤖",
    phrase: "Happy Day",
};

const avg1 = { ...avg, nation: "US", power: "💿" }

console.log(avg)
// {
//     name: "Tony Stark",
//     house: "🏠",
//     networth: "💰💰💰💰💰💰",
//     power: "🤖",
//     phrase: "Happy Day",
// };
console.log(avg1)
//{
//     name: "Tony Stark",
//     house: "🏠",
//     networth: "💰💰💰💰💰💰",
//     power: "💿",
//     phrase: "Happy Day",
//     nation: "US"
// };


const avg2 = { nation: "US", power: "💿", ...avg, }
// {
//     nation: "US",    
//     name: "Tony Stark",
//     house: "🏠",
//     networth: "💰💰💰💰💰💰",
//     power: "🤖",
//     phrase: "Happy Day",
// }

//creating object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
}

// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)


// const { firstName, lastName, age } = person

// console.log(firstName)
// console.log(lastName)
// console.log(age)

//rename var during destructing 

const { firstName: userName, age: personAge } = person

console.log(userName, personAge)

//nested destruct

const person1 = {
    name1: "John",
    age1: 20,
    address: {
        city: "India",
        zipcode: "100001"
    },
    hobbies: ["reading", "coding", "travelling"]
}

//city, reading, travelling

const { name1, age1, address: { city, zipcode }, hobbies: [reading, coding, travelling] } = person1

console.log(person1.address.city)
console.log(person1.hobbies[1])

console.log(city)
console.log(coding)

//object shorthand  => key and value should be same

const studentName = "Abhishek"
const batch = "FSD56WE"
const mark = 90

const student1 = {
    studentName,
    batch,
    age: 20,
    score: mark,
}

console.log(student1)