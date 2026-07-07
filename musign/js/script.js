const preventHashLink = () => {
    document.querySelectorAll('a[href="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
        });
    });
};

const setSvgPathLength = () => {
    document.querySelectorAll('.svgAni path').forEach((path) => {
        path.getTotalLength();
    });
};

const menuOpen = () => {
    const openButton = document.querySelector('.menuOpen button.open');
    const menuWrap = document.querySelector('.menuOpen .menuWrap');
    const closeButtons = document.querySelectorAll('.menuOpen .menuWrap .close');

    if (!openButton || !menuWrap) {
        return;
    }

    openButton.addEventListener('click', () => {
        menuWrap.classList.add('on');
    });

    closeButtons.forEach((closeButton) => {
        closeButton.addEventListener('click', (event) => {
            event.preventDefault();
            menuWrap.classList.remove('on');
        });
    });
};

const scrollAnimation = () => {
    const animatedItems = document.querySelectorAll('.animate');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('motion');
                    } else {
                        entry.target.classList.remove('motion');
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        animatedItems.forEach((item) => {
            observer.observe(item);
        });
        return;
    }

    animatedItems.forEach((item) => {
        item.classList.add('motion');
    });
};

const bgColor = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > 1400 && scrollTop <= 2700) {
        document.body.classList.add('on');
    } else {
        document.body.classList.remove('on');
    }
};

const changeBgColor = () => {
    window.addEventListener('scroll', bgColor);
    window.addEventListener('resize', bgColor);
    bgColor();
};

(() => {
    preventHashLink();
    setSvgPathLength();
    menuOpen();
    scrollAnimation();
    changeBgColor();
})();
