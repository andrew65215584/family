const slidesPerView = 1
const breakpoints = {
    400: {
        slidesPerView: 2,
        spaceBetween: 20
    },
    1200: {
        slidesPerView: 2,
        spaceBetween: 30
    },
    1300: {
        slidesPerView: 3,
        spaceBetween: 30

    }
}

let swiper = new Swiper(".mySwiper2", {
    pagination: {
        el: ".swiper-pagination2",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
    slidesPerView,
    breakpoints,
});

let swiper2 = new Swiper(".mySwiper3", {
    pagination: {
        el: ".swiper-pagination3",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-next3",
        prevEl: ".swiper-prev3",
    },
    slidesPerView,
    breakpoints,
});

let singleSwiper = new Swiper(".mySwiper4", {
    pagination: {
        el: ".swiper-pagination4",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-next4",
        prevEl: ".swiper-prev4",
    },
    slidesPerView,
    breakpoints: {
        768: {
            spaceBetween: 0
        }
    }
});