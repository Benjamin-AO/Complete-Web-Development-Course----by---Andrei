// Objects in JavaScript
let obj1 = {name:"Troy", age:12, contact:{mum:1352} };
let obj2 = {
    name:"Ade",
    age: 20,
    gender: "male",
};

// Changing item value in objects
obj1.name = "Khan";
obj2.age = 18;

// Shallow Clonning of an object
    //Method 1
let obj3 = Object.assign({}, obj1);
obj3.contact.mum = 1234;

    //Method 2
let obj2Clone = {...obj2};

console.log(obj2Clone);

// Deep Clonning of an object
/* 
This will ensure that inner items i.e objects within an object remain totally unique when cloned
*/
let superClone = JSON.parse(JSON.stringify(obj1));
superClone.contact.mum = 5555;

console.log("obj1", obj1);
console.log("obj3", obj3);
console.log("obj3", superClone);



    