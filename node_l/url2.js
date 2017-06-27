var fs = require('fs');
module.exports = {
    read: function(pathname,recall){
        fs.readFile(pathname,function(err,data){
            if(err){
                console.log(err)
            }else{
                recall(data);
                console.log(data);
            }
        })
    }
}