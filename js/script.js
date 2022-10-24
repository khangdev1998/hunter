const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}
toggleSwitch.addEventListener('change', switchTheme);

$('.featured .owl-carousel').owlCarousel({
    loop: true,
    margin: 40,
    autoplayTimeout: 4000,
    smartSpeed: 450,
    nav: false,
    autoWidth: true,
    mouseDrag: false,
    items: 4,
    responsive: {
        0: {
            items: 1,
            margin: 20,
        },
        600: {
            items: 2,
        },
        1024: {
            autoplay: true,
            dots: false
        }
    }
})

const btnLeft = document.querySelector('.featured__icon--left');
const btnRight = document.querySelector('.featured__icon--right');
const btnPrev = document.querySelector('.owl-prev');
const btnNext = document.querySelector('.owl-next');

eventMouse(btnLeft)
btnLeft.onclick = function () {
    btnPrev.click()
}
eventMouse(btnRight)
btnRight.onclick = function () {
    btnNext.click()
}
function eventMouse(btn) {
    btn.onmousedown = function () {
        this.style.opacity = '0.6'
    }
    btn.onmouseup = function () {
        this.style.opacity = null
    }
}

const houseImage = document.querySelector('.house-image');
const popupOverlay = document.querySelector('.popup-video');
const video = document.querySelector('.popup-video video');
const wrapper = document.querySelector('.wrapper');
houseImage.addEventListener('click', function () {
    popupOverlay.classList.add('active')
    video.currentTime = 0
    video.play()

    popupOverlay.onclick = function () {
        popupOverlay.classList.remove('active')
        video.pause()
    }
    video.onclick = function (event) {
        event.stopPropagation();
    }
})

$('.about .owl-carousel').owlCarousel({
    loop: true,
    center: true,
    margin: 56,
    dots: true,
    autoplayTimeout: 4000,
    smartSpeed: 450,
    nav: false,
    autoWidth: true,
    mouseDrag: false,
    responsive: {
        0: {
            items: 1,
            center: false,
            margin: 10,
            autoWidth: false,
        },
        600: {
            items: 1,
        },
        1023: {
            autoplay: true
        }
    }
})

const menuTop = document.querySelector('.header-top__menu');
const buttonBar = document.querySelector('.header-top__bar');
const buttonClose = document.querySelector('.header-top__close');
buttonBar.onclick = function () {
    menuTop.classList.add('active');
}
buttonClose.onclick = function () {
    menuTop.classList.remove('active');
}

// Khi loading xong trang web
const wrapperPage = document.querySelector('.wrapper');
const wrapperLoader = document.querySelector('.wrapper-loader');
window.addEventListener('load', function () {
    wrapperPage.style.display = 'block'
    wrapperLoader.style.display = 'none'
})