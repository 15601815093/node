module.exports = {
    say: function(res){
        res.write('i love you!');
    },
    hate: function(res){
        res.write('i hate you!');
    }
}