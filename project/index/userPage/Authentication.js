document.addEventListener('DOMContentLoaded',function(){
    let switchToLogin = document.querySelector('.switchtoLogIn');
    let switchToSignUp = document.querySelector('.switchtoSignUp');
    let registerForm = document.getElementById('registerForm');
    let recruiterAuth = document.querySelector(".recruiterAuth");
    let loginForm = document.getElementById('loginForm');

    switchToLogin.addEventListener('click',function(){
        loginForm.classList.remove('hiddenForm');
        registerForm.classList.add('hiddenForm');
    });
    switchToSignUp.addEventListener('click',function(){
        registerForm.classList.remove('hiddenForm');
        loginForm.classList.add('hiddenForm');
    });
    recruiterAuth.addEventListener("click",function(){
        window.location = "/FrontendBachelor/project/index/userPage/RecruiterAuth.html";
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

          fetch("http://localhost:5083/api/auth/register",{
            method:'POST',
            headers: 
            {
                "Content-Type" : 'application/json',
            },
            body:JSON.stringify(userData)
          })
          .then(response => {
            if (!response.ok) {
                
                throw new Error("Register failed");
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem("token",data.token);
            localStorage.setItem("firstName", data.firstname);
            localStorage.setItem("lastName", data.lastName);
            localStorage.setItem("email", data.mail);
            localStorage.setItem("role",data.role);
            localStorage.setItem("Id",data.id);
            window.location.href = "/project/index/userPage/LoggedIn.html";
        })
        .catch(error => {
            alert("Invalid email or password.");
        });
          
        
    });
    
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
    
        const email = document.getElementById("loginemail").value.trim();
        const password = document.getElementById("loginpassword").value;
    
        const LoginData = {
            email: email,
            password: password
        };
    
        fetch("http://localhost:5083/api/auth/login", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(LoginData)
        })
        .then(response => {
            if (!response.ok) {
                
                throw new Error("Login failed");
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem("token",data.token);
            localStorage.setItem("firstName", data.firstname);
            localStorage.setItem("lastName", data.lastName);
            localStorage.setItem("email", data.mail);
            localStorage.setItem("ExpectedSalary",data.expectedSalary);
            localStorage.setItem("Experience",data.experience);
            localStorage.setItem("skills",data.skills);
            localStorage.setItem("role",data.role);
            localStorage.setItem("Id",data.id);
            window.location.href = "/project/index/userPage/LoggedIn.html";
        })
        .catch(error => {
            console.log(error);
            alert("Invalid email or password.");
        });
    });
    





});