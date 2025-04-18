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
    
    var applyBtn = document.querySelector(".apply");
    applyBtn.addEventListener("click",function(){
        window.location.href = "userPage/user.html"
    })

    //inaxeba actiuri seqcia localur mexsierebashi
    var activeTab = localStorage.getItem("activeTab") || "Home";
    document.getElementById(activeTab).classList.add("activeOpt");
    showSection(activeTab);
});
