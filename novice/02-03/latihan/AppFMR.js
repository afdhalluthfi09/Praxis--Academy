let shoopeChart =[
    {productTitle :'fpBoks', type:'books', amount:17000},
    {productTitle :'phpApps', type:'Software', amount:16000},
    {productTitle :'Jam Tangan', type:'aksesoris', amount:15000},
    {productTitle :'Samsung', type:'smartPhone', amount:1000}
]

const byBooks =(order)=>order.type == 'books';
const getAmount =(order)=>order.amount;
const sumAmount =(acc,amount)=> acc + amount;

function getTotalAmount(shoopeChart){
    return shoopeChart
    .filter(byBooks)
    .map(getAmount)
    .reduce(sumAmount,0)
}

getTotalAmount(shoopeChart);