document.addEventListener("DOMContentLoaded", function () {
    var jobsList = document.getElementById("jobs-list");
    
    async function getData() {
        const url = "http://localhost:5083/api/Jobs/PendingJobs";
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
          
          const json = await response.json();
          
          for(let i =0;i<json.length;i++)
          {
            const job = json[i];
            var JobTitle = document.createElement('div');
            JobTitle.classList.add("JobTitle");
            JobTitle.innerText = `${job.title}`;

            var Description = document.createElement('div')
            Description.classList.add("Description");
            Description.innerText = `Description:${job.description}`;
            var Company = document.createElement("div");
            Company.classList.add("Company");
            Company.innerText = `Company:${job.companyName}`;
            var Salary = document.createElement('div');
            Salary.classList.add("Salary");
            Salary.innerText = `Salary:${job.salary}`;
            
            //leftside
            var leftSide = document.createElement('div');
            leftSide.classList.add('left');
            leftSide.appendChild(JobTitle);
            leftSide.appendChild(Description);
            leftSide.appendChild(Company);
            leftSide.appendChild(Salary);

            //rightside
            var rightside = document.createElement('div');
            rightside.classList.add("right");
            var addBtn = document.createElement("button");
            addBtn.classList.add("Add")
            addBtn.classList.add("OptBtn");
            addBtn.innerText = `Add`;
            
            addBtn.addEventListener("click", async () => {
            try {
                const res = await fetch(`http://localhost:5083/api/Jobs/ApproveJob/${job.jobId}`, {
                method: "PUT"
                });

                if (!res.ok) throw new Error("Failed to approve job");
                
                singleJobsCont.remove();
            } catch (err) {
                console.error("Error approving job:", err.message);
            }
            });
            var denyBtn = document.createElement("button")
            denyBtn.classList.add("Deny");
            denyBtn.classList.add("OptBtn");
            denyBtn.innerText = `Deny`;
            denyBtn.addEventListener("click", async () => {
                try {
                    const res = await fetch(`http://localhost:5083/api/Jobs/DenyJob/${job.jobId}`, {
                        method: "DELETE"
                    });

                    if (!res.ok) throw new Error("Failed to deny job");
                    
                    singleJobsCont.remove(); // Remove denied job from view
                } catch (err) {
                    console.error("Error denying job:", err.message);
                }
                });
            rightside.appendChild(addBtn)
            rightside.appendChild(denyBtn);

            //JobContainer
            var singleJobsCont = document.createElement('div');
            singleJobsCont.classList.add("singleJob")
            singleJobsCont.appendChild(leftSide);
            singleJobsCont.appendChild(rightside);
            jobsList.appendChild(singleJobsCont);
          }
        } catch (error) {
          console.error(error.message);
          jobsList.innerText = "No Jobs are available at the moment"
        }
      }
      getData();



      function addjobFunction(add)
      {
        var btns = document.querySelectorAll(add)
        btns.forEach(btn =>{
            btn.addEventListener('click',function(){

            });
        });
      }
});

