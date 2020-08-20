let myHeading = document.querySelector('h1');
myHeading.textContent ='soal no 5';






evend =[];
odd =[];

for (let i =0; i < 15; i++){
    if( i % 2 == 0){
        alert("angkanya adalag :"+ i + " is even");  
        evend.push(i);   
    }else{
        alert("ankanya adalah :" + i + " is odd");
         odd.push(i); // ceritanya mau saya isi setelah tampil       
    }
}

// evend.forEach( e => {
//     console.log(e + " is evend");
// });

// odd.forEach( u =>{
//     console.log( u + " is odd");
// });

// let mix = evend.concat(odd);

// mix.forEach(e =>{
//     alert("sudah waktunga :"  )
// })