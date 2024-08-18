
function guaranteeSliderInit() {
    const ww = window.innerWidth
    const guaranteeSlider = document.querySelector('[data-js="guaranteeSlider"]')

    if(!guaranteeSlider || ww > 767) {
        return
    }

    const guaranteeSliderWrapper = guaranteeSlider.querySelector('[data-js="guaranteeSliderWrapper"]')
    guaranteeSliderWrapper.style.display = 'flex'

    const guaranteeSliderEx = new Swiper(guaranteeSlider, {
        slidesPerView: 'auto',
        spaceBetween: 10
    });
}