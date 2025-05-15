document.addEventListener("DOMContentLoaded", function () {
    const firstName = document.querySelector(".FirstName");
    const lastName = document.querySelector(".LastName");
    const Email = document.querySelector(".Email");
    const sallary = document.querySelector(".ExpectedSallary");
    const Experience = document.querySelector(".Experience");
    const skills = document.querySelector(".Skills");
    const buttonLogOut = document.querySelector(".logOutBtn");
    const goHome = document.querySelector(".GoToHome");

    function setUserData() {
        const fName = localStorage.getItem("firstName");
        const lName = localStorage.getItem("lastName");
        const email = localStorage.getItem("email");
        const Slry = localStorage.getItem("ExpectedSalary");
        const Exp = localStorage.getItem("Experience");
        const skls = localStorage.getItem("skills");
        const token = localStorage.getItem("token");

        if (!token) {   
            window.location.href = "/project/index/userPage/Authentication.html";
            return;
        }

        if (firstName) firstName.textContent = fName;
        if (lastName) lastName.textContent = lName;
        if (Email) Email.textContent = email;
        if (sallary) sallary.textContent = Slry;
        if (Experience) Experience.textContent = Exp;
        if (skills) skills.textContent = skls;
    }

    buttonLogOut.addEventListener("click", function () {
        localStorage.removeItem("token");
        window.location.href = "/project/index/index.html";
    });

    goHome.addEventListener("click", function () {
        window.location.href = "/project/index/index.html";
    });

    setUserData();
});
