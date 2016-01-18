#!/usr/bin/env node

/// <reference path="./index.ts" />
var RemotezipPlugins;
(function (RemotezipPlugins) {
    RemotezipPlugins.init = function () {
        var plugins = {
            beautylog: require("beautylog"),
            gulp: require("gulp"),
            g: {
                unzip: require("gulp-unzip"),
                remoteSrc: require("gulp-remote-src")
            },
            path: require("path")
        };
        return plugins;
    };
})(RemotezipPlugins || (RemotezipPlugins = {}));
/// <reference path="./typings/tsd.d.ts" />
/// <reference path="./remotezip.plugins.ts" />
var plugins = RemotezipPlugins.init();
var remotezip = function (options) {
    if (!plugins.path.isAbsolute(options.toPath)) {
        plugins.beautylog.error("Please supply remotezip with an absolute path");
        return;
    }
    ;
    plugins.gulp.task('default', function () {
        plugins.beautylog.log('Now trying to download and extract...');
        var stream = plugins.g.remoteSrc(["master.zip"], {
            base: "https://github.com/UmbrellaZone/legaldocs/archive/"
        })
            .pipe(plugins.g.unzip())
            .pipe(plugins.gulp.dest(options.toPath));
        return stream;
    });
    plugins.gulp.start.apply(plugins.gulp, ['default']);
};
module.exports = remotezip;
