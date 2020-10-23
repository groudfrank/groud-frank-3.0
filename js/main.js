document.addEventListener("DOMContentLoaded", function(){

var root = document.querySelector(':root');
var NavMenuBtn = document.getElementById('nav-menu-btn');
var NavMenuWrapper = document.getElementById('nav-menu-wrapper');
var NavMenuBtnLineTop = document.getElementById('nav-menu-btn-line-top');
var NavMenuBtnLineBottom = document.getElementById('nav-menu-btn-line-bottom');
var NavMenuLabel = document.getElementById('nav-menu-label');
var ColorBar = document.querySelectorAll('.color-bar');

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
        if(NavMenuBtnLineTop.classList.contains('off-state')){
            NavMenuBtnLineTop.classList.remove('off-state');
            NavMenuBtnLineTop.classList.add('top-nav-btn-icon-transition');
        }
        if(NavMenuBtnLineBottom.classList.contains('off-state')){
            NavMenuBtnLineBottom.classList.remove('off-state');
            NavMenuBtnLineBottom.classList.add('bottom-nav-btn-icon-transition');
        }
        // add transition styles for the navigation menu label
        NavMenuLabel.style.opacity = '0';
        NavMenuLabel.style.transform = 'translateX(-20px)';
    } else{
        // Fades out the navigation bar
        NavMenuWrapper.classList.add('hidden');
        NavMenuWrapper.classList.add('fade-out-nav-bar');
        NavMenuWrapper.classList.remove('fade-in-nav-bar');

        if(NavMenuBtnLineTop.classList.contains('off-state') == false){
            NavMenuBtnLineTop.classList.add('off-state');
            NavMenuBtnLineTop.classList.remove('top-nav-btn-icon-transition');
        }

        if(NavMenuBtnLineBottom.classList.contains('off-state') == false){
            NavMenuBtnLineBottom.classList.add('off-state');
            NavMenuBtnLineBottom.classList.remove('bottom-nav-btn-icon-transition');
        }
        // add transition styles for the navigation menu label
        NavMenuLabel.style.opacity = '1';
        NavMenuLabel.style.transform = 'translateX(0px)';
    }
});

ColorBar.forEach(el =>{
    el.addEventListener('click', () =>{
        var styles = getComputedStyle(el);
        var color = styles.backgroundColor
        // console.log(color);
        root.style.setProperty('--accent-color-primary', color);
    })
});

}); //document
