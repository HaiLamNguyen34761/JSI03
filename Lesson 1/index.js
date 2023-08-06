function myFn() {
    let foo = 1;
    foo = 30;
    let a = 300;
    console.log(foo);
}
/**
 * Let và var có thể gán lại giá trị cho biến
 * Var: tên biến giống nhau; let ko được'
 * Const: không thể thay đổi, tên biến ko giống nhau 
 */
myFn();
//arrow function
function myFn() {}
const myFn=()=>{

}
//orginal
//function sum(a,b){
   // return a+b
//}

const sum = (a,b)=>{
    return a+b
}
sum(4,3)
console.log(tong);

const array1=[4,5,6]
const array2=[1,2,3]
//
let array3 = [...array1,7]
console.log(array3)

//#
const array4 ={
    name:'Lam',
    age:18,
    school:"quang trung"
}
const array5= {...array4,address:"HH2e"}
console.log(array5)

//map
const arr= [1,2,3]
const arr2 = arr.map((so)=>{
    return so*2
})
console.log(arr2)
console.log(arr)
//filter
const arr3 = arr.filter((so)=>{
    return so % 2 == 0
})
console.log(arr3)