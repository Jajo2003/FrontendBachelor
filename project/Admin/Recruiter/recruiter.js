document.addEventListener("DOMContentLoaded", function () {
    const token = localStorage.getItem("token");
    if (!token) {
        
        window.location.href = "/project/index/userPage/Authentication.html";
        return;
    }

  
    var jobForm = document.getElementById("jobForm");
    jobForm.addEventListener("submit",function(event){
        event.preventDefault();
        const Title = document.getElementById("jobTitle").value.trim();
        const Description = document.getElementById("description").value.trim();
        const CompanyName = document.getElementById("company").value.trim();
        const Salary = document.getElementById("salary").value.trim();
        const Location = document.getElementById("location").value.trim();
        const QualificationLevel = document.getElementById("Qualification").value.trim();

        const jobData = {
            Title,
            Description,
            CompanyName,
            Salary,
            Location,
            QualificationLevel,
        }
        fetch("http://localhost:5083/api/Jobs/JobAdd",{
            method:`POST`,
            headers: 
            {
                "Authorization": `Bearer ${token}`,
                "Content-Type" : 'application/json',
            },
            body:JSON.stringify(jobData)
        })
        .then(data => {
        
        document.getElementById("jobTitle").value = "";
        document.getElementById("description").value = "";
        document.getElementById("company").value = "";
        document.getElementById("salary").value = "";
        document.getElementById("location").value = "";
        document.getElementById("Qualification").value = "";
        
        alert("Job posted successfully!");
    })
    .catch(error => {
        alert(error.message);
    });
    });


    // fetch("http://localhost:5083/api/students", {
    //     headers: { "Authorization": `Bearer ${token}` }
    // })
    // .then(res => res.json())
    // .then(data => {
    //     const container = document.getElementById("students-list");
    //     data.forEach(student => {
    //         const div = document.createElement("div");
    //         div.textContent = `${student.firstName} ${student.lastName} - ${student.email}`;
    //         container.appendChild(div);
    //     });
    // });

    document.querySelector(".logOutBtn").addEventListener("click", () => {
        localStorage.removeItem("token");
        window.location.href = "/project/index/index.html";
    });
    
    
});
