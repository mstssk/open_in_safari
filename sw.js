// https://developer.chrome.com/docs/extensions/reference/api/contextMenus
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "open_in_safari-link",
    title: "このリンクをSafariで開く",
    type: "normal",
    contexts: ["link"],
    targetUrlPatterns: ["https://*/*", "http://*/*"],
  });

  chrome.contextMenus.create({
    id: "open_in_safari-page",
    title: "このページをSafariで開く",
    type: "normal",
    contexts: ["page"],
    targetUrlPatterns: ["https://*/*", "http://*/*"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  let url;
  switch (info.menuItemId) {
    case "open_in_safari-link":
      // x-safari-https://example.com/
      url = `x-safari-${info.linkUrl}`;
      break;
    case "open_in_safari-page":
      // x-safari-https://example.com/
      url = `x-safari-${info.pageUrl}`;
      break;
  }
  if (url) {
    console.log(url);
    chrome.tabs.update(null, { url });
  }
});
