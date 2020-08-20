let myHeading = document.querySelector('h1');
myHeading.textContent ='case 02';









let konversiSuhu = function(s,f){
    if(f == "c"){
        return (s -32)*(9/5) + " f";
    }else if( f == "f"){
        return (s * 9/5) + 32 + " c";
    }else{
        console.log("masukin yang benar dong");
    }
}