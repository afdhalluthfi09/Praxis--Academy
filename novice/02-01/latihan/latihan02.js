function Shape() {
    this.getType=()=>{
        console.log("Traingel");
    }
    
    this.shuffle=(nama)=>{
        nama.sort(()=>Math.random())
    }
}

function Triangale(a,b,c){
   Shape.call(this)
   this.a =a;
   this.b=b;
   this.c=c;
   this.getParemeter=()=>{
    console.log(6)
    
}
}
Triangale.prototype = Object.create(Shape);
Triangale.prototype.constructor =Triangale

let t = new Triangale();
console.log(t.constructor === Triangale)

console.log(Shape.isPrototypeOf(t))
t.getParemeter();
console.log(t.getType());

console.log(Triangale.prototype)
t.shuffle([1,2,3,5,6,7,43,4,23])
console.table(t.shuffle([1,2,3,5,6,7,43,4,23])
)