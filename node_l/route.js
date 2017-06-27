var optFile = require('./write');
module.exports = {
    readf: function(req,res) {
        function recall(data) {
            res.write(data);
            res.end();
        }

        optFile.write('./test.html','写的文件',recall);
    }
}