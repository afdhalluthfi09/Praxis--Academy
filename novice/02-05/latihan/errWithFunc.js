function readData(){
    let json ='{"age":30}';

    try{
        blabla();
        
    }catch(e){
        if(!(e instanceof SyntaxError)){
            throw e;
        }
    }
}

try{
    readData();
}catch(e){
    alert("External cath got" + e);
}