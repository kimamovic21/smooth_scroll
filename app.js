const menu = document.querySelector('#mobile-menu') 
//35. dodajemo
const menuLinks = document.querySelector ('.navbar__menu')
//36. dodajemo

// Display Mobile Menu
const mobileMenu = () => { //37. dodajemo
    menu.classList.toggle('is-active') //38. dodajemo
    menuLinks.classList.toggle('active') //39. dodajemo
}

menu.addEventListener('click', mobileMenu);
 //40. dodajemo i otvaramo html fajl