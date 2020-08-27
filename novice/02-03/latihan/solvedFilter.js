let filterArr =function(x,coll){
    let resultArray =[];
    for( let i=0; i < coll.length; i++){
        if(coll[i] < x){
            resultArray.push(coll[i])
        }
    }
    return resultArray;
}
let newArr = filterArr(9,[0,1,2,3,4,5,6,7,8,9])
console.log(newArr)

// about Filter 
function smaller(number){
    return number < this
}
function fillterArr(x,listNumber){
    return listNumber.filter(smaller,x)
}
console.log(filterArr(5,newArr))
