/// <reference path="./index.ts" />
module RemotezipPlugins {
    export var init = function() {
        var plugins = {
            beautylog: require("beautylog"),
            gulp: require("gulp"),
            g:{
                unzip: require("gulp-unzip"),
                remoteSrc: require("gulp-remote-src")
            },
            path: require("path")
        };
        return plugins;
    }
}