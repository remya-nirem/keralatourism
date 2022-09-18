var ctrl = document.getElementById("searchtxt");
ctrl.setAttribute("hidden","true");

function showcontrol() {    
    ctrl.removeAttribute("hidden","true");    
}
function searchtext() {
    ctrl.setAttribute("hidden","true");    
}

