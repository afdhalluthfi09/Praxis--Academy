let email = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
function nama(emails){
    console.log(emails.match(email));
}
nama('afdhalluthfi145@gmail.com');
// let noPlat ='AB 2287 JX';
function chekplat(noPlat){
    let plat =/^[A-Z]{1,2}\s\d{1,4}\s\D{1,3}$/ig
   
    if (noPlat.match(plat)){
        console.log("ini no indo");
    }else{
        console.log("bukan nomor indo");
    }
}

chekplat('AB 2287 JX');