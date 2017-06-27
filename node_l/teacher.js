var User = require('./user');
function teacher(id, name, age){
    User.apply(this,[id, name, age]);
    this.teach = function(res){
        res.write(this.name + '会教书');
    }
}
module.exports = teacher;