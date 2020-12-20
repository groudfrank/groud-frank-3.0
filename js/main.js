document.addEventListener("DOMContentLoaded", function(){

var root = document.querySelector(':root');
var ParagraphScaler = document.querySelectorAll('.p-scaler');
var NavMenuBtnWrapper = document.getElementById('nav-menu-btn-wrapper');
var NavMenuWrapper = document.getElementById('nav-menu-wrapper');
var NavMenuBtnLineTop = document.getElementById('nav-menu-btn-line-top');
var NavMenuBtnLineBottom = document.getElementById('nav-menu-btn-line-bottom');
var NavMenuLabel = document.getElementById('nav-menu-label');
var ColorBar = document.querySelectorAll('.color-bar');
var ThemeIconLight = document.getElementById('theme-icon-light');
var ThemeIconDark = document.getElementById('theme-icon-dark');
var FontSizeSelector = document.querySelector('.font-size-selector');
var WorkCanvasImg = document.querySelectorAll('.work-canvas img');
var WindowWidth = 0;
var WindowHeight = 0;

root.style.setProperty('--accent-color-primary', window.localStorage.getItem("selected-color"));

ParagraphScaler.forEach((el)=>{
    el.style.fontSize = window.localStorage.getItem("selected-font-size");
});

window.addEventListener('resize', () =>{
    WindowWidth = innerWidth;
    WindowHeight = innerHeight;
})

// darkTheme = {
//     '--txt-color' : 'var(--txt-color-light)',
//     '--txt-color-alt' : 'var(--txt-color-lighter)',
//     '--bg-color' : 'var(--bg-color-dark)',
//     '--bg-color-contrast' : 'var(--bg-color-dark-contrast)',
//     '--bg-color-alt' : 'var(--bg-color-dark-alt)',
//     '--std-box-shadow' : '0 5.2rem 7.4rem rgba(0,0,0, 0.8)'
// }

// lightTheme = {
//     '--txt-color' : 'var(--txt-color-dark)',
//     '--txt-color-alt' : 'var(--txt-color-darker)',
//     '--bg-color' : 'var(--bg-color-light)',
//     '--bg-color-contrast' : 'var(--bg-color-light-contrast)',
//     '--bg-color-alt' : 'var(--bg-color-light-alt)',
//     '--std-box-shadow' : '0 5.2rem 7.4rem rgba(0,0,0, 0.2)'
// }

var setDarkTheme = () =>{
    root.style.setProperty('--txt-color', 'var(--txt-color-light)');
    root.style.setProperty('--txt-color-alt', 'var(--txt-color-lighter)');
    root.style.setProperty('--bg-color', 'var(--bg-color-dark)');
    root.style.setProperty('--bg-color-contrast', 'var(--bg-color-dark-contrast)');
    root.style.setProperty('--bg-color-alt', 'var(--bg-color-dark-alt)');
    root.style.setProperty('--std-box-shadow', '0 5.2rem 7.4rem rgba(0,0,0, 0.8)');
    root.style.setProperty('--transparent-panel', 'rgba(0, 0, 0, 0.6)');
}

var setLightTheme = () =>{
    root.style.setProperty('--txt-color', 'var(--txt-color-dark)');
    root.style.setProperty('--txt-color-alt', 'var(--txt-color-dark)');
    root.style.setProperty('--bg-color', 'var(--bg-color-light)');
    root.style.setProperty('--bg-color-contrast', 'var(--bg-color-light-contrast)');
    root.style.setProperty('--bg-color-alt', 'var(--bg-color-light-alt)');
    root.style.setProperty('--std-box-shadow', '0 5.2rem 7.4rem rgba(0,0,0, 0.2)');
    root.style.setProperty('--transparent-panel', 'rgba(220, 220, 220, 0.6)');
}

ThemeIconLight.addEventListener('click', ()=>{
    setLightTheme();
});

ThemeIconDark.addEventListener('click', ()=>{
    setDarkTheme();
});

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
        root.style.setProperty('--accent-color-primary', color);
    })
});

FontSizeSelector.addEventListener('change',(event)=>{
    var option;
    option = event.target.value;
    option = option.toLowerCase();
    ParagraphScaler.forEach((el)=>{
        switch(option){
            case 'small':
                el.style.fontSize = 'small';
                window.localStorage.setItem("selected-font-size", el.style.fontSize);
                break;
            case 'medium':
                el.style.fontSize = 'large';
                window.localStorage.setItem("selected-font-size", el.style.fontSize);
                break;
            case 'large':
                el.style.fontSize = 'x-large';
                window.localStorage.setItem("selected-font-size", el.style.fontSize);
                break;
            case 'default':
                el.style.fontSize = 'initial';
                window.localStorage.setItem("selected-font-size", el.style.fontSize);
                break;
            default:
                console.log('This is not an option');
        }
    });
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
