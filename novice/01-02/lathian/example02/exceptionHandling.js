let myHeaders = document.querySelector('h1');
myHeaders.textContent='Belajar Exception Handling';


// pertama Buat object
function userName(pesan){
    this.pesan =pesan;
    this.nama ='useName'
}

userName.prototype.toString =function(){
    return `${this.nama}: "${this.pesan}"`;
}

throw new userName('value too hight');