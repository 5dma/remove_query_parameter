/*
Log that we received the message.
Then display a notification. The notification contains the URL,
which we read from the message.
*/
function notify(message) {
  console.log("I reached the callback");
  let title = browser.i18n.getMessage("notificationTitle");
  let content = browser.i18n.getMessage("notificationContent", message.url);
  browser.notifications.create({
    "type": "basic",
    "iconUrl": browser.extension.getURL("images/icon_no_utm_32.png"),
    "title": title,
    "message": content
  });
}

function cleanLink(message) {
	console.log("I reached the callback");
}
/*
Assign `notify()` as a listener to messages from the content script.
*/
browser.runtime.onMessage.addListener(cleanLink);
//browser.pageAction.onClicked.addListener(cleanLink);
//browser.browserAction.onClicked.addListener(cleanLink);
browser.runtime.addListener(cleanLink);
console.log("background script received message");
