/// <reference path="./typings/tsd.d.ts" />
var remotezip = require("./index.js");
var path = require("path");

remotezip.get({
    from:"https://github.com/UmbrellaZone/legaldocs/archive/master.zip",
    toPath:path.resolve("./test/"),
    cb: function(){
        console.log("This is a callback")
    }
});