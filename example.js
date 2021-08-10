let taggleNavStatus= false;

let taggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar ul a");

    if(taggleNavStatus === false){
        getSidebarUl.style.visibility="visible";
        getSidebar.style.width="120px";
        let arrayLength = getSidebarLinks.length;
        for (let index = 0; index < arrayLength; index++){
            getSidebarLinks[index].style.opacity="1";
        }
        taggleNavStatus = true;
    }
    else if(taggleNavStatus === true){
        getSidebar.style.width="0px";
        let arrayLength = getSidebarLinks.length;
        for (let index = 0; index < arrayLength; index++){
            getSidebarLinks[index].style.opacity="0";
        }
        getSidebarUl.style.visibility="hidden";
        taggleNavStatus = true;
    }
}