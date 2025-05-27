document.addEventListener("DOMContentLoaded", function () {
    const firstName = document.querySelector(".FirstName");
    const lastName = document.querySelector(".LastName");
    const Email = document.querySelector(".Email");
    const sallary = document.querySelector(".ExpectedSallary");
    const Experience = document.querySelector(".Experience");
    const skills = document.querySelector(".Skills");
    const buttonLogOut = document.querySelector(".logOutBtn");
    const goHome = document.querySelector(".GoToHome");
    const UpdateDetails = document.querySelector(".UpdateDetails");
    const modalOverlay = document.querySelector(".detailsOverlay");
    const cancelBtn = document.getElementById("cancelUpdate");
    const UpdateBtn = document.getElementById("submitUpdate");




    const inputSalary = document.getElementById("inputSalary");
    const inputExperience = document.getElementById("inputExperience");
    const inputSkills = document.getElementById("inputSkills");

    
    const detailsModel = 
    {
        salary : inputSalary,
        exp : inputExperience,
        inpSkills : inputSkills,
    }

    cancelBtn.addEventListener("click",function(){
        modalOverlay.classList.add("hidden");
        inputSalary.value = "";
        inputExperience.value = "";
        inputSkills.value = "";
    });
    

    const token = localStorage.getItem("token");
    UpdateDetails.addEventListener("click",function(){
        if(modalOverlay.classList.contains("hidden"))
         {
            inputSalary.value = sallary.textContent;
            inputExperience.value = Experience.textContent;
            inputSkills.value = skills.textContent;
            modalOverlay.classList.remove("hidden");
         }   
    });

    UpdateBtn.addEventListener("click", function() {
        const detailsModel = {
            ExpectedSalary: inputSalary.value,
            Experience: inputExperience.value,
            Skills: inputSkills.value
        };
    
        fetch("http://localhost:5083/api/auth/update-details", {
            method: 'PUT',
            headers: {
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(detailsModel)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error Occurred");
            }
            return response.json();
        })
        .then(data => {
            if (sallary) sallary.textContent = data.expectedSalary || inputSalary.value;
            if (Experience) Experience.textContent = data.experience || inputExperience.value;
            if (skills) skills.textContent = data.skills || inputSkills.value;
    
            localStorage.setItem("ExpectedSalary", data.expectedSalary || inputSalary.value);
            localStorage.setItem("Experience", data.experience || inputExperience.value);
            localStorage.setItem("skills", data.skills || inputSkills.value);
    
            modalOverlay.classList.add("hidden");
        })
        .catch(error => {
            console.log(error);
            alert("Failed to update details.");
        });
    });





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
        localStorage.removeItem("ExpectedSalary");
        localStorage.removeItem("Experience");
        localStorage.removeItem("skills")
        window.location.href = "/project/index/index.html";
    });

    goHome.addEventListener("click", function () {
        window.location.href = "/project/index/index.html";
    });

    setUserData();
});
