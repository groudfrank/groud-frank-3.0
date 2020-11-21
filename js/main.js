document.addEventListener("DOMContentLoaded", function(){

var root = document.querySelector(':root');
var NavMenuBtnWrapper = document.getElementById('nav-menu-btn-wrapper');
var NavMenuWrapper = document.getElementById('nav-menu-wrapper');
var NavMenuBtnLineTop = document.getElementById('nav-menu-btn-line-top');
var NavMenuBtnLineBottom = document.getElementById('nav-menu-btn-line-bottom');
var NavMenuLabel = document.getElementById('nav-menu-label');
var ColorBar = document.querySelectorAll('.color-bar');
var WorkCanvasImg = document.querySelectorAll('.work-canvas img');
var WindowWidth = 0;
var WindowHeight = 0;

root.style.setProperty('--accent-color-primary', window.localStorage.getItem("selected-color"));

window.addEventListener('resize', () =>{
    WindowWidth = innerWidth;
    WindowHeight = innerHeight;
})

// var addPropertyValue = (el, property, value) =>{
//     el.style.property = value;
// }

NavMenuBtnWrapper.addEventListener('click', () =>{
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

ColorBar.forEach((el)=>{
    el.addEventListener('click', () =>{
        var styles = getComputedStyle(el);
        var color = styles.backgroundColor;
        window.localStorage.setItem("selected-color", color);
        // root.style.setProperty('--accent-color-primary', window.localStorage.getItem("selected-color"));
        root.style.setProperty('--accent-color-primary', color);
    })
});

var isInViewport = (target) => {
    var bounding = target.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

window.addEventListener('scroll', () =>{
    WorkCanvasImg.forEach(img =>{
        if(isInViewport(img)){
            img.classList.remove('animate-img-out');
            img.classList.add('animate-img-in');
        }else{
            img.classList.remove('animate-img-in');
            img.classList.add('animate-img-out');
        }
    });
});



}); //document
