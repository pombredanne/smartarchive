/// <reference path="ts/typings/tsd.d.ts" />
declare module RemotezipPlugins {
    var init: () => {
        beautylog: any;
        gulp: any;
        g: {
            unzip: any;
            remoteSrc: any;
        };
        path: any;
    };
}
declare var plugins: {
    beautylog: any;
    gulp: any;
    g: {
        unzip: any;
        remoteSrc: any;
    };
    path: any;
};
declare var remotezip: (options: {
    from: string;
    toPath: string;
}) => void;
