function procesData(){
    var data = fetchData();
    data +=1;
    return data;
}


function prosessdata(callback){
    fetchData(function(err,data){
        if(err){
            console.log('ahh ini erorr biasa');
            return callback(err);
        }
        data += 1;
        callback(data);
    })
}