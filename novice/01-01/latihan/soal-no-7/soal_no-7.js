const myHeading = document.querySelector("h1");
myHeading.textContent="hello word";


let myImage =document.querySelector("img");
myImage.onclick=function(){
    let mySrc =myImage.getAttribute('src');
    if(mySrc == 'mozila.jpeg'){
        myImage.setAttribute('src','mozila.jpg')
    }else{
        myImage.setAttribute('src','images.png')
    }
}

let myButton = document.querySelector("button");

function setUserName(){
    let myName =prompt("Please enter your name.");
    localStorage.setItem('name',myName);
    myHeading.textContent='mozila is cool' + myName;
}

if (!localStorage.getItem('name')){
    setUserName();
}else{
    let stordName =localStorage.getItem('name');
    myHeading.textContent = 'mozila is cool ' + stordName;
}

myButton.onclick =function(){
    setUserName();
}