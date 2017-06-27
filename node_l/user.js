function user(id, name, age){
    this.id = id;
    this.name = name;
    this.age = age;
    this.enter = function(res){
        res.write(this.name +　'进入图书馆')
    }
}
module.exports = user;