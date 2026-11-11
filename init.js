console.log("Custom extension loaded")
const sourceURL = chrome.runtime.getURL('')

var script = document.createElement('script');
script.src = sourceURL+'scripts/test2.js';
script.dataset.sourceURL = sourceURL
document.body.appendChild(script);

var animations = document.createElement('script');
animations.src = sourceURL+'scripts/animations.js';
animations.dataset.sourceURL = sourceURL
document.body.appendChild(animations);

var moveAnimations = document.createElement('script');
moveAnimations.src = sourceURL+'scripts/move-anim.js';
moveAnimations.dataset.sourceURL = sourceURL
document.body.appendChild(moveAnimations);

var style = document.createElement('link')
style.rel = "stylesheet"
style.href = sourceURL + "custom_style.css"
document.head.appendChild(style)