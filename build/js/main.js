const {animate} = anime
const showModalButtons = document.querySelectorAll('[data-show-modal]')
const closeModal = document.querySelector('.modal-form__close')
const burgerMenu = document.querySelector('.bar')
const closeMobileMenu = document.querySelector('.menu-mobile__icon')
const questions = document.querySelectorAll('.question')

function modalToggle(elem, displayValue) {
    elem.style.display = displayValue
}

for (let button of showModalButtons) {
    button.addEventListener('click', (event) => {
        const modal = document.querySelector('.modal')
        modalToggle(modal, 'block')
    })
}

for (let question of questions) {
    question.addEventListener('click', (event) => {
        const answer = question.querySelector('.question__answer'),
            cross = question.querySelector('.question__img'),
            questionCssClasses = question.classList

        let arAnswerHeight = [0, answer.scrollHeight],
            arCrossRotate = [0, 45]

        if (questionCssClasses.contains('question_active')) {
            arAnswerHeight = arAnswerHeight.reverse()
            arCrossRotate.reverse()
            questionCssClasses.remove('question_active')
        } else {
            questionCssClasses.add('question_active')
        }
        console.log(arAnswerHeight)
        console.log(arCrossRotate)

        animate(answer, {
            height: arAnswerHeight,
            duration: 500,
        })

        animate(cross, {
            rotate: {
                from: arCrossRotate[0],
                to: arCrossRotate[1]
            },
            duration: 500,
        })
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

const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 50,
    navigation: {
        nextEl: '.reviews__nav-next',
        prevEl: '.reviews__nav-prev'
    },
    autoplay: {
        delay: 5000
    },
    breakpoints: {
        1024: {
            spaceBetween: 30
        },
        932: {
            spaceBetween: 20
        },

        915: {
            spaceBetween: 20
        },

        912: {
            spaceBetween: 20
        },

        896: {
            spaceBetween: 20
        },
        882: {
            spaceBetween: 30
        },

        852: {
            spaceBetween: 30
        },
        820: {
            spaceBetween: 30
        },
        320: {
            spaceBetween: 0,
            slidesPerView: 1
        }
    }
})