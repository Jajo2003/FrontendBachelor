document.addEventListener('DOMContentLoaded',function(){
    let switchToLogin = document.querySelector('.switchtoLogIn');
    let switchToSignUp = document.querySelector('.switchtoSignUp');
    let registerForm = document.getElementById('registerForm');
    let loginForm = document.getElementById('loginForm')
    switchToLogin.addEventListener('click',function(){
        loginForm.classList.remove('hiddenForm');
        registerForm.classList.add('hiddenForm');
    });
    switchToSignUp.addEventListener('click',function(){
        registerForm.classList.remove('hiddenForm');
        loginForm.classList.add('hiddenForm');
    });


});