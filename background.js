console.log("Got to background.js. Are you happy?");

function sendToConsole() {
	console.log("Got to the callback");
}
window.addEventListener("load", sendToConsole);

window.addEventListener("clicked",sendToConsole);

document.addEventListener("clicked",sendToConsole);


window.addEventListener("click", sendToConsole);

document.addEventListener("click", sendToConsole)

document.addEventListener("contextmenu",sendToConsole);

browser.addEventListener("click",sendToConsole);
browser.addEventListener("clicked",sendToConsole);

document.getElementById("messagepane").addEventListener("click",sendToConsole)
document.getElementById("messagepane").addEventListener("clicked",sendToConsole)
/* document.addEventListener("click", (e) => {

  
    function beastNameToURL(beastName) {
      switch (beastName) {
        case "Frog":
          return browser.runtime.getURL("beasts/frog.jpg");
        case "Snake":
          return browser.runtime.getURL("beasts/snake.jpg");
        case "Turtle":
          return browser.runtime.getURL("beasts/turtle.jpg");
      }
    }
}) */