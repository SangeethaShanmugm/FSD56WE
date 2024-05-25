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