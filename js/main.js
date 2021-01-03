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
var ThemeIconAmoled = document.getElementById('theme-icon-amoled');
var FontSizeSelector = document.querySelector('.font-size-selector');
var WorkCanvasImg = document.querySelectorAll('.work-canvas img');
var logo = document.querySelectorAll('.g-logo'); 
var WindowWidth = 0;
var WindowHeight = 0;
var NodeCheckerErrorMessage = 'does not exist on this HTML page. Just a warning. Carry on!';

// localStorage.clear();

// This function has to be higher up and a biut out of place so that
// any IFFE that calls it will recognize it.
var setLogoColor = (url) =>{
    logo.forEach((el) =>{
        el.src = url;
    });
}

// accent color persistance
root.style.setProperty('--accent-color-primary', window.localStorage.getItem("selected-color"));

// accent color persistance
ParagraphScaler.forEach((el)=>{
    el.style.fontSize = window.localStorage.getItem("selected-font-size");
});

(()=>{
    root.style.setProperty('--txt-color', window.localStorage.getItem('selected-txt-color'));
    // root.style.setProperty('--txt-color-alt', window.localStorage.getItem('selected-txt-color-alt'));
    root.style.setProperty('--bg-color', window.localStorage.getItem('selected-bg-color'));
    root.style.setProperty('--bg-color-contrast', window.localStorage.getItem('selected-bg-color-contrast'));
    root.style.setProperty('--bg-color-alt', window.localStorage.getItem('selected-bg-color-alt'));
    root.style.setProperty('--img-frame-color', window.localStorage.getItem('selected-img-frame-color'));
    root.style.setProperty('--card-frame', window.localStorage.getItem('selected-card-frame'));
    root.style.setProperty('--std-box-shadow', window.localStorage.getItem('selected-std-box-shadow'));
    root.style.setProperty('--transparent-panel', window.localStorage.getItem('selected-transparent-panel'));
    root.style.setProperty('--nav-btn-icon-color', window.localStorage.getItem('selected-nav-btn-icon-color'));
    setLogoColor(window.localStorage.getItem('selected-logo-color'));
})()

window.addEventListener('resize', () =>{
    WindowWidth = innerWidth;
    WindowHeight = innerHeight;
})

var setLightTheme = () =>{
    root.style.setProperty('--txt-color', 'var(--txt-color-dark)');
    // root.style.setProperty('--txt-color-alt', 'var(--txt-color-darker)');
    root.style.setProperty('--bg-color', 'var(--bg-color-light)');
    root.style.setProperty('--bg-color-contrast', 'var(--bg-color-light-contrast)');
    root.style.setProperty('--bg-color-alt', 'var(--bg-color-light-alt)');
    root.style.setProperty('--img-frame-color', '#e9e8e8');
    root.style.setProperty('--card-frame', 'none');
    root.style.setProperty('--std-box-shadow', '0 5.2rem 7.4rem rgba(0,0,0, 0.2)');
    root.style.setProperty('--transparent-panel', 'rgba(246, 245, 245, 0.6)');
    root.style.setProperty('--nav-btn-icon-color', '#333');
    setLogoColor("icon/groud-logo-grey.svg");
};

var setLightThemeCookies = () =>{
    window.localStorage.setItem('selected-txt-color', 'var(--txt-color-dark)');
    // window.localStorage.setItem('selected-txt-color-alt', 'var(--txt-color-darker)');
    window.localStorage.setItem('selected-bg-color', 'var(--bg-color-light)');
    window.localStorage.setItem('selected-bg-color-contrast', 'var(--bg-color-light-contrast)');
    window.localStorage.setItem('selected-bg-color-alt', 'var(--bg-color-light-alt)');
    window.localStorage.setItem('selected-img-frame-color', '#e9e8e8');
    window.localStorage.setItem('selected-card-frame', 'none');
    window.localStorage.setItem('selected-std-box-shadow', '0 5.2rem 7.4rem rgba(0,0,0, 0.2)');
    window.localStorage.setItem('selected-transparent-panel', 'rgba(246, 245, 245, 0.6)');
    window.localStorage.setItem('selected-nav-btn-icon-color', '#333');
    window.localStorage.setItem('selected-logo-color', 'icon/groud-logo-grey.svg');
}

var setDarkTheme = () =>{
    root.style.setProperty('--txt-color', 'var(--txt-color-lighter)');
    // root.style.setProperty('--txt-color-alt', 'var(--txt-color-lighter)');
    root.style.setProperty('--bg-color', 'var(--bg-color-dark)');
    root.style.setProperty('--bg-color-contrast', 'var(--bg-color-dark-contrast)');
    root.style.setProperty('--bg-color-alt', 'var(--bg-color-dark-alt)');
    root.style.setProperty('--img-frame-color', 'var(--bg-color-dark-alt)');
    root.style.setProperty('--card-frame', 'none');
    root.style.setProperty('--std-box-shadow', '0 5.2rem 7.4rem rgba(0,0,0, 0.8)');
    root.style.setProperty('--transparent-panel', 'rgba(0, 0, 0, 0.6)');
    root.style.setProperty('--nav-btn-icon-color', '#fff');
    setLogoColor("icon/groud-logo-white.svg");
};

var setDarkThemeCookies = () =>{
    window.localStorage.setItem('selected-txt-color', 'var(--txt-color-lighter)');
    // window.localStorage.setItem('selected-txt-color-alt', 'var(--txt-color-lighter)');
    window.localStorage.setItem('selected-bg-color', 'var(--bg-color-dark)');
    window.localStorage.setItem('selected-bg-color-contrast', 'var(--bg-color-dark-contrast)');
    window.localStorage.setItem('selected-bg-color-alt', 'var(--bg-color-dark-alt)');
    window.localStorage.setItem('selected-img-frame-color', 'var(--bg-color-dark-alt)');
    window.localStorage.setItem('selected-card-frame', 'none');
    window.localStorage.setItem('selected-std-box-shadow', '0 5.2rem 7.4rem rgba(0,0,0, 0.8)');
    window.localStorage.setItem('selected-transparent-panel', 'rgba(0, 0, 0, 0.6');
    window.localStorage.setItem('selected-nav-btn-icon-color', '#fff');
    window.localStorage.setItem('selected-logo-color', 'icon/groud-logo-white.svg');
}

var setAmoledTheme = () =>{
    root.style.setProperty('--txt-color', '#ffffff');
    // root.style.setProperty('--txt-color-alt', 'var(--txt-color-lighter)');
    root.style.setProperty('--bg-color', '#000000');
    root.style.setProperty('--bg-color-contrast', '#080808');
    root.style.setProperty('--bg-color-alt', '#080808');
    root.style.setProperty('--img-frame-color', '#333');
    root.style.setProperty('--card-frame', 'solid 0.2rem #111111');
    root.style.setProperty('--std-box-shadow', 'none');
    root.style.setProperty('--transparent-panel', 'rgba(0, 0, 0, 0.6)');
    root.style.setProperty('--nav-btn-icon-color', '#fff');
    setLogoColor("icon/groud-logo-white.svg");
};

var setAmoledThemeCookies = () =>{
    window.localStorage.setItem('selected-txt-color', '#ffffff');
    // window.localStorage.setItem('selected-txt-color-alt', 'var(--txt-color-lighter)');
    window.localStorage.setItem('selected-bg-color', '#000000');
    window.localStorage.setItem('selected-bg-color-contrast', '#080808');
    window.localStorage.setItem('selected-bg-color-alt', '#080808');
    window.localStorage.setItem('selected-img-frame-color', '#333');
    window.localStorage.setItem('selected-card-frame', 'solid 0.2rem #111111');
    window.localStorage.setItem('selected-std-box-shadow', 'none');
    window.localStorage.setItem('selected-transparent-panel', 'rgba(0, 0, 0, 0.6');
    window.localStorage.setItem('selected-nav-btn-icon-color', '#fff');
    window.localStorage.setItem('selected-logo-color', 'icon/groud-logo-white.svg');
}

// if(ThemeIconLight != null){
//     ThemeIconLight.addEventListener('click', ()=>{
//         setLightTheme();
//         setLightThemeCookies();
//     });
// }else{
//     console.log('ThemeIconLight ' + NodeCheckerErrorMessage);
// }

// if(ThemeIconDark != null){
//     ThemeIconDark.addEventListener('click', ()=>{
//         setDarkTheme();
//         setDarkThemeCookies();
//     });
// }else{
//     console.log('ThemeIconDark ' + NodeCheckerErrorMessage);
// }

ThemeIconLight.addEventListener('click', ()=>{
    setLightTheme();
    setLightThemeCookies();
});

ThemeIconDark.addEventListener('click', ()=>{
    setDarkTheme();
    setDarkThemeCookies();
});

ThemeIconAmoled.addEventListener('click', ()=>{
    setAmoledTheme();
    setAmoledThemeCookies();
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
            // root.style.setProperty('--nav-btn-icon-color', '#fff');
        }
        if(NavMenuBtnLineBottom.classList.contains('off-state')){
            NavMenuBtnLineBottom.classList.remove('off-state');
            NavMenuBtnLineBottom.classList.add('bottom-nav-btn-icon-transition');
            // root.style.setProperty('--nav-btn-icon-color', '#fff');
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
            // root.style.setProperty('--nav-btn-icon-color', 'initial');
        }

        if(NavMenuBtnLineBottom.classList.contains('off-state') == false){
            NavMenuBtnLineBottom.classList.add('off-state');
            NavMenuBtnLineBottom.classList.remove('bottom-nav-btn-icon-transition');
            // root.style.setProperty('--nav-btn-icon-color', 'initial');
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


if(FontSizeSelector != null){
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
}else{
    console.log('FontSizeSelector ' + NodeCheckerErrorMessage);
}

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
