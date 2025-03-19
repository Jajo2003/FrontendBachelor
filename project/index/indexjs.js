document.addEventListener('DOMContentLoaded', function () {
    //Header Footer Styles//
    var opts = document.querySelectorAll(".option");
    var header = document.getElementById("navbar");
    var footer = document.getElementById("Foot");

    window.addEventListener('scroll',function(){
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
            console.log(window.scrollY);
        
        });

    footer.style +=`position: absolute;
    height: 10vh;
    left: 0;
    right: 0;
    bottom: 0;`;

    //Header Footer Styles//


    //Navigation

    var homeSection = document.querySelector(".HomeSection");
    var jobsSection = document.querySelector(".JobsSection");
    var recruiterSection = document.querySelector(".RecruitersSection");
    var aboutSection = document.querySelector(".AboutSection");

    var sections = {
        "Home": homeSection,
        "Jobs": jobsSection,
        "Recruiters": recruiterSection,
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

            showSection(opt.id);
        });
    });
    //Navigation
    

    //saving active tab to localstorage to prevent auto reload to main page
    var activeTab = localStorage.getItem("activeTab") || "Home";
    document.getElementById(activeTab).classList.add("activeOpt");
    showSection(activeTab);
});
