const intro = document.querySelector('.intro_logo');
const mainLogo = document.querySelector('.main_logo');

animation();
blockScroll();


//Função que realiza a animação de entrada do site
function animation(){
    setTimeout(() => {
        intro.style.opacity = '0';
    }, 3500);
    
    setTimeout(() => {
        intro.style.display = 'none';
    }, 5700);
    
    setTimeout(() => {
        mainLogo.style.opacity = '1';
    }, 6000);
}

//Função que bloqueia o scroll do usuário para que a animação aconteça
function blockScroll(){
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        document.documentElement.style.overflow = 'auto';
        document.body.style.overflowY = 'auto';    
    }, 7000);
}

class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
    }

    closeMobileMenu() {
        this.navList.classList.remove(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener('click', this.handleClick);

        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });
    }
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavBar(
    '.mobile-menu',
    '.nav-list',
    '.nav-list li'
);
mobileNavbar.init();