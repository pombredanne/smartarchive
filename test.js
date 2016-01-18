/// <reference path="./typings/tsd.d.ts" />
var remotezip = require("./index.js");
var path = require("path");
remotezip({ from: "https://github.com/UmbrellaZone/legaldocs/archive/master.zip", toPath: path.resolve("./test/") });
