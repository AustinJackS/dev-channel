// ==UserScript==
// @name        Better_Discord
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://discordapp.com/channels/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function loadvidcall() {
	call=true;
	msg=document.getElementsByClassName("messages scroller")[0];
	room_name=window.location.href.split("/")[4];
	x=document.createElement("iframe");
	x.width="100%";
	x.height="100%";
	x.src="https://appear.in/"+room_name+"?skipCamPrimer";
	msg.append(x);
}
function ld() {
	y=document.createElement('button');
	y.onclick=loadvidcall;
	y.innerHTML="Join Video Call!";
	document.getElementsByClassName("title-wrap title-wrap-dark")[0].insertBefore(y, document.getElementsByClassName("title-wrap title-wrap-dark")[0].firstChild);
	console.log("run");
}
setTimeout(ld, 5000);
})();
