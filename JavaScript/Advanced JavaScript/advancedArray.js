const array = [1, 2, 10, 16];
const double = [];
const newArray = array.forEach((num)=>{
    double.push(num*2);
})

console.log(double);

array.forEach((Number, i) =>{
    console.log(Number, i);
})