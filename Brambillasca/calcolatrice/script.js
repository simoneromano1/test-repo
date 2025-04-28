let display = document.getElementById("display");

let zero = document.getElementById("zero");
zero.addEventListener("click", ()=>{
    if(display.value == "0"){
        display.value = "0";
    }else{
        display.value += "0";
    }
});
let one = document.getElementById("one");
one.addEventListener("click", ()=>{
    if(display.value == "0"){
        display.value = "1";
    }else{
        display.value += "1";
    }
});
let two = document.getElementById("two");
two.addEventListener("click", ()=>{
    if(display.value == "0"){
        display.value = "2";
    }else{
        display.value += "2";
    }
});
let three = document.getElementById("three");   
three.addEventListener("click", ()=>{
    if(display.value == "0"){
        display.value = "3";
    }else{
        display.value += "3";
    }
});
let four = document.getElementById("four");
four.addEventListener("click", ()=>{
    if(display.value == "0"){
        display.value = "4";
    }else{
        display.value += "4";
    }
});
let five = document.getElementById("five");
five.addEventListener("click", ()=>{
    if(display.value == "0"){
        display.value = "5";
    }else{
        display.value += "5";
    }
});
let six = document.getElementById("six");
six.addEventListener("click", ()=>{
    if(display.value == "0"){
        display.value = "6";
    }else{
        display.value += "6";
    }
});
let seven = document.getElementById("seven");
seven.addEventListener("click", ()=>{
    if(display.value == "0"){
        display.value = "7";
    }else{
        display.value += "7";
    }
});
let eight = document.getElementById("eight");
eight.addEventListener("click", ()=>{
    if(display.value == "0"){
        display.value = "8";
    }else{
        display.value += "8";
    }
});
let nine = document.getElementById("nine");
nine.addEventListener("click", ()=>{
    if(display.value == "0"){
        display.value = "9";
    }else{
        display.value += "9";
    }
});
let clear = document.getElementById("clear");
clear.addEventListener("click", ()=>{
    display.value = clear.value;
});
let backspace = document.getElementById("backspace");
backspace.addEventListener("click", ()=>{
    display.value = display.value.slice(0, -1);
});

let add = document.getElementById("add");
add.addEventListener("click", ()=>{
    if(display.value == "0"){
        display.value = "+";
    }else{
        display.value += "+";
    }
});
let subtract = document.getElementById("subtract");
subtract.addEventListener("click", ()=>{
    if(display.value == "0"){
        display.value = "-";
    }else{
        display.value += "-";
    }
});
let multiply = document.getElementById("multiply");
multiply.addEventListener("click", ()=>{
    if(display.value == "0"){
        display.value = "*";
    }else{
        display.value += "*";
    }
});
let divide = document.getElementById("divide");
divide.addEventListener("click", ()=>{
    if(display.value == "0"){
        display.value = "/";
    }else{
        display.value += "/";
    }
});
let equals = document.getElementById("equals");
equals.addEventListener("click", ()=>{
    if(display.value == "0"){
        display.value = "0";
    }else{
        display.value = eval(display.value);
    }
});
let dot = document.getElementById("dot");
dot.addEventListener("click", () => {
    if (!display.value.includes(".")) {
        if (display.value == "0") {
            display.value = "0.";
        } else {
            display.value += ".";
        }
    }
});

let orario = document.getElementById("orario");

setInterval(() => {
    orario.innerHTML = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // 👉 formato 24 ore
    });
}, 1000);

