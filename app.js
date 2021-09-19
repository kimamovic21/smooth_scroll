const menu = document.querySelector('#mobile-menu');
//35. dodajemo
const menuLinks = document.querySelector ('.navbar__menu');
//36. dodajemo
const navLogo = document.querySelector('#navbar__logo');
 //126. dodajemo

// Display Mobile Menu
const mobileMenu = () => { //37. dodajemo
    menu.classList.toggle('is-active') //38. dodajemo
    menuLinks.classList.toggle('active') //39. dodajemo
}

menu.addEventListener('click', mobileMenu);
 //40. dodajemo i otvaramo html fajl

//127. dodajemo
//Show active menu when scrolling
const highlightMenu = ()=> {
    const elem = document.querySelector('.highlight')//128. dodajemo
    const homeMenu = document.querySelector('#home-page')//129. dodajemo
    const aboutMenu = document.querySelector('#about-page') //130. dodajemo
    const servicesMenu = document.querySelector('#services-page') //131. dodajemo
    let scrollPos = window.scrollY //132. dodajemo

    //adds 'highlight' class to my menu items
    if(window.innerWidth > 960 && scrollPos < 600){//133. dodajemo
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400){//134. dodajemo
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    } else if (window.innerWidth > 960 && scrollPos < 2345){//135. dodajemo
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }

    if(elem && window.innerWidth < 960 && scrollPos < 600 || elem) {//136. dodajemo
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu) //137. dodajemo
window.addEventListener('click', highlightMenu)

// Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
const menuBars = document.querySelector('.is-active')
if(window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active')
    menuLinks.classList.remove('active')
 }
}

menu.menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
