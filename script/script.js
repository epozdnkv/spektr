"use strict";
window.onload = function(){
    document.body.scrollTop = 0;
}
if(location.hash) history.replaceState({}, document.title, location.href.split('#')[0]);