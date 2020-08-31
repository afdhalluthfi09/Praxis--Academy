let json = '{"age" : 30}';

try{
    let phares = JSON.parse(json);
    a// if(!phares.name){
    //     throw new SyntaxError("data kurang lengkap mass")
    // }
    // alert(phares.name);
}catch(e){
    // if( e instanceof SyntaxError){
    //     alert("JSON ERROR" + e.message)
    // }else{
    //     throw e;
    // }
    console.log(e);

}