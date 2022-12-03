const carousels = document.getElementsByClassName("carousel__item");
const indicators = document.querySelectorAll(".indicator");
let currentIndicator = 0;

window.setInterval(() => {
    if (currentIndicator === indicators.length) currentIndicator = 0;
    indicators[currentIndicator++].click();
}, 5000);

indicators.forEach((indicator) => {
    indicator.addEventListener("click", (e) => {
        const carouselIndex = indicator.dataset.slideTo;
        for (let i = 0; i < carousels.length; i++) {
            carousels[i].classList.remove("active");
            indicators[i].classList.remove("active");
        }
        carousels[carouselIndex].classList.add("active");
        e.target.classList.add("active");
    });
});
