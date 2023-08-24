const arr1 = [1,2,4,5,6]; 
const arr2 = [1,6,8,9,0];
const arrNum = arr1.filter((item1) =>{
    if(item1 <2){
        return true;
    }
    return false;
});
console.log(arrNum);
const arrNum1 = arr2.filter((item2) => {
    if(item2 <2){
        return true;
    }
    return false;
})
console.log(arrNum1)