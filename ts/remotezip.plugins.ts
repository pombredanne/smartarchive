/// <reference path="./index.ts" />
module RemotezipPlugins {
    export var init = function() {
        var plugins = {
            remotefile: require("remotefile")
        };
        return plugins;
    }
}