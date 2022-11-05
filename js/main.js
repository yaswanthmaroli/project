let menuIcon = document.querySelector('.menu-btn')
let menuItem = document.querySelector ('.menu-item')

menuIcon.addEventListener('click',()=>{
    menuItem.classList.toggle('open')
})