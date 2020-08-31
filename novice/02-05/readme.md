# erro jadi object

dengan cara ini kita bisa mengambil beberapa yang menjadi informasi jika mendevelop sebuah project
 ```
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
 ```
 e.message : akan menampilkan sebuah pesan kesalahan yang terjadi pada kode yang lagi runtime

### contoh lainya:
```
try{
    alert('Start of try runs');
    lalala;
   
}catch(err){
    alert(err.name);
    alert(err.message);
    alert(err.stack);

    alert(err);
}
```
# Throw 
memungkinakn kita melempar error kedalam body source kode dan natinya kan di tangkap oleh arg error dari catch()

```
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
```

## Finally :
ini ada bagian pengecualian pengekeskusiain jika terjadi error maka tetap akan di jalankan

```
try{
    alert('try');
    if(confirm('Make an error?')) BAD_CODE();
}catch(e){
    alert('catch'); 
}finally{
    alert('finallay');
}
```