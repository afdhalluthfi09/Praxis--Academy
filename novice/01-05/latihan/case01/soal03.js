let range ={
    from: 1,
    to:5,
    [Symbol.iterator] (params) {
        return{
            current:this.from,
            last :this.to,
    
            next(){
                if(this.current <= this.last){
                    return {done:false, value: this.current++};
                }else{
                    return{done : true};
                }
            }
        };
}


    
};
console.log(range);
console.log(range.Symbol);

// for(let i of range);



// Array.from(new Set(values))
function uniq(arr) {
    return Array.from(new Set(arr));
}
let values =["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(uniq(values));