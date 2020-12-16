module.exports.generateSecret = () =>{
    var abc = "abcdefghijklmnopqrstuvwxyz123456780ABCDEFGHIGKLMNOPQRSTUVWXYZ@#$%&*";
    var rs = "";
    while (rs.length < 15) {
        rs += abc[Math.floor(Math.random() * abc.length)];
    }
    return rs;
}
module.exports.objects = (a,b) => {
    var c = {};
  
    for (var i in a) {
      c[i] = typeof b[i] != 'undefined' ? b[i] : a[i];
    }
  
    return c;
}