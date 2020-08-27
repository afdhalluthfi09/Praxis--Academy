var books =[
    {name : 'javaScript',isActive:true,page:450},
    {name : 'Angular',isActive:true, page:905},
    {name :'Node',isActive:true,page:732},
    {name:'React',isActive:false,page:800}
];

// // Imperative Pattern
// for(var i=0; i < books.length;i++){
//     books[i].lastRead=new Date();
// }
// books.map((book)=>{
//     book.lastReadBy ='me';
//     return book;
// })

// console.log(books);

let activeVooks=[];
for( let i =0; i < books.length;i++){
    let m =books[i];
    if(m.isActive){
        activeVooks.push(m)
    }
}

console.log(activeVooks);

// filter
let SumBooks =books.filter((m)=>{
    return m.isActive;
})

.map((m)=>{
    return m.page -(0.1* m.page);
})

.reduce((acc,m)=>{
    return acc + m;
},0);

console.log(SumBooks)