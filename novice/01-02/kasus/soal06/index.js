let myHeading = document.querySelector('h1');
myHeading.textContent ='soal no 6';


let nilai = [80,77,88,95,68];
let redus = (accumulator, currentValue) => accumulator + currentValue;
let rate =nilai.reduce(redus) / nilai.length ;
console.log(nilai.reduce(redus));
console.log(rate)



if (rate < 60){
    console.log("dapat niali : F");
}else if (rate < 70){
    console.log("dapat niali : D");
}else if (rate < 80){
    console.log("dapat niali : C");
}else if (rate < 90){
    console.log("dapat niali : B");
}else if (rate < 100){
    console.log("dapat niali : A");
}