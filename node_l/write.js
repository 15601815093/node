var fs = require('fs');
module.exports = {
    write : function(path,data, recall){
        fs.writeFile(path,data,function(err){
            if(err){
                console.log(err)
            }else{
                recall(data)
            }
        })
        console.log('异步执行玩')
    },
    readImg:function(path,res){
        fs.readFile(path,'binary',function(err,fileData){
            if(err){
                console.log(err);
            }else{
                console.log('访问充');
                res.write(fileData,'binary');
                res.end();
            }
        })
    }
}