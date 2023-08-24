//const button = document.querySelectorAll("button");
//console.log(button);
//const h1 = document.querySelector("h1");
//console.log(h1);
//const button1 = document.querySelector(".dangky")
//button1.textContent= "dang ky"

//const button = document.querySelector(".dangky")
// //button.classList.add("button1")
// //button.classList.remove("button1")
// //function
// function sum(a,b){
//     console.log(a+b)
// }
// sum(73,-64)

//event

const button = document.querySelector(".dangky")
function aler(){
    const h1 = document.querySelector("h1")
    h1.classList.add("red")
}
button.addEventListener("click",aler)