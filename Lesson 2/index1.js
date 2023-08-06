const arrNum = [5, 3, 0, -1, 2, -5];
const positiveNum = arrNum.filter((item) =>{
    if(item >0){
        return true;
    }
    return false;
});


//arrNum.forEach((item) =>{
    //if(item >0){
        //positiveNum.push(item);
    //}
//})

console.log(positiveNum)

const positiveNum1 = arrNum.filter((item) => item > 0);

const products = [
	{ id:1, name: 'Iphone 13', price: 1000, quantity: 10 },
	{ id:2, name: 'Macbook pro M2', price: 2000, quantity: 5 },
	{ id:3, name: 'Màn hình Samsung 23 inch', price: 1500, quantity: 2 },
	{ id:4, name: 'Airpod 2', price: 100, quantity: 20 },
]

const product1 = products.filter((item) => item.quantity >= 10);
console.log(product1)

const product2 = products.filter((product) => product.id !== 3).map((product) => product.name);
console.log(product2)

const checkProduct = (productName) => {
  const filterproduct = products.filter(product => product.name === productName);
  if(filterproduct.length === 0){
    console.log('ko ton tai');
  }
  else{
    console.log('ton tai');
  }
}
checkProduct('Iphone 13')

const checkProduct2 = (productName) => {
    const findproduct = products.find(product => product.name === productName);
    if(findproduct){
        console.log('ton tai');
      }
      else{
        console.log('ko ton tai');
      }
  }
  checkProduct2('Iphone 13')
  const checkProduct3 = (productName) => {
    const productindex= products.findIndex(product => product.name === productName);
    console.log(productindex);
    if(productindex > - 1){
        console.log('ton tai');
      }
      else{
        console.log('ko ton tai');
      }
  }
  checkProduct3('Iphone 132')

