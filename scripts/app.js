

  document.getElementById('submitButton').onclick = function(){
    let login = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if(login == 'admin' && password == '1234'){
        window.location.href = '/pages/main.html';
    }
    else {
        alert('Incorrect password or login');
    }
  }