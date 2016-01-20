# remotezip
downloads and extracts remote zip files

```javascript
var remotezip = require("remotezip");
remotezip.get({
    from:"https://example.com/example.zip",
    toPath:"/some/local/absolute/path"
});
```

For non zips there is remotefile.