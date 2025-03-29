document.addEventListener("DOMContentLoaded",function(){
    var jobList = document.querySelector(".jobsList");


    async function getData() {
        const url = "http://localhost:5083/api/Jobs";
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
      
          const json = await response.json();
          console.log(json[0]);
          
          for(let i =0;i<json.length;i++)
          {
            //Title
            var jobTitle = document.createElement('div');
            jobTitle.classList.add("jobTitle");
            jobTitle.innerText = json[i].title;
            //Company
            var jobCompany = document.createElement('div');
            jobCompany.classList.add("companyName");
            jobCompany.innerText = json[i].companyName;
            //Description
            var jobDescription = document.createElement('div');
            jobDescription.classList.add("jobDescription");
            jobDescription.innerText= json[i].description;
            //btnContainer
            var applyBtn = document.createElement("button");
            applyBtn.classList.add("applyJobBtn");
            applyBtn.innerText = "Apply Now";
            var lvl = document.createElement("div");
            lvl.classList.add("lvl");
            lvl.innerText ="Level:"+json[i].qualifyLevel;
            //btnContainer
            var btnContainer = document.createElement("div");
            btnContainer.classList.add("btnCont");
            btnContainer.appendChild(applyBtn);
            btnContainer.appendChild(lvl);

            
            var jobDetails = document.createElement('div');
            jobDetails.classList.add("job-details");
            jobDetails.appendChild(jobTitle);
            jobDetails.appendChild(jobCompany);
            jobDetails.appendChild(jobDescription);

            var jobCard = document.createElement('div');
            jobCard.classList.add("jobCard");
            jobCard.appendChild(jobDetails);
            jobCard.appendChild(btnContainer);

            jobList.appendChild(jobCard);
          }
          

        } catch (error) {
          console.error(error.message);
        }
      }
      getData();
})
