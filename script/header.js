console.log("oi")
function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.hamb').src= '../img/menu/menu.png'
    }else{
        menuMobile.classList.add('open')
        document.querySelector('.hamb').src= '../img/menu/close.png'
    }
}