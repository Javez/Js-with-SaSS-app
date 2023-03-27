import React from "react";
import ReactDOM from "react-dom";

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if(currentScrollPos > 500) {
        ReactDOM.getElementByClassName("background-scroll-line").style.height = "100%"; 
    }
}