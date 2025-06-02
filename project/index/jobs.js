document.addEventListener("DOMContentLoaded",function(){
    var jobList = document.querySelector(".jobsList");

    //Jobs- განცხადებების გენერირება.
    async function getData() {
        const url = "http://localhost:5083/api/Jobs";
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
          
          const json = await response.json();
          
          
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
          getApplyBtns(json);

        } catch (error) {
          console.error(error.message);
          jobList.innerText = "No Jobs are available at the moment"
        }
      }
      getData();
      //Overlay გენერირება
      function getApplyBtns(json)
      {
        var btns = document.querySelectorAll(".applyJobBtn");
        btns.forEach((btn,index) =>
          {
           btn.addEventListener("click",function()
          {
          let currentData = json[index];

          let closeBtn = document.createElement("button");
          closeBtn.classList.add('closeOverlay');
          closeBtn.innerText = 'X';
          closeBtn.addEventListener("click",function(){
            document.body.removeChild(overlay);
          });

          //creating components
          let overlayContent = document.createElement('div');
          overlayContent.classList.add("overlay-content");
          
          let jobTitle = document.createElement('h2');
          jobTitle.innerText = currentData.title;
          
          let companyName = document.createElement('div');
          companyName.innerText = currentData.companyName

          let description = document.createElement('div');
          description.innerText = currentData.description;
          
          let salary = document.createElement('div');
          salary.innerText = "Salary:" + Math.floor(currentData.salary) + " GEL";

          let location = document.createElement('div');
          location.innerText = "Location:" + currentData.location;
          
          let jobDate = document.createElement('div');
          let currentDate = new Date(currentData.postedDateFormatted);
          let day = currentDate.getDate();
          let month = currentDate.toLocaleString('default', { month: 'long' });
          jobDate.innerText = `Posted:${day} ${month}`;
          //creating components


          let leftSide = document.createElement("div");
          leftSide.classList.add("overlayLeft");
          let RightSide = document.createElement("div");
          RightSide.classList.add("overlayRight");
          
          leftSide.appendChild(jobTitle);
          leftSide.appendChild(companyName);
          leftSide.appendChild(description);

          RightSide.appendChild(salary);
          RightSide.appendChild(location);
          RightSide.appendChild(jobDate);
          
          let overlay = document.createElement('div');
          overlay.classList.add("overlay");
          overlayContent.appendChild(closeBtn);
          overlayContent.appendChild(leftSide);
          overlayContent.appendChild(RightSide);
          overlay.appendChild(overlayContent);
          document.body.appendChild(overlay);

        
        });
        });
      }
})
