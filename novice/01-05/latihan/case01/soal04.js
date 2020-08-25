let kalimat = "WORD";
console.log(kalimat.toLocaleLowerCase())
console.log(kalimat.toLocaleLowerCase().split(''))
console.log(kalimat.toLocaleLowerCase().split('').sort())
console.log(kalimat.toLocaleLowerCase().split('').sort().join(''))

let arr =["bajuHangat","bajuBiasa"];
let map = new Map();
arr.forEach((key, index,arr) => {
    let i =key.toLocaleLowerCase().split('').sort().join('');
    console.log(i);
    map.set(i,key)
});
console.log(Array.from(map.entries()))