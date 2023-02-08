

function init(){
    const nav = document.querySelector('.navBox');
    const burgerBox = document.querySelector('.burgerBox');
    burgerBox.addEventListener('click',()=>{
        nav.classList.toggle('navShow');
    });

}





document.addEventListener('DOMContentLoaded',init);