let myHeading = document.querySelector('h1');
myHeading.textContent ='soal No 1';



function chekNumber(arg1,arg2){
   if (arg1 % 2 == 0 && arg2 % 2 == 0){
       if (arg1 < arg2){
           console.log(arg2)
       }else if(arg1 > arg2){
           console.log(arg1);
       }else{
           console.log('tidak ada')
       }
   }else{
       console.log('tidak ada bilanagn bulat')
   }
}

chekNumber(3,10)