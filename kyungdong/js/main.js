const sliderElement = document.querySelector('#hero.hero-slider');

if (sliderElement && typeof window.Swiper === 'function') {
    const heroSwiper = new window.Swiper(sliderElement, {
        slidesPerView: 1,
        speed: 800,
        navigation: {
            prevEl: '#hero .btn-prev',
            nextEl: '#hero .btn-next',
        },
        on: {
            init(swiper) {
                swiper.slides[swiper.activeIndex]?.classList.add('motion-on');
            },
            slideChangeTransitionStart(swiper) {
                swiper.slides.forEach((slide) => slide.classList.remove('motion-on'));
                swiper.slides[swiper.activeIndex]?.classList.add('motion-on');
            },
        },
    });
}
