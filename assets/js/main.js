/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //Cunado nosotros hacemos clic en el nav__link se sale el show-men
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== HOME TYPED JS ===============*/
const typedHome = new Typed('#home-typed',{
    strings: ['Senior SDET','QA Automation Engineer','Freelancer'],
    typeSpeed:80,
    backSpeed:40,
    backDelay:2000,
    loop:true,
    cursorChar:'_',
})

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')

    if (!header) return

    if (window.scrollY >= 20) {
        header.classList.add('shadow-header')
    } else {
        header.classList.remove('shadow-header')
    }
}
window.addEventListener('scroll',shadowHeader)
shadowHeader()

/*=============== CONTACT EMAIL JS ===============*/ 
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

/*const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_...','','',)
    .then(()=>{
        contactMessage.textContent = 'Mensaje enviado correctamente'
        setTimeout(() =>{
            contactMessage.textContent = ''
        },5000)
        contactForm.reset();
    },()=>{
        contactMessage.textContent = 'Mensaje no enviado';
    })
}*/
/*contactForm.addEventListener('submit',sendEmail)*/
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    console.log('scrollUp ejecutándose', window.scrollY);
    const element = document.getElementById('scroll-up');
    if (!element) return;

    if (window.scrollY >= 350) {
        element.classList.add('show-scroll');
    } else {
        element.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll',scrollUp)
scrollUp()
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58
        const sectionId = current.getAttribute('id')

        const sectionsClass = document.querySelector(
            '.nav__menu a[href*="' + sectionId + '"]'
        )

        if (!sectionsClass) return

        if (
            scrollDown > sectionTop &&
            scrollDown <= sectionTop + sectionHeight
        ) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000
})
sr.reveal('.home__content, .resume__content:nth-child(1), .footer__container')
sr.reveal('.home__data, .resume__content:nth-child(2)',{delay:300, origin: 'bottom'})

sr.reveal('.about__content, .contact__content',{origin: 'bottom'})
sr.reveal('.about__image, .contact__form',{delay:300})

sr.reveal('.projects__card',{interval:100})