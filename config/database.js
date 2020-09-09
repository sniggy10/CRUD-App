var mongoose = require('mongoose')

//require chalk module to give colors to console text
var chalk = require('chalk');

//require database URL from properties file
var dbURL = require('./properties').DB;

var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;

//export this function and imported by server.js
module.exports =function(){

    mongoose.connect(dbURL,function(err)
    {
        if(err)
        console.log(error("Not Connected"));

        else
        console.log(connected("Connected"));
    });

}