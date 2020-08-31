



let json ='{"name" :"Jhon", "age":30}';
let badJson ="{ bad jason}";
try{
    // let phar =JSON.parse(badJson);
    let pharse = JSON.parse(json);
    // alert(phar.name); 
    alert(pharse.name);
    alert(pharse.age);
    alert(pharse.name);
    alert(pharse.addres);
 }catch(e){
     alert(e.name)
     alert(e.message)
     alert("data rusak periksa kembali")
 }

