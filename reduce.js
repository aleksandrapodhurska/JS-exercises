// 1) Turn an array of numbers into a total of all the numbers
// 2) Turn an array of numbers into a long string of all those numbers.
// 3) Turn an array of voter objects into a count of how many people voted
// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
// 5) Given an array of arrays, flatten them into a single array
// 6) Given an array of potential voters, return an object representing the results of the vote

// 1) Turn an array of numbers into a total of all the numbers

function total(arr) {
    return arr.reduce((a, b) => a + b);
}

console.log(total([1,2,3])); 

// 2) Turn an array of numbers into a long string of all those numbers.

function stringConcat(arr) {
    return arr.reduce((a, b) => a.toString() + b);
}

console.log(stringConcat([1,2,3])); // "123"

// 3) Turn an array of voter objects into a count of how many people voted

// Solution with .map()
// function totalVotes(arr) {
//     let n = 0;
//     arr.map(item => item.voted ? n += 1 : n += 0)
//     return n;
// }

function totalVotes(arr) {
    return arr.reduce((a, b) => {
        return b.voted ? a += 1 : a += 0;
    }, 0)
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

function shoppingSpree(arr) {
    return arr.reduce((a, b) => a + b.price, 0)
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

// 5) Given an array of arrays, flatten them into a single array

function flatten(arr) {
    // return arr.reduce((a, b) => a.concat(b));
    return arr.reduce((a, b) => [...a, ...b]);
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// 6) Given an array of potential voters, return an object representing the results of the vote

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    const countVotes = (arr, min, max) => {
        let numVotes = arr.reduce((acc, voted) => {
            return (voted.age >= min && voted.age <= max && voted.voted) ? acc += 1 : acc += 0;
        }, 0)
        return numVotes;    
    }

    const countPeople = (arr, min, max) => {
        let numPeople = arr.reduce((acc, man) => {
            return man.age >= min && man.age <= max ? acc += 1 : acc += 0;
        }, 0)
        return numPeople;
    }

    const result = {
        numYoungVotes: countVotes(arr, 18, 25),
        numYoungPeople: countPeople(arr, 18, 25),
        numMidVotesPeople: countVotes(arr, 26, 35),
        numMidsPeople: countPeople(arr, 26, 35),
        numOldVotesPeople: countVotes(arr, 36, 55),
        numOldsPeople: countPeople(arr, 36, 55),
    }
    return result;
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
numYoungPeople: 4,
numMidVotesPeople: 3,
numMidsPeople: 4,
numOldVotesPeople: 3,
numOldsPeople: 4 
}
*/