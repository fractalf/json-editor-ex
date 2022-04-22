JSON Editor Extension

Install it from the Mozilla add-ons here: https://addons.mozilla.org/en-US/firefox/addon/json-editor-ex/

This extension is basically just a wrapper around the awesome open source project [JSON Editor Online](https://github.com/josdejong/jsoneditor) v9.7.4

The minified third party files included in this extension are build like this:

```sh
> git clone https://github.com/josdejong/jsoneditor.git
> cd jsoneditor
> git checkout v9.7.4
> npm install
> npm run build

# These are the files included in the extension
# - dist/jsoneditor.min.js
# - dist/jsoneditor.min.css
```

![](img/screenshot.png?raw=true)
