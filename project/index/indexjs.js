document.addEventListener('DOMContentLoaded',function(){
    var opts = document.querySelectorAll("pageLink");
    var header = document.getElementById("navbar");
    var footer = document.getElementById("Foot");
    
    opts.forEach(opt =>{
        
        opt.addEventListener("click",function(){
            
            opts.forEach(o => o.classList.remove("activeOpt"));

            opt.classList.add("activeOpt");
        });


    });

    
    footer.style +=`position: absolute;
    height: 10vh;
    left: 0;
    right: 0;
    bottom: 0;`;

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
  


});