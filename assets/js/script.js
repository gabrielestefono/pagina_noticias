Menu = document.getElementById('menu')

Menu.addEventListener('click', ()=>{
    if (Menu.classList == "header__hamburger"){
        Menu.classList = 'header__hamburger--close'
    }else{
        Menu.classList = "header__hamburger"
    }
})