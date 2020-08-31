const box ={
    locked:true,
    unlock(){this.locked=false},
    lock(){this.locked =true},
    _content:[],
    get content(){
        if(this.locked)throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body){
    box.unlock();
    try{
        return body();
    }finally{
        box.lock()
    }
}
withBoxUnlocked(()=>{
    box.content.push("gold piece");
})

try{
    withBoxUnlocked(()=>{
        throw new Error("pirates on the orizon");
    })
}catch(e){
    console.log("error raised: " + e)
}
console.log(box.locked);