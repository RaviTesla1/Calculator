// let inputBox = document.getElementById("inputBox");


// let buttonsEl = document.querySelectorAll(".btn")

// buttonsEl = Array.from(buttonsEl);
// console.log(buttonsEl);
// for(let i = 0;i < buttonsEl.length;i++){
//    buttonsEl[i].addEventListener("click",()=>{
//    const buttonValue = buttonsEl[i].textContent;
//    console.log(buttonValue);
//    if(buttonValue === "AC" ){
//     clearResult();
//    }
//    else if(buttonValue === "=" ){
//       calculateResult();
//    }
//    else{
//     appendValue(buttonValue);
//    }
//    })
// }
// function  clearResult(){
//     inputBox.value = "";
// }
// function calculateResult(){
//     inputBox.value = eval(inputBox.value);
// }
// function appendValue(buttonValue){
//     inputBox.value = inputBox.value + buttonValue;
// }





















// Array.from(buttons).forEach((button) => {
//     button.addEventListener("click",(e) =>{
//         if(e.target.innerHTML == "="){
//             string = eval(string);
//             inputBox.value = string;
//         }
//         else if(e.target.innerHTML == "AC"){
//             inputBox.value  = "";
//         }
//          else {
//             string = string + e.target.innerHTML;
//             document.querySelector("inputBox");
//             inputBox.value = string;
//             console.log(inputBox.value);
//         }
//     })
// })

// let string = "";
// let buttons = document.querySelectorAll('.btn');
// Array.from(buttons).forEach((button)=>{
//   button.addEventListener('click', (e)=>{
//     if(e.target.innerHTML == '='){
//       string = eval(string);
//       document.querySelector('input').value = string;
//     }
//     else if(e.target.innerHTML == 'C'){
//       string = ""
//       document.querySelector('input').value = string;
//     }
//     else{ 
//     console.log(e.target)
//     string = string + e.target.innerHTML;
//     document.querySelector('input').value = string;
//       }
//   })
// })

// let screen = document.getElementById('inputBox');
// buttons = document.querySelectorAll('button');
// let screenValue = '';
// for (item of buttons) {
//     item.addEventListener('click', (e) => {
//         let buttonText = e.target.innerText;
//         console.log('Button text is ', buttonText);
//          if (buttonText == 'AC') {
//             screenValue = "";
//             screen.value = screenValue;
//         }
//         else if (buttonText == '=') {
//             screen.value = eval(screenValue);
//         }
//         else {
//             screenValue += buttonText;
//             screen.value = screenValue;
//         }

//     })
// }
"use strict";


let string = "";
let inputBox = document.getElementById("inputBox");
let buttons = document.getElementsByClassName("btn");
buttons = Array.from(buttons);

// 

for(let btn of buttons){

    btn.addEventListener("click",(e) =>{
        let buttonText = e.target.innerText;
        console.log(buttonText);

        if(buttonText == "AC"){
            string = "";
            inputBox.value = string;
        }
        else if(buttonText == "="){
            string = eval(string);
            inputBox.value = string;
            console.log(typeof inputBox.value)
        }
        else {
            string += buttonText;
            inputBox.value = string;
        }
    })
}


