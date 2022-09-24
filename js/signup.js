let timeout;
let password = document.getElementById('password');
let pswdstrength = document.getElementById('passwdStrength');
let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{5,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{7,}))');


function StrengthChecker(PasswordParameter){
    // We then change the badge's color and text based on the password strength
    if(strongPassword.test(PasswordParameter)) {
        pswdstrength.style.backgroundColor = "green";
        pswdstrength.textContent = 'Strong';
    } else if(mediumPassword.test(PasswordParameter)){
        pswdstrength.style.backgroundColor = 'orange';
        pswdstrength.textContent = 'Medium';
    } else{
        pswdstrength.style.backgroundColor = 'red';
        pswdstrength.textContent = 'Poor';
    }
}

password.addEventListener("input", () => {

    //The badge is hidden by default, so we show it
    pswdstrength.style.display= 'block'
    clearTimeout(timeout);

    //We then call the StrengChecker function as a callback then pass the typed password to it
    timeout = setTimeout(() => StrengthChecker(password.value), 500);

    //Incase a user clears the text, the badge is hidden again

    if(password.value.length !== 0){
        pswdstrength.style.display != 'block'
    } else{
        pswdstrength.style.display = 'none'
    }
});

function validatesignupform() {
    var email = document.getElementById("emailAddress");
    var passwd = document.getElementById("password");
    var ph = document.getElementById("phoneNumber");
    var zip = document.getElementById("zip");

    var emailmsg = document.getElementById("emailmessage");
    var pswdmsg = document.getElementById("passwdmessage");
    var phmsg = document.getElementById("phmessage");
    var zipmsg = document.getElementById("zipmessage");

    emailmsg.innerHTML = "";
    pswdmsg.innerHTML = "";
    phmsg.innerHTML = "";
    zipmsg.innerHTML = "";

    if(!Isemailvalid(email.value)){
        emailmsg.innerHTML = "Please enter valid email";
        email.focus();
        return false;
    }
    if(!Ispasswordvalid(passwd.value)){
        pswdmsg.innerHTML = "Password should have minimum 8 characters, atleast 1 uppercase character, 1 lowercase character and 1 digit.";
        passwd.focus();
        return false;
    }
    if(!Isphonenumbervalid(ph.value)){
        phmsg.innerHTML = "Must have 10 digits with XXX-XXX-XXXX (- can be . or space)";
        ph.focus();
        return false;
    }
    if(!Isvalidnumberlength(zip.value)) {
        zipmsg.innerHTML = "Must be a 6 digit number";
        zip.focus();
        return false;
    }
    else {
        return true;
    }
}

    function loadStates(){
        var ddStates = document.getElementById("state");

        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", "../india-states.json", true);
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                const data = JSON.parse(this.responseText);
                let option;
                for (let i = 0; i < data.length; i++) {
                    option = document.createElement('option');
                    option.text = data[i].name;
                    option.value = data[i].state_code;
                    ddStates.add(option);
                }
                ddStates.style.display='inline'; 
            }
        };
        xhttp.send();
    }
