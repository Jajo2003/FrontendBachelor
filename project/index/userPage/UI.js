document.addEventListener("DOMContentLoaded", function () {
    const firstName = document.querySelector(".FirstName");
    const lastName = document.querySelector(".LastName");
    const Email = document.querySelector(".Email");

    function setUserData() {
        const fName = localStorage.getItem("firstName");
        const lName = localStorage.getItem("lastName");
        const email = localStorage.getItem("email");

        if (!fName || !lName || !email) {
            alert("User not logged in, redirecting...");
            window.location.href = "/project/index/userPage/user.html";
            return;
        }

        if (firstName) firstName.textContent = fName;
        if (lastName) lastName.textContent = lName;
        if (Email) Email.textContent = email;
    }

    setUserData();
});
