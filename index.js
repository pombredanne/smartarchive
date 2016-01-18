#!/usr/bin/env node

/// <reference path="./index.ts" />
var RemotezipPlugins;
(function (RemotezipPlugins) {
    RemotezipPlugins.init = function () {
        var plugins = {
            remotefile: require("remotefile")
        };
        return plugins;
    };
})(RemotezipPlugins || (RemotezipPlugins = {}));
/// <reference path="./typings/tsd.d.ts" />
/// <reference path="./remotezip.plugins.ts" />
