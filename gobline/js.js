const menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.navlist');


menu. onclick = ()=>{
               menu.classList.toggle('bx-x');
               navlist.classList.toggle('open');

}

const sr = ScrollReveal({
               distance : '65px',
               duration : 2600,
               delay : 500,
               rest : true  
});
sr.reveal('.hero-text',{delay:100, origi: 'top'});
sr.reveal('.hero-img',{delay:800, origin: 'bottom'});
sr.reveal('.icons',{delay:500, origi: 'left'});
sr.reveal('.scroll-down',{delay:600, origi: 'right'});
sr.reveal('.navlist',{delay:200, origi: 'top'});
sr.reveal('.logo',{delay:300, origi: 'bottom'});