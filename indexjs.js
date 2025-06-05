document.addEventListener('DOMContentLoaded', function () {
    //Header Footer Styles//
    var opts = document.querySelectorAll(".option");
    var header = document.getElementById("navbar");
    var footer = document.getElementById("Foot");
    var rightSide = document.querySelector(".right");
    var applyBtn = document.querySelector(".apply");
    var userName = document.querySelector(".UserName");


    function checkAuth()
    {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");
        if(!token)
            return;
        else
        {
            applyBtn.classList.add("hiddenSection");
            userName.textContent = `Hello, ${localStorage.getItem("firstName")}`;
            userName.addEventListener("click",function(){
                if(role == "Recruiter")
                {
                    window.location.href = "Admin/Recruiter/recruiter.html";
                }
                else if(role == "Student")
                {
                    window.location.href = "userpage/authentication.html";
                }
                
            });
        }
    }

    checkAuth();
    window.addEventListener('scroll',function(){
        if (window.innerWidth < 630) return;
        var headerScrollHeight = header.scrollHeight;
        if(window.scrollY > headerScrollHeight)
            {
                header.classList.remove("stillNavbar");
                header.classList.add("fixedNavBar");
            }
            else
            {
                header.classList.add("stillNavbar");
                header.classList.remove("fixedNavBar");
            }
        });

        function fixFooter()
        {
            footer.style +=`position: absolute;
            height: 10vh;
            left: 0;
            right: 0;
            bottom: 0;`;
        }
        fixFooter();

    //Header Footer Styles//


    //navigacia

    var homeSection = document.querySelector(".HomeSection");
    var jobsSection = document.querySelector(".JobsSection");
    var aboutSection = document.querySelector(".AboutSection");

    var sections = {
        "Home": homeSection,
        "Jobs": jobsSection,
        "About": aboutSection
    };

    function showSection(tab) {
    
        Object.values(sections).forEach(section => section.classList.add("hiddenSection"));

        if (sections[tab]) {
            sections[tab].classList.remove("hiddenSection");
        }


        localStorage.setItem("activeTab", tab);
    }

    
    opts.forEach(opt => {
        opt.addEventListener("click", function () {
            opts.forEach(o => o.classList.remove("activeOpt"));
            opt.classList.add("activeOpt");
            fixFooter();
            showSection(opt.id);
        });
    });
    //navigacia
    
   
    applyBtn.addEventListener("click",function(){
        window.location.href = "project/index/userPage/authentication.html"
    });

    //inaxeba actiuri seqcia localur mexsierebashi
    var activeTab = localStorage.getItem("activeTab") || "Home";
    document.getElementById(activeTab).classList.add("activeOpt");
    showSection(activeTab);


        function getNavbar()
        {
            if(window.innerWidth < 630)
                {
                    header.classList.remove("stillNavbar");
                    header.classList.remove("fixedNavBar");
                    header.classList.add("stillNavbarResponsive");
                }
                else
                {
                    header.classList.remove("fixedNavBar");
                    header.classList.remove("stillNavbarResponsive");
                    header.classList.add("stillNavbar");
                }
        }
       getNavbar();

       window.addEventListener('resize',function(){
        
        


        getNavbar();
       })
   
    var hideNavbar = document.getElementById("hideNavbar");
    var showNavbar = document.getElementById("showNavbar");
    hideNavbar.addEventListener("click",function(){
        if(header.classList.contains("stillNavbarResponsive"))
        {
            
            header.classList.add("stillNavbarHidden");
            header.classList.remove("stillNavbarResponsive");
        }
    });
    showNavbar.addEventListener("click",function(){
        if(header.classList.contains("stillNavbarHidden"))
            {
                header.classList.remove("stillNavbarHidden");
                header.classList.add("stillNavbarResponsive");   
            }
    });

});
