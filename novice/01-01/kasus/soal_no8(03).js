for( let angka=0; angka < 100 ; angka++){
    if( angka % 3 === 0 && angka % 5 === 0 ){
        console.log('fizzBuzz');
    }else if( angka % 3){
        console.log("fizz");
    }else if( angka % 5 ){
        console.log("Buzz");
    }else{
        console.log(angka);
    }
}