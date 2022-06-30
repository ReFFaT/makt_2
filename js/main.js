const header= document.querySelector('.header');
const menu=document.querySelector('.burger');
const navBurger=document.querySelector('.header__nav');
const navClose=document.querySelector('.header__nav-close');
(function (){
window.onscroll=()=>{
    if((window.pageYOffset <=30) && (navBurger.classList.contains('.header__nav_active'))){
        header.classList.add('header__active');
        ;
    }
    else if(window.pageYOffset >30){
        header.classList.add('header__active');
        
    }
    else if(window.pageYOffset <= 30  && navBurger.classList.contains('header__nav_active')==false){ 
        header.classList.remove('header__active');

    } 
}
}());

menu.addEventListener('click',()=>{
    navBurger.classList.add('header__nav_active');
    header.classList.add('header__active');
    console.log(2);
});
navClose.addEventListener('click',()=>{
    navBurger.classList.remove('header__nav_active');
    header.classList.remove('header__active');
    console.log(3);
    
    
});


// Scroll to anchors
(function () {
    
    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                
                navBurger.classList.remove('header__nav_active');
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
    
}());