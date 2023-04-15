// burger
const burgerMenu = document.querySelector('.menu__burger')
const menuBody = document.querySelector('.body__burger')


if (burgerMenu) {
    burgerMenu.addEventListener('click', function() {
        document.body.classList.toggle('lock')
        burgerMenu.classList.toggle('active')
        menuBody.classList.toggle('active')
    })
}

