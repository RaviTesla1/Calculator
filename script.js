
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
            console.log(typeof eval("543+++//*+-3"))

            let result = Number(inputBox.value)
            // if(){
            //     console.log("ERROR");
            // }
            // console.log(typeof result);
        }
        else {
            string += buttonText;
            inputBox.value = string;
        }
    })
}


