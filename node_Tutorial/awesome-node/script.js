const fs =require('fs');

fs.readFile('./Hello.txt', (err, data) => {
    if (err) {
        console.log('errrorrrrr!')
    }
    console.log('Async', data.toString('utf8')); //if toString() is left blank, utf8 is set as default.

})

// ***Using fs.readFileSync***
// const file = fs.readFileSync('./Hello.txt');
// console.log('Sync',file.toString());

//***APPEND***
// fs.appendFile('./Hello.txt', 'This is so cool', err => {
//     if (err) {
//         console.log(err)
//     }
// })

//***WRITE***
// fs.writeFile('bye.txt', 'sad to see you go', err => {
//     if (err) {
//         console.log(err)
//     }
// })

//DELETE
// fs.unlink('./bye.txt', err => {
//     if (err) {
//         console.log(err)
//     }

//     console.log("inception")
// })


fs.readFile('./awesome-node/adventofcode.com_2015_day_1_input.txt', (err, data) => {
    if (err) {
        console.log("something went wrong :(");
    }
    console.log(data.toString())
})