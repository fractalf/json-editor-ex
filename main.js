browser.browserAction.onClicked.addListener(() => {
    browser.tabs.create({ "url": "/main.html" });
});
