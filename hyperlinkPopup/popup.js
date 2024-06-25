// Below is what we'll log to the console.

console.log('This is from the hyperlink popup at ' + new Date().toString());
//browser.menus.onClicked.addListener("click", null) => {
//	console.log("You right-clicked on something at " + new Date().toString());
//}
//)
//let menu_button = document.getElementById("menu-tab-button");

document.addEventListener("click", (event) => {console.log("You right-clicked on something at " + new Date().toString());});

//browser.menus.onclick = (event) => {console.log("You right-clicked on something at " + new Date().toString());};
