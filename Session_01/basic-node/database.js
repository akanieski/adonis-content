const fs = require('fs')

console.log("RUN ONCE");

var config = JSON.parse(fs.readFileSync('./config.json'))

module.exports = function() {
    console.log("Connecting to " + config.ConnectionString)
}