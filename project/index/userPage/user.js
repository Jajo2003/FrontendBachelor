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
    
    registerForm.addEventListener("submit",function(event){
        event.preventDefault();
        const firstName = document.getElementById("FirstName").value.trim();
        const lastName = document.getElementById("LastName").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const university = document.getElementById("university").value.trim();
        if(password != confirmPassword)
        {
            alert("Password should match");
            return;
        }
        const userData = {
            firstName,
            lastName,
            email,
            password,
            university
          };

          fetch("backend",{
            method:'POST',
            headers: 
            {
                "Content-Type" : 'application/json',
            },
            body:JSON.stringify(userData)
          });
          
        
    })
    loginForm.addEventListener("submit",function(event){
        event.preventDefault();
        const email = document.getElementById("loginemail").value.trim();
        const password = document.getElementById("loginpassword").value;

        const LoginData = 
        {
            mail : email,
            pass : password
        }

    })
    


});