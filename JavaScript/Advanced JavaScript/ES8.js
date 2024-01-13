/* 
ES8 was released in 2017.
*/

// Object.values and object.keys

const obj1 = {name:"Roy", state:"Detroit"};
Object.values(obj1).forEach(name=>{
    console.log(name);
})

const users = {
    user1: "Paul",
    user2: "Ken",
    user3: "Femi",
    user4: "Bola",
    user5: "Grinch"
}

let availableNames;
availableNames = Object.values(users);
console.log(availableNames);

console.log(Object.entries(users));
console.log(Object.keys(users));


// the code below return names concatanated with the entry at index 0. But the entry at index 0 is user1, to user5
// we then replace the "user" part as empty string leaving only the number.
let userName = Object.entries(users).map(value=>{
    return value[1] + value[0].replace('user', '');
})

console.log(userName);