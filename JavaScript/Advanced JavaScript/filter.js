const array = [1, 2, 10, 16];
const filterArray = array.filter(num => {
    return num > 5;
})

console.log(filterArray);

// const nameList = ["ben", "ken", "sally", "sarah"];
// const checkName = nameList.filter(name => {
//     var nameLength = name.length;
//     for(var i=0; i < nameLength+1; i++){
//         if(prompt() == name[i]){
//             return name;
//         }
//     }
    
// })

// console.log(nameList);

let name = rl.prompt("Enter your name");
console.log(name);