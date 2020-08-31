class MulticatorUnitFailure extends Error{}

function primitiveMultiPly(a, b){
    if(Math.random() < 0.2){
        return a * b;
    }else{
        throw new MulticatorUnitFailure("Klunk")
    }
}

function reliableMultiPly(a,b){
    for(;;){
        try{
            return primitiveMultiPly(a,b)
        }catch(e){
            if(e instanceof MulticatorUnitFailure){
                console.log("multiplication failed")
            }else {
                throw e;
            }
        }
    
    }
}

console.log(reliableMultiPly(8,8))
