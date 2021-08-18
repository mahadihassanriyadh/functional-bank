document.getElementById('login-submit').addEventListener('click', function(){
    //get user's email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // get user's password
    const passField = document.getElementById('user-password');
    const userPass = passField.value;
    

    //check email and password
    if(userEmail == 'mahadihassanriyadh1@gmail.com' && userPass == 'secret'){
        window.location.href = 'banking.html';
    }
    else if(userEmail != 'mahadihassanriyadh1@gmail.com'){
        alert('invalid email address');
    }
    else{
        alert('invalid password');
    }
})


