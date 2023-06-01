
const reigisteredUsers = {
    email: "admin",
    password: "1234qwer"

};

var email = document.getElementById("email");
var password = document.getElementById("password");

var bttn = document.getElementById("submitButton");

var logUsers = {
    email: email,
    password: password

};


function isValid() {
    
    if(logUsers[email][password] == reigisteredUsers[email][password]){
        console.log("yes");
    }
    else{
        console.log("no");
    }
}


bttn.addEventListener("click", isValid);
