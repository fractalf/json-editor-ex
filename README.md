# JSON Editor Extension

Current version is `v2.0.0`

Install it from the Mozilla add-ons here: https://addons.mozilla.org/en-US/firefox/addon/json-editor-ex/

This extension is basically just a wrapper around the awesome open source project [JSON Editor Online](https://github.com/josdejong/svelte-jsoneditor) `v0.18.10`


The third party files included in this extension are build like this:

```sh
$ git clone https://github.com/josdejong/svelte-jsoneditor
$ cd svelte-jsoneditor
$ git checkout v0.18.10
$ npm install
$ npm run build

# These are the 2 files included in this extension
$ ls -l package-vanilla/index.js
$ ls -l package-vanilla/themes/jse-theme-dark.css
```

![](img/screenshot-dark.png?raw=true)
![](img/screenshot-light.png?raw=true)
