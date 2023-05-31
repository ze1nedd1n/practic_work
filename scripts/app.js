const email = document.querySelector("input[name=email]");
const password = document.querySelector("input[name=password]");

const reigisteredUsers = [
    ["admin", "1234qwer"],
];



function validate(email, password){
    const logUsers = [
    [email, password],
]
    if (logUsers == reigisteredUsers){
        return true;
    }
    else{
        return false;
    }
}

button.addEventListener("click", validate);  

  form.addEventListener('submit', function(e){
    e.preventDefault();
    var email = inputs["email"].value;
    var password = inputs["password"].value;  
      if (!validate(email, password)){        
        alert('Неверный логин или пароль');
      } else {      
        alert('Верные данные');
      }
  });