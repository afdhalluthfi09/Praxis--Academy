let user ={
    nama:"syalutt",
    age:20
}
let hitung =function (obj) {
    
    return Object.keys(user).length;
}
console.log(hitung(user));