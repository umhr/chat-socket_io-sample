
/*
 * GET home page.
 */

// ipƒAƒhƒŒƒXæ“¾
var os = require('os');
var interfaces = os.networkInterfaces();
var addresses = [];
for (s in interfaces) {
    for (t in interfaces[s]) {
        var address = interfaces[s][t];
        if (address.family == 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}
var ipAddress = "http://"+addresses[0];
console.log(ipAddress);

// html
exports.index = function(req, res){
  res.render('index', { title: 'Express' ,'ipAddress':ipAddress})
};

