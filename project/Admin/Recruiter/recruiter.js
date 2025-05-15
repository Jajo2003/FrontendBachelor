document.addEventListener("DOMContentLoaded", function () {
    const token = localStorage.getItem("token");
    if (!token) {
        
        window.location.href = "/project/index/userPage/Authentication.html";
        return;
    }

    // Example: Fetch students
    fetch("/api/students", {
        headers: { "Authorization": `Bearer ${token}` }
    })
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("students-list");
        data.forEach(student => {
            const div = document.createElement("div");
            div.textContent = `${student.firstName} ${student.lastName} - ${student.email}`;
            container.appendChild(div);
        });
    });

    document.querySelector(".logOutBtn").addEventListener("click", () => {
        localStorage.removeItem("token");
        window.location.href = "/project/index/index.html";
    });
});
