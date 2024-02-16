var homeSectionHeight = document.querySelector('.home__header').offsetHeight;
var homeNav = document.querySelector('.home__nav');


// When the user scrolls down from the top of the document, resize the header's size
;

function scrollFunction() {
    if (document.body.scrollTop > (homeSectionHeight / 2) || document.documentElement.scrollTop > (homeSectionHeight / 2)) {
        homeNav.classList.add('scroll')
    } else {
        homeNav.classList.remove('scroll')
    }
}












const timeline = document.querySelectorAll('.parcours__timeline');
const icons = document.querySelectorAll('.parcours__timeline > ion-icon');
const parcoursInfo = document.querySelectorAll('.parcours__info')
const parcoursMore = document.querySelectorAll('.parcours__more')

// Permet les animations de la section "Parcours"
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
// console.log(sections);
let navLinks = document.querySelectorAll('nav ul li a');



function activeMenuOnClick() {
    navLinks.forEach(navLink => {
        navLink.addEventListener('click', function() {
            console.log(navLink);
            this.classList.add('active');
        })
    })
}
activeMenuOnClick();

window.onscroll = () => {
    scrollFunction();
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                console.log();
                document.querySelector('nav li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};