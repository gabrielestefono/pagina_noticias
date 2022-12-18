const Menu = document.getElementById('menu')
const show = document.getElementById('show')

Menu.addEventListener('click', ()=>{
    if (Menu.classList == "header__hamburger"){
        Menu.classList = 'header__hamburger--close'
        show.classList = 'sidemenu--show'
    }else{
        Menu.classList = "header__hamburger"
        show.classList = 'sidemenu--hide'
    }
});