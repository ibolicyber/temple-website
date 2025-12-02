const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}      

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader) 


gsap.from('.home__img-1',     5 ,   { opacity: 0, x:  400})
gsap.from('.home__img-6',     1.5 , { opacity: 0, y:  200, delay:  .1, ease: 'back.out(1.5)'})
gsap.from('.home__img-3',     1.5 , { opacity: 0, y:  400, delay:  .3, ease: 'back.out(1.5)'})
gsap.from('.home__img-5',     1.5 , { opacity: 0, y:  400, delay:  .5, ease: 'back.out(1.5)'})
gsap.from('.home__img-2',     1.5 , { opacity: 0, y:  400, delay:  .8, ease: 'back.out(1.5)'})
gsap.from('.home__img-4',     1.5 , { opacity: 0, y:  200, delay: 1.8, ease: 'back.out(1.5)'})
gsap.from('.home__data' ,     1.5 , { opacity: 0, y: -100, delay: 2.5, ease: 'back.out(1.5)'})
gsap.from('.home__lantern-1', 1.5 , { opacity: 0, y:   70, delay:  .3, ease: 'back.out(1.5)'})
gsap.from('.home__lantern-2', 1.5 , { opacity: 0, y:  -70, delay: 3.5, ease: 'back.out(1.5)'})

