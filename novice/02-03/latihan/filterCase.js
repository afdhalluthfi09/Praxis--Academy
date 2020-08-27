let people =[
    {name :'kajol',age:24},
    {name :'Danang', age:27},
    {name: 'Komar',age:39}
]

let Age27 = person =>person.age > 27;
let overage = people.filter(Age27);
console.log(overage)

let DataPerson=[]
for( let i=0; i < people.length; i++){
    let sentench = people[i].name + " udah berumur " + people[i].age + " tahun";
    DataPerson.push(sentench);
}
console.log(DataPerson)

// ringkasnya
let paramnya =(person) =>`${person.name} udah berumur ${person.age} tahun`;
let dataBaru = people.map(paramnya);
console.log(dataBaru)

// jika kita mau update value dalam arr
let oldArr =[1,2,3,4,-5,7,6,5];
console.log("sebelum : " + oldArr)
for( let i =0 ; i < oldArr.length; i++){
    oldArr[i] = Math.abs(oldArr[i]);
}
console.log ("sesudah update : " + oldArr)

let oldArr01 = oldArr.map(Math.abs);
console.log(oldArr01)