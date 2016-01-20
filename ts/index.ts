/// <reference path="./typings/tsd.d.ts" />
/// <reference path="./remotezip.plugins.ts" />

var plugins = RemotezipPlugins.init();

var remotezip = {
    get: function(options:{from:string,toPath:string, cb?}){

        if (!plugins.path.isAbsolute(options.toPath)) { //check wether supplied path is absolute
            plugins.beautylog.error("Please supply remotezip with an absolute path");
            return;
        }
        ;

        plugins.gulp.task("remotezip", function () {
            plugins.beautylog.log('Now trying to download and extract...');
            var stream = plugins.g.remoteSrc(["master.zip"], {
                    base: "https://github.com/UmbrellaZone/legaldocs/archive/"
                })
                .pipe(plugins.g.unzip())
                .pipe(plugins.gulp.dest(options.toPath));
            return stream;
        });

        plugins.gulp.task("default",["remotezip"], function(){
            plugins.beautylog.success("Download complete and archive extracted");
            if(typeof options.cb == "function"){
                options.cb();
            };
        });

        plugins.gulp.start.apply(plugins.gulp, ['default']);
    }
};
module.exports = remotezip;