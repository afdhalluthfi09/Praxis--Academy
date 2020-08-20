let myHeading = document.querySelector('h1');
myHeading.textContent = "soal no 4";








let myArr =[-5,-2,-6,0,-1];

for( let i =0; i < myArr.length; i++){
    if(myArr[0] > 0){
        console.log("bukan kamu");
    }else if(myArr[1] > 0){
        console.log("bukan kamu");
    }else if(myArr[2] > 0){
        console.log("bukan kamu");
    }else if(myArr[3] == 0){
        console.log(myArr[3]);
    }else if(myArr[4] > 0){
        console.log("bukan kamu");
    }else{
        console.log("bukan juga lah")
    }
}