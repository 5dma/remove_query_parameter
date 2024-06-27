//import * as messageTools from '/modules/messageTools.mjs';

function sendToConsole() {
	console.log("Got to the callback");
}

function updateContextMenus() {
		console.log("URL Link updating context menus");
}

function onMessage( message )
{
    console.log('got to onMessage callback');
}

// Dragging starts
function onDragStart(ev) {
    // Flag origin
	console.log("URL Link dragging '" + ev.target.id + "'");

}

console.log("Got to background.js.");

console.log(browser.menus)

//browser.menus.addEventListener('clicked',sendToConsole);
//browser.menus.addEventListener('click',sendToConsole);

browser.menus.onClicked.addListener((info, tab) => {
	console.log("clicked a menu");
	console.log("info:")
	console.log(info)
	//console.log("tab")
	//console.log(tab)
	console.log("The selected texyt is: " + info.selectionText)

	let targetUrl = info.hasOwnProperty('linkUrl') ? info.linkUrl : info.selectionText;

	browser.tabs.create( {"url": targetUrl})


});

browser.runtime.onConnect.addListener(port => {
	console.log('The extension is running.');
})

browser.runtime.onInstalled.addListener(details => {
	console.log('Installed the extension');
	console.log(details)
});

browser.menus.create({
	id: "no-utm",
	title: "Open without query string",
	contexts: ["selection","link"]
});
console.log('Added context menu');



