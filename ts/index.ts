/// <reference path="./typings/tsd.d.ts" />
/// <reference path="./remotezip.plugins.ts" />

var plugins = RemotezipPlugins.init();

var remotezip = function(options:{from:string,toPath:string}){

    if(!plugins.path.isAbsolute(options.toPath)){ //check wether supplied path is absolute
        plugins.beautylog.error("Please supply remotezip with an absolute path");
        return;
    };

    plugins.gulp.task('default',function () {
        plugins.beautylog.log('Now trying to download and extract...');
        var stream = plugins.g.remoteSrc(["master.zip"],{
            base:"https://github.com/UmbrellaZone/legaldocs/archive/"
        })
            .pipe(plugins.g.unzip())
            .pipe(plugins.gulp.dest(options.toPath));
        return stream;
    });

    plugins.gulp.start.apply(plugins.gulp, ['default']);
};

module.exports = remotezip;