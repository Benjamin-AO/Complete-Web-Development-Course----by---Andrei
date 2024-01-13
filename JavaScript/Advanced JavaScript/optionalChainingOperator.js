//Optional chanining operator simplifies the way of checking for the correctness of variable before throwing errors.
// It works by checking for errors and if any error it will return undefined instead of an error report.

const user = {
    name:{
        firstName: "Jhon",
        surName: "Stones"
},
    contact:{
        phone: 1234,
        houseAddress: "10th avenue, MaryLand, USA"
    }
}

//Correct
userFirstName = user.name.firstName;
console.log("correct", userFirstName);

//Incorrect >> gru does not exits in the object 'user' 
/* userFirstName = user.gru.firstName;
console.log(userFirstName);
*/

//Avoiding error report in the incorrect code
userFirstName = user?.gru?.firstName; // it will check if user and gru exits before the code executes
console.log("optionalChaining", userFirstName);