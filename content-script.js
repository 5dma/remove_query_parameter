/*
If the click was on a link, send a message to the background page.
The message contains the link's URL.
*/
function notifyExtension(e) {
  let target = e.target;
  while ((target.tagName != "A" || !target.href) && target.parentNode) {
    target = target.parentNode;
  }
  if (target.tagName != "A")
    return;

  console.log("content script sending message");
  browser.runtime.sendMessage({"url": target.href});
}

/*
Add notifyExtension() as a listener to click events.
*/
window.addEventListener("click", notifyExtension);


// browser.windows.create({
                        // TBD unsupported by Firefox @v56-57dev  "focused": true,
//                        "url": lnk
//
//  browser.windows.openDefaultBrowser( lnk );});
/*
Creating the context menu: onContextMenuCreated
*/