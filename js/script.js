var ctrl = document.getElementById("searchtxt");
ctrl.setAttribute("hidden","true");

function showcontrol() {    
    ctrl.removeAttribute("hidden","true");    
}
function searchtext() {
    ctrl.setAttribute("hidden","true");    
}

function validateloginform(){
    var email = document.getElementById("inputEmail");
    var passwd = document.getElementById("inputPassword");

    var emailmsg = document.getElementById("emailmessage");
    var pswdmsg = document.getElementById("passwdmessage");

    emailmsg.innerHTML = "";
    pswdmsg.innerHTML = "";

    var emailvalid = true, passvalid =true;

    if(email.value.trim()==""){
        emailmsg.innerHTML = "Please enter email";
        emailvalid = false;        
    }
    if(!Isemailvalid(email.value)){
        emailmsg.innerHTML = "Please enter valid email";
        emailvalid = false;
    }

    if(passwd.value.trim()==""){
        pswdmsg.innerHTML = "Please enter password";
        passwd.focus();
        passvalid = false;
    }
    else if(passwd.value.length < 8){
        pswdmsg.innerHTML = "Password length should be 8";
        passwd.focus();
        passvalid = false;
    }

    if(emailvalid && passvalid) {
        return true;
    }
    else{
        if(!emailvalid && !passvalid){
            email.focus();
        }
        else if(!emailvalid){
            email.focus();
        }
        else {
            passwd.focus();
        }
        return false;
    }
    
}

function Isemailvalid(email){
    //var regexp = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    var regexp = /^\w+([-.]\w+)*@\w+([-]\w+)*[.]+([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regexp.test(email)){
        return true;
    }
    else {
        return false;
    }
}

function Ispasswordvalid(passwd){
    //var regexp =/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.{8,})$/;
    var regexp =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(regexp.test(passwd)){
        return true;
    }
    else {
        return false;
    }
}

function Isphonenumbervalid(num){
    //var regexp =^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var regexp =/^([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(regexp.test(num)){
        return true;
    }
    else {
        return false;
    }
}

function Isvalidnumberlength(zip){
    var regexp =/^[0-9]{6,6}$/;    
    if(regexp.test(zip)){        
        return true;        
    }
    else {
        return false;
    }
}

