const array = [1, 2, 4, 10];

const mapArray = array.map((num) =>{
    return num*2;
})

/* 
or
const mapArray = array.map(num => {return num*2;}) // round bracket for num is ignored.

*/

console.log(mapArray);