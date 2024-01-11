const curriedMultiply = (a) => (b) => (a*b);
// console.log("curriedMultiply:", curriedMultiply(3)(4));

const multiply = (a,b) => a*b;
// console.log("multiply:", multiply(3,4));

const multiplyBy5 = curriedMultiply(5);

var A = curriedMultiply(1)(4);
var B = multiply(3,4);

var result;
function checkResult(){ 
    if (A === B){
        return result = true;
    }else{
        return result = false;
    }
}

checkResult();
const isTheSame = (bool) =>{return bool;}

var conclusion = "Advanced-function 'multiply' and 'curriedMultiply' " + (isTheSame(result) ? "returned the same result :)" : "do not return the same result :(");

console.log("A:", A,);
console.log("B:", B);
console.log(conclusion);
console.log (multiplyBy5(2));


