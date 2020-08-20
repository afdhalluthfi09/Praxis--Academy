# Exception Handling
merupakan mekanisme yang paling diperlukan dalam menangani error yang terjadi pada saat runtime (program berjalan) atau yang lebih dikenal dengan sebutan runtime error.

Secara umum, adanya kesalahan / error yang terjadi pada program pada saat runtime dapat menyebabkan program berhenti atau hang. Untuk itulah diperlukan mekanisme untuk memastikan bahwa program tetap dapat berjalan meskipun terdapat kesalahan yang terjadi.

merupakan mekanisme yang paling diperlukan dalam menangani error yang terjadi pada saat runtime (program berjalan) atau yang lebih dikenal dengan sebutan runtime error.

Secara umum, adanya kesalahan / error yang terjadi pada program pada saat runtime dapat menyebabkan program berhenti atau hang. Untuk itulah diperlukan mekanisme untuk memastikan bahwa program tetap dapat berjalan meskipun terdapat kesalahan yang terjadi.

```
try : Digunakna untuk menetukan  bagian statment program akan 
      akan terjadi pengecualian Blok dari try ini harus di ikuti dengant catch atau finally
catch : digunakan untuk menangani kesalahan atau pengecualian
        yang terjadi. Block catch ini tidak dapat berdiri sendiri tanpa block try, block catch dapat di ikuti
        oleh  blok finally.
finally: digunakan untuk mengesekusi bagian code yang penting 
         dari program bagian ini akan tetap dijalankan  baik terjadi pengecualian maupun tidak.
throw   : digunakan untuk melempar  pengecuaian yang dimana 
          throw digunakn dalam body code yang ada
throws  : digunakan untuk mendeklarasikan pengecualian yang 
          terjadi pada fungsi tersebut.
```
source code:

```
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

```

