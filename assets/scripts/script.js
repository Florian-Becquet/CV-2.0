const homeSectionHeight = document.querySelector('.home__header').offsetHeight;
const homeNav = document.querySelector('.home__nav');

// When the user scrolls down from the top of the document, resize the header's size
function scrollFunction() {
    if (document.body.scrollTop > (homeSectionHeight / 2) || document.documentElement.scrollTop > (homeSectionHeight / 2)) {
        homeNav.classList.add('scroll')
    } else {
        homeNav.classList.remove('scroll')
    }
}

// Tous les blocs timeline - Bloc contenant la date et la flèche servant au déroulement
const timeline = document.querySelectorAll('.parcours__timeline');
// Toutes les icons flèche down - Bloc contenant la flèche du projet
const icons = document.querySelectorAll('.parcours__timeline > ion-icon');
// Tous les blocs info - Bloc contenant l'entièreté d'un projet
const parcoursInfo = document.querySelectorAll('.parcours__info')
// Tous les blocs more - Bloc menu déroulant d'un projet
const parcoursMore = document.querySelectorAll('.parcours__more')

// Permet le déroulement de la section "Parcours"
timeline.forEach(info => {
    info.addEventListener('click', function () {
        if (this.children[1].getAttribute("name") === "arrow-down") {
            parcoursInfo.forEach(parcours => {
                parcours.classList.remove('show__more-info')
            })
            parcoursMore.forEach(parcoursMor => {
                parcoursMor.classList.remove('parcours__more__show')
            })
            icons.forEach(icon => {
                icon.setAttribute("name", "arrow-down");
            })
            this.parentNode.classList.toggle('show__more-info')
            this.nextElementSibling.classList.toggle('parcours__more__show');
        } else {
            this.parentNode.classList.remove('show__more-info')
            this.nextElementSibling.classList.remove('parcours__more__show');
        }
        const arrow = (this.children[1].getAttribute("name") === "arrow-down") ? "arrow-up" : "arrow-down";
        this.children[1].setAttribute("name", arrow)
    })
})



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav.hide__mobile ul li a');
let navLinksMobile = document.querySelectorAll('nav.hide__lg ul li a');

// Permet d'ajouter la classe 'active' au bon menu en mode Mobile
function activeMenuOnClick() {
    navLinks.forEach(navLink => {
        navLink.addEventListener('click', function() {
            console.log(navLink);
            this.classList.add('active');
        })
    })
}
activeMenuOnClick();

// Permet d'automatiquement mettre en valeur le menu sur lequel on se trouve en mode Mobile ou Large
window.onscroll = () => {
    scrollFunction();
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        if (top >= offset && top < offset + height) {
            // Mode Large
            navLinks.forEach(links => {
                links.classList.remove('active');
                console.log();
                document.querySelector('nav.hide__mobile li a[href*=' + id + ']').classList.add('active');
            });
            // Mode Mobile
            navLinksMobile.forEach(links => {
                links.classList.remove('active');
                console.log();
                document.querySelector('nav.hide__lg li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

// Différents temps d'animations au scroll de la page
ScrollReveal().reveal('.reveal100', { delay: 100 });;
ScrollReveal().reveal('.reveal300', { delay: 300 });;
ScrollReveal().reveal('.reveal500', { delay: 500 });;


// Constantes
const navButton = document.querySelector('.mobile__menu');
const nav = document.querySelector('.nav');
const toggleColor = document.querySelector('#color');
const btnColor = document.querySelector('.style__theme');
const darkBtn = document.querySelector('#dark')
const navItems = document.querySelectorAll('.nav__link')
const iconMobileMenu = document.querySelector('.mobile__menu ion-icon')

// Trigger Mobile Menu
function toggleMobileMenu() {
    // Change icon between Close and Burger
    iconMobileMenu.getAttribute('name') === "menu-outline" ? iconMobileMenu.setAttribute('name', 'close-outline') : iconMobileMenu.setAttribute('name', 'menu-outline')
    nav.classList.toggle('nav__show');
}
navButton.addEventListener('click', toggleMobileMenu);

navItems.forEach(navItem => {
    navItem.addEventListener('click', function() {
        navItem.classList.remove('active')
        this.classList.add('active')
        toggleMobileMenu();
    })
    
})


// Permet de savoir le thème au lancement de la page
function getStoredTheme() {
    return localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

// Permet de trigger le dark ou light mode
function toggleDayNight() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const targetTheme = (currentTheme === "light") ? "dark" : "light";
    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
}


// Initialisation du thème et de la couleur au chargement de la page
const storedTheme = getStoredTheme();

document.documentElement.setAttribute('data-theme', storedTheme);
document.querySelector('.home__switch.hide__lg').addEventListener('click', toggleDayNight);
document.querySelector('.home__switch.lg').addEventListener('click', toggleDayNight);


// Formulaire d'envoi contact
// Check https://www.emailjs.com/
$(document).ready(function () {
    $('#contact-form').submit(function (e) {
        const form = document.querySelector('form[id="contact-form"]');
        const username = form.elements['user_name'].value;
        const userMail = form.elements['user_email'].value;
        const message = form.elements['message'].value;
        console.log(message);
        e.preventDefault();
        var data = {
            service_id: 'service_4yilhyf',
            template_id: 'template_3ohtp4i',
            user_id: 'nwkRq3DJ8L8UITGS0',
            template_params: {
                from_email: userMail,
                from_name: username,
                to_name: 'Florian',
                message: message
            }
        };
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function () {
            $('#contact-form')[0].reset();
            $('.message').html('Merci pour votre message ! J\'y répondrai dès que possible !') 
            $('.message').addClass('active');
            setTimeout(function(){
                $('.message').removeClass('active');
            }, 5000);

        }).fail(function (error) {
            alert('Oops… ' + JSON.stringify(error));
        })
    })
})



const scrollers = document.querySelector(".scroller");
console.log(scrollers);

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

// function addAnimation() {
//     // add data-animated="true" to `.scroller`
//     scrollers.setAttribute("data-animated", true);

//     // Make an array from the elements within `.scroller-inner`
//     const scrollerInner = scrollers.querySelector(".scroller__inner");
//     const scrollerContent = Array.from(scrollerInner.children);

//     // For each item in the array, clone it
//     // add aria-hidden to it
//     // add it into the `.scroller-inner`
//     scrollerContent.forEach((item) => {
//       const duplicatedItem = item.cloneNode(true);
//       duplicatedItem.setAttribute("aria-hidden", true);
//       scrollerInner.appendChild(duplicatedItem);
//     });
// }
