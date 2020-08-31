try{
    alert('Start of try runs');
    lalala;
   
}catch(err){
    alert(err.name);
    alert(err.message);
    alert(err.stack);

    alert(err);
}