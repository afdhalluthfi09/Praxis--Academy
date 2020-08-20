let myHeading = document.querySelector('h1');
myHeading.textContent ='soal no 2';










const power =(base, exponent)=>{
    let result =1;
    for( let count=0; count < exponent; count++ ){
        for(let con=0; con < count; con++){

            result += base;
        }
    }
    return result;
};