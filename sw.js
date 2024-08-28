// https://developer.chrome.com/docs/extensions/reference/api/contextMenus
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "open_in_safari",
    title: "Safariで開く",
    type: "normal",
    contexts: ["link"],
    targetUrlPatterns: ["https://*/*", "http://*/*"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "open_in_safari") {
    // x-safari-https://example.com/
    const url = `x-safari-${info.linkUrl}`;
    console.log(url);
    chrome.tabs.update(null, { url });
  }
});
