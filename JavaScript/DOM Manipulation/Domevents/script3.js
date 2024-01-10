var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

let inputLength = input.value.length;
function checkInputLength(){
    return inputLength >0;
}

function createListElement(){
    textNode = document.createTextNode(input.value);
    var li = document.createElement("li");
    li.appendChild(textNode);
    ul.appendChild(li);
    input.value = "";
}

enterButton.addEventListener("click", function(){
    if (checkInputLength()){
        createListElement();
    }
});