function moveCommand(direction){
    var whatHappens;
    switch (direction){
        case "forward":
            whatHappens = "you found a diamond";
            break;
        case "back":
            whatHappens = "found a treasure box";
            break;
        case "right":
            whatHappens = "Recieve plenty of cash";
            break;
        case "left":
            whatHappens = "choose any car";
            break;
        default:
            whatHappens = "please enter a direction forward, back, right or left.";
    }
    return whatHappens;
}

// console.log(moveCommand("left"));

function makeTea(step){
    var howTo;
    switch(step) {
        case "step1":
            howTo = "boil some water";
            break;
        case "step2":
            howTo = "pour water into a mug";
            break;
        case "step3":
            howTo = "add a bag of tea and stir";
            break;
        case "step4":
            howTo = "add sugar and milk to your taste";
            break;
        default:
            howTo = "step 1 to 4 only 'step1'";
    }
    return howTo.toUpperCase();
}

for(var i=1; i<5; i++){
    var procedure = "step" + i;
    console.log(procedure,makeTea(procedure))
}

