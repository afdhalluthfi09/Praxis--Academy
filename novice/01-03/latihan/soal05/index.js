let myHeading = document.querySelector('h1');
myHeading.textContent ='soal no 5';



let myName =(function(depan, belakang){
    function lenagkap(){
        return depan + belakang;
    }

    console.dir(lenagkap);
})
// var add = (function () {
//     var counter = 0;
//     return function () {counter += 1; return counter}
//   })()
myName();