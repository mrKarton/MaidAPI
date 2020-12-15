module.exports.generateSecret = () =>{
    var abc = "abcdefghijklmnopqrstuvwxyz123456780ABCDEFGHIGKLMNOPQRSTUVWXYZ@#$%&*";
    var rs = "";
    while (rs.length < 15) {
        rs += abc[Math.floor(Math.random() * abc.length)];
    }
    return rs;
}