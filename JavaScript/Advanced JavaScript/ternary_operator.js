// condition ? expr1 : expr2;
function isUserValid(bool){
    return bool;
}

var answer = isUserValid(true) ? " This user is validated" : "User not validated";

console.log(answer);

var autoNumber = "Your nuber is " + (isUserValid(true)? "1234." : "not available :(");
console.log(autoNumber);