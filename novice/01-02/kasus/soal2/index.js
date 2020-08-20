let myHeading = document.querySelector('h1');
myHeading.textContent ='Soal No 2'




let v = 3;
let x = -7;
let z = 5;

let arrr =[3,-7,5];

for (let i = 0; i < arrr.length; i++){
    if(arrr[0] < 0 && arrr[1]< 0 && arrr[2] < 0 ){
        console.log("the sign is +");
    }else if(arrr[0] > 0 && arrr[1] < 0 && arrr[2] > 0){
        console.log(" the sign is -");
    }else if( arrr[0] < 0 && arrr[1] > 0 && arrr[2] > 0){
        console.log("the sign is +");
    }else{
        console.log(i[2]);
    }
    
}


