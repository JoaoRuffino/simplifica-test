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
