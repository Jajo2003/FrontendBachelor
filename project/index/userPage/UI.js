document.addEventListener("DOMContentLoaded", function () {
    const firstName = document.querySelector(".FirstName");
    const lastName = document.querySelector(".LastName");
    const Email = document.querySelector(".Email");
    const buttonLogOut = document.querySelector(".logOutBtn");
    const goHome = document.querySelector(".GoToHome");
    function setUserData() {
        const fName = localStorage.getItem("firstName");
        const lName = localStorage.getItem("lastName");
        const email = localStorage.getItem("email");
        const token = localStorage.getItem("token");
        if (!token) {   
            window.location.href = "/project/index/userPage/Authentication.html";
            return;
        }

        if (firstName) firstName.textContent = fName;
        if (lastName) lastName.textContent = lName;
        if (Email) Email.textContent = email;
    }
    buttonLogOut.addEventListener("click",function(){
        localStorage.removeItem("token");
        window.location.href = "/project/index/index.html";
    });
    goHome.addEventListener("click",function(){
        window.location.href = "/project/index/index.html";
    });

    setUserData();
});
