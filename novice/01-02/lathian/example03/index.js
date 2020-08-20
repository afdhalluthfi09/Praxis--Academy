function howMany(selectedObject){
    let numberSelected =0;
    for (let i =0; i < selectedObject.options.length; i++){
        if(selectedObject.options[i].selected){
            numberSelected++;
        }
    }
    return numberSelected;
}

let btn =document.getElementById('btn');
btn.addEventListener('click',function(){
    alert('number of options selected:' + howMany(document.selectForm.musicTypes));
});