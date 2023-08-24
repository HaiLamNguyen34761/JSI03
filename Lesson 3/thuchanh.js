const h2 = document.querySelector("h2")
h2.classList.add("class")

const p = document.querySelector(".sub-title")
p.classList.remove("p")

//1

function triple(a){
    console.log(a*3)
}
triple(3)
//4

var animals = ['monkey','tiger','elephant'];

function last1(array){
    let a = array [array.length-1]
    console.log(a)
}

last1(animals)

function last2(array){
    let a = array [0]
    console.log(a)
}

last2(animals)