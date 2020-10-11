document.addEventListener("DOMContentLoaded", function(){

var NavMenuBtn = document.getElementById('nav-menu-btn');
var NavMenuWrapper = document.getElementById('nav-menu-wrapper');
var TopNavMenuBtnLine = document.getElementById('top-nav-menu-btn-line');
var BottomNavMenuBtnLine = document.getElementById('bottom-nav-menu-btn-line');
var NavMenuLabel = document.getElementById('nav-menu-label');

// var addPropertyValue = (el, property, value) =>{
//     el.style.property = value;
// }

NavMenuBtn.addEventListener('click', () =>{
    if(NavMenuWrapper.classList.contains('hidden')){
        // Fades in the navigation bar
        NavMenuWrapper.classList.remove('hidden');
        NavMenuWrapper.classList.remove('fade-out-nav-bar');
        NavMenuWrapper.classList.add('fade-in-nav-bar');

        // Transitions the navigation menu lines to an X.
        if(TopNavMenuBtnLine.classList.contains('off-state')){
            TopNavMenuBtnLine.classList.remove('off-state');
            TopNavMenuBtnLine.classList.add('top-nav-btn-icon-transition');
        }
        if(BottomNavMenuBtnLine.classList.contains('off-state')){
            BottomNavMenuBtnLine.classList.remove('off-state');
            BottomNavMenuBtnLine.classList.add('bottom-nav-btn-icon-transition');
        }
        // add transition styles for the navigation menu label
        NavMenuLabel.style.opacity = '0';
        NavMenuLabel.style.transform = 'translateX(-20px)';
    } else{
        // Fades out the navigation bar
        NavMenuWrapper.classList.add('hidden');
        NavMenuWrapper.classList.add('fade-out-nav-bar');
        NavMenuWrapper.classList.remove('fade-in-nav-bar');

        if(TopNavMenuBtnLine.classList.contains('off-state') == false){
            TopNavMenuBtnLine.classList.add('off-state');
            TopNavMenuBtnLine.classList.remove('top-nav-btn-icon-transition');
        }

        if(BottomNavMenuBtnLine.classList.contains('off-state') == false){
            BottomNavMenuBtnLine.classList.add('off-state');
            BottomNavMenuBtnLine.classList.remove('bottom-nav-btn-icon-transition');
        }
        // add transition styles for the navigation menu label
        NavMenuLabel.style.opacity = '1';
        NavMenuLabel.style.transform = 'translateX(0px)';
    }
});

}); //document
