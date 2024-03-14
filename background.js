function checkTab(){
  browser.tabs
    .query({ active: true, currentWindow: true })
    .then(() => {
      browser.tabs.executeScript({
        file: "/cookiesremover.js",
      });
    })
}

browser.browserAction.onClicked.addListener(checkTab);