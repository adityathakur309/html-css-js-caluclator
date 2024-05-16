let buttons =document.querySelectorAll(".btn");
let inputBox = document.querySelector("input");
let string = "";
buttons = Array.from(buttons)

let caluclate = (ele) => {
    if(ele === "="){
        string = eval(string);
        inputBox.value = string
    }
    else if(ele === "AC"){
        string = "";
        inputBox.value = string;
    }
    else if(ele === "DEL"){
        string = string.slice(0,string.length-1)
        inputBox.value = string;
    }
    else{
        string+= ele;
        inputBox.value = string;
    }
}
// caluclate 
buttons.forEach(
    (button) => {
        button.addEventListener("click", (e) => {
            caluclate(e.target.innerText)
           
        })
    }
)
// end 


