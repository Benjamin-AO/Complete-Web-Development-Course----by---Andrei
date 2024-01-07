// For loop example
/* 
    Use for loop to loop through the list and then add  exclamation mark "!" to strings.
*/
var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

var todosLength = todos.length
for(var i=0; i < todosLength; i++){
    todos[i] = todos.push(todos[i] + "!" );
    //console.log(todos);
}

console.log(todos);



// -------------- Difference between While Loop and Do-While Loop -------------- //

/*  1. While loop will first check for the condition for the code before executing the code.
    2. Do-while loop will first execute the code before checking for the condition.
*/

// While loop example
// var number = 10;
// while(number > 10){
//     console.log("while loop", number);
//     number--;
// }

// Do-while loop example
// var counter = 10;
// do{
//     console.log("do-while loop",counter);
//     counter--;
// } while(counter > 10);


//ForEach example
/* Foreach is similar to for loop. however it takes a function and return each individual items in the loop */

var nameList = ["Ben", "Ken", "Joy", "Tom"];

function logNames(name, index){
    console.log(name, index);
}

nameList.forEach(logNames);

// OR //

nameList.forEach(function(oruko, i){
    console.log("oruko: ", oruko, i);
})