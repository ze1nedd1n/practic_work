
const reigisteredUsers = {
    email: "admin",
    password: "1234qwer"

};

var email = document.getElementById("email");
var password = document.getElementById("password");
/*
var bttn = document.getElementById("submitButton");
*/
var logUsers = {
    email: document.getElementById("email") ,
    password: document.getElementById("password")

};


function isValid() {
    
    if(logUsers[email] == reigisteredUsers[email] && logUsers[password]==reigisteredUsers[password]){
        console.log("yes");
    }
    else{
        console.log("no");
    }
}

/*
bttn.addEventListener("click", isValid);
*/