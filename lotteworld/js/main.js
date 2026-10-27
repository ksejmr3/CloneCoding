const li1 = document.querySelector('.main .con2 ul li:first-child');
const li2 = document.querySelector('.main .con2 ul li:last-child');
const str1 = document.querySelector('.main .con2 ul li:first-child strong');
const str2 = document.querySelector('.main .con2 ul li:last-child strong');
const con2 = document.querySelector('.main .con2');

if (window.Swiper) {
    new Swiper('#hero', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: false,
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        navigation: {
            prevEl: '#hero .hero-prev',
            nextEl: '#hero .hero-next',
        },
        pagination: {
            el: '#hero .hero-pagination',
            clickable: true,
        },
    });
}

li1.addEventListener('mouseenter', function () {
    con2.style.backgroundImage = `url(./images/mainCon1_bg.jpg)`;
    // alert('test1');
    str1.textContent = `현대 미술관`;
});
li2.addEventListener('mouseenter', function () {
    con2.style.backgroundImage = `url('./images/mainCon2_bg.jpg')`;
    // alert('test2');
    str2.textContent = `롯데 미술관`;
});

const introBanner = document.querySelector('.main .con1');

if ('IntersectionObserver' in window && introBanner) {
    document.documentElement.classList.add('io-ready');
    const introObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.18 }
    );
    introObserver.observe(introBanner);
} else if (introBanner) {
    introBanner.classList.add('is-visible');
}
