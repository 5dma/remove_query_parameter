/* User clicked on our context menu item, process the selected text or link. */
browser.menus.onClicked.addListener((info, tab) => {
	console.log("clicked a menu");
	console.log("info:")
	console.log(info)
	console.log("tab")
	console.log(tab)
	
	let targetUrl = info.hasOwnProperty('linkUrl') ? info.linkUrl : info.selectionText;

	let urlWithQueryString;

	/* If the selected text or link is a valid URL, continue processing; otherwise, return. */
	try {
		urlWithQueryString = new URL(targetUrl);
	} catch (_) {
		console.log("The url is not valid: " + targetUrl)
		return;
	}

	/* Remove the entire query string (everything after first ? in URl). */
	urlWithQueryStringString = urlWithQueryString.href
	let queryStringStart = urlWithQueryStringString.indexOf("?")
	if (queryStringStart == -1) {
		urlWithoutQueryString = urlWithQueryStringString
	} else {
		urlWithoutQueryString = urlWithQueryStringString.substring(0,queryStringStart)
	}

	console.log("the urlWithoutQueryStrong is " + urlWithoutQueryString)
	browser.windows.openDefaultBrowser(urlWithoutQueryString)

});

browser.menus.create({
	id: "no-utm",
	title: "Open without query string",
	contexts: ["selection", "link"]
});