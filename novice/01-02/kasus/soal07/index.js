let myHeading = document.querySelector('h1');
myHeading.textContent ='soal_no 7';




for(let i =0; i < 100; i++){
    if (i % 2 === 0 && i % 5 === 0){
        console.log("fizzBuzz");
    }else if( i % 2 == 0){
        console.log("Fizz");
    }else if( i % 5 == 0){
        console.log("Buzz");
    }
}