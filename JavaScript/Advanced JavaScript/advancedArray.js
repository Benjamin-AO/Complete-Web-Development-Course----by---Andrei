const array = [1, 2, 10, 16];
const double = [];
const newArray = array.forEach((num)=>{
    double.push(num*2);
})

console.log(double);

array.forEach((Number, i) =>{
    console.log(Number, i);
})


// .at() -this is used to grab an item at any location using the index of an array. This is quite normal in Python.

const fruits = ["mango", "orange", "pear", "apple"];
let i = -3;
let itemGetter = fruits.at(i);
console.log("This is what i grabbed: ",itemGetter);

console.log(fruits.at(-1));
