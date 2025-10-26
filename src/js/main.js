const {animate} = anime
const showModalButtons = document.querySelectorAll('[data-show-modal]')
const closeModal = document.querySelector('.modal-form__close')
const burgerMenu = document.querySelector('.bar')
const closeMobileMenu = document.querySelector('.menu-mobile__icon')

function modalToggle(elem, displayValue) {
    elem.style.display = displayValue
}

for (let button of showModalButtons) {
    button.addEventListener('click', (event) => {
        const modal = document.querySelector('.modal')
        modalToggle(modal, 'block')
    })
}

closeModal.addEventListener('click', (event) => {
    const modal = document.querySelector('.modal')

    modalToggle(modal, 'none')
})

burgerMenu.addEventListener('click', () => {
    const mobileMenu = document.querySelector('.menu-mobile')

    animate(mobileMenu, {
        display: 'block',
        height: [0, 100],
        duration: 500,
        begin: function (anim) {
            mobileMenu.style.display = 'block';
        }
    })
})

closeMobileMenu.addEventListener('click', () => {
    const mobileMenu = document.querySelector('.menu-mobile')
    animate(mobileMenu, {
        height: [100, 0],
        duration: 500,
        complete: function (anim) {
            setTimeout(() => {
                mobileMenu.style.display = 'none';
            }, 500)
        }
    })
})