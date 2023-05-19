"use strict";

let middleScreen;

window.onscroll = function () {
    pageScroll();
};
function pageScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    
    if(scrolled > 1 && scrolled < 5) {
        document.getElementById("progress-bar-outer1").style.top = -20 + "%";
        document.getElementById("progress-bar-outer1").style.right = 0 + "%";
        document.getElementById("progress-bar-outer1").style.left = 0 + "%";
    }
    if(scrolled > 5 && scrolled < 85) {
        
        document.getElementById("progress-bar-outer1").style.right = null;
        document.getElementById("progress-bar-outer1").style.left = -10 + "%";
    }
    if(scrolled > 85 && scrolled < 90) {
        document.getElementById("progress-bar-outer1").style.right = -20 + "%";
        document.getElementById("progress-bar-outer1").style.left = null;
        
        document.getElementById("progress-bar-outer1").style.top = 0 + "%";
    }
}