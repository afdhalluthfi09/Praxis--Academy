// behind the scane Array.Prototype.Filte()
var Arr =[0,1,2,3,4,5,6,7,8,9,10]
var evenNumbers =[];

for(var i=0; i <Arr.length; i++){
    if(Arr[i] % 2 == 0){
        evenNumbers.push(Arr[i]);
    }
}

console.log(evenNumbers)

// after Comming Array.Prototype.Filter()
const even = n => n % 2 == 0;
console.log(Arr.filter(even));