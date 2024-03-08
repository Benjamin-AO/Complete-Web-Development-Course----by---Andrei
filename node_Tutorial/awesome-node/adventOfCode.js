const fs = require('fs')

let floor = 0;
let bracketCount = 1;
let position = [];

function positionChecker() {
    if (floor == -1) {
    
        position.push(bracketCount);
       // console.log ("p-checker: ", floor, bracket, "  p: ", position[0]);
    } else {
        bracketCount++;
    }   
}

fs.readFile('./challenge.txt', (err, data) => {
    console.time('funChallenge')
    if (err) {
        console.log('something went wrong :(');
    }

    const allBrackets = data.toString();
    for(bracket of allBrackets) {
        if (bracket == "(") {
            floor++;
        }else if (bracket == ")") {
            floor--;
        }
        positionChecker();
    }

    //console.log(``);
    console.log(`santa's is at floor ${floor} \nPosition of first character that caused santa's to be at floor -1 is ${position[0]}`);
    console.timeEnd('funChallenge');

})