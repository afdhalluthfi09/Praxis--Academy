
let selary ={
    "jhon" :100,
    "karoot":300,
    "john":250
}

// console.log(Object.values(selary))
// console.log(Object.length(selary))
let sumSelary = function (params) {
    let sum=0;
    for(let i of Object.values(selary)){
        sum += i;
    }
    return sum
}
console.log(sumSelary())
