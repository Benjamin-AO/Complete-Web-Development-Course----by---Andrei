var body = document.querySelector(".background");
var colour1 = document.querySelector(".colour1");
var colour2 = document.querySelector(".colour2");
var styleInfo = document.querySelector("h3");

function setGradient(){
    body.style.background = 
    "linear-gradient(to right," 
    + colour1.value 
    + "," 
    + colour2.value 
    + ")";

    styleInfo.textContent = body.style.background + ";";
}


colour1.addEventListener("input", setGradient);
colour2.addEventListener("input", setGradient);