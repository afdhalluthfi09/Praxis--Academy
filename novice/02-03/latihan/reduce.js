// Before Reduce

let Shopee =[
    {productTitle :'shopee01', fee : 45000},
    {productTitle :'shopee02', fee : 35000},
    {productTitle :'shopee04', fee : 25000},
    {productTitle :'shopee03', fee : 45000}
]
let totalAmount = 0;
for(var i =0; i < Shopee.length; i++){
    totalAmount += Shopee[i].fee
}
console.log(totalAmount)

// after coming Reduce
let paramnya = (current,total) => current + total.fee
let totShape =(Shopee)=>Shopee.reduce(paramnya,0);
console.log(totShape(Shopee));

// cara lain 
const getAmount =order => order.fee;
const sumAmount =(acc,amount) => acc + amount;

function getAmountShoope(shoopeChart){
    return shoopeChart
    .map(getAmount)
    .reduce(sumAmount,0)
}
console.log(getAmountShoope(Shopee))