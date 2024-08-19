gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

let scrollTriggerObject;
let mainTimeline = gsap.timeline();
let addTime = 600;


const currentPage = document.querySelector('[data-js="pageAnimWrap"]')
let currentPageName = currentPage ? currentPage.dataset.page : ""

const windowWidth = window.innerWidth

document.addEventListener('DOMContentLoaded', () => {
    homeIntroAnim();
    startPageAnimation();
})

function startPageAnimation() {
    if(currentPageName === "home" && windowWidth > 1023) {
        homePageAnimation()
    } else {
        return
    }
}

function refreshPageAnimation() {
    if (typeof scrollTriggerObject !== "undefined") scrollTriggerObject.kill();
	mainTimeline.clear();

    startPageAnimation();
}


window.addEventListener('resize', () => {
    refreshPageAnimation()
});


/** Стартовая анимация первого экрана главной страницы */
function homeIntroAnim() {

}

/** Общая анимация главной страницы */
function homePageAnimation() {
   
    scrollTriggerObject = ScrollTrigger.create({
        trigger: currentPage,
        pin: true,
        start: "top top",
        end: () => "+=" + addTime + "%",
        scrub: 1,
        animation: mainTimeline,
    })

    mainTimeline.fromTo('[data-anim="homeIntroLine1"]', {
        height: '100%',
    }, {
        height: "0%",
        duration: 0.2,
        ease: "none",
    }, "0");

    mainTimeline.fromTo('[data-anim="homeIntroLine2"]', {
    }, {
        width: "0",
        duration: 0.2,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroCard1"]', {
        y: "0",
    }, {
        y: "150%",
        duration: 0.3,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroCard2"]', {
        y: "0",
    }, {
        y: "150%",
        duration: 0.5,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroCard3"]', {
        y: "0",
    }, {
        y: "150%",
        duration: 0.7,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroAdvantages"]', {
        opacity: 1,
        x: "0",
    }, {
        x: "-30%",
        opacity: 0,
        duration: 0.6,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroBg1"]', {
        
    }, {
        right: "-100%",
        duration: 1,
        ease: "none",
    }, "<");

   mainTimeline.fromTo('[data-anim="homeIntroBg2"]', {
    }, {
        bottom: '-8px',
        left: '-240px',
        duration: 1,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroBg3"]', {
    }, {
        bottom: '-23%',
        left: "-810px",
        duration: 1,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="about"]', {
        y: "0",
    }, {
        y: "-100%",
        duration: 1,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroBgc"]', {
        y: "0",
    }, {
        y: "-100%",
        duration: 1,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroTitle"]', {
    }, {
        color: "#fff",
        duration: 0.2,
        ease: "none",
    }, "> -0.2");

    mainTimeline.fromTo('[data-anim="about"]', {
        zIndex: '10'
    }, {
        zIndex: "25",
        duration: 0,
        ease: "none",
    }, ">");

    mainTimeline.fromTo('[data-anim="about"]', {
        zIndex: '10'
    }, {
        zIndex: "25",
        duration: 0,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroBg2"]', {
        zIndex: '12'
    }, {
        zIndex: "32",
        duration: 0,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroBg3"]', {
        zIndex: '13'
    }, {
        zIndex: "33",
        duration: 0,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeAboutContainer"]', {
        x: "0"
    }, {
        x: "-100vw",
        duration: 0.6,
        ease: "none",
    }, "> +0.1");

    mainTimeline.fromTo('[data-anim="homeAboutDecor"]', {
        x: "0"
    }, {
        x: "-15%",
        duration: 0.6,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeAboutContainer"]', {
        x: "-100vw"
    }, {
        x: "-200vw",
        duration: 0.6,
        ease: "none",
    }, "> +0.05");

    mainTimeline.fromTo('[data-anim="homeAboutDecor"]', {
        x: "-15%"
    }, {
        x: "-30%",
        duration: 0.6,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeAboutContainer"]', {
        x: "-200vw"
    }, {
        x: "-300vw",
        duration: 0.6,
        ease: "none",
    }, "> +0.05");

    mainTimeline.fromTo('[data-anim="homeAboutDecor"]', {
        x: "-30%"
    }, {
        x: "-45%",
        duration: 0.6,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="catalog"]', {
        y: "0",
    }, {
        y: "-100%",
        duration: 1,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroTitle"]', {
        y: "0",
        opacity: "1"
    }, {
        y: '-500%',
        opacity: "0",
        duration: 0.5,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeAboutDecor"]', {
        x: "-45%"
    }, {
        x: "-100%",
        duration: 0.5,
        ease: "none",
    }, "<");
    
    mainTimeline.fromTo('[data-anim="homeIntroBg2"]', {
    }, {
        left: '-100%',
        duration: 1,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroBg3"]', {
    }, {
        left: "-100%",
        duration: 1,
        ease: "none",
    }, "<");



    mainTimeline.fromTo('[data-anim="catalog"]', {
        opacity: '1',
        scale: '1'
    }, {
        opacity: "0",
        scale: '0.3',
        duration: 1,
        ease: "none",
    }, ">");

    mainTimeline.fromTo('[data-anim="guarantee"]', {
        y: "0",
    }, {
        y: "-100%",
        duration: 1,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="footer"]', {
        y: "0",
    }, {
        y: "-100%",
        duration: 1,
        ease: "none",
    }, ">");

    mainTimeline.fromTo('[data-anim="footerMap"]', {
        width: "0",
    }, {
        width: "100%",
        duration: 1,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="guarantee"]', {
        y: "-100%",
    }, {
        y: "-200%",
        duration: 1,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeGuaranteeConteiner"]', {
        y: "0",
    }, {
        y: "25%",
        duration: 1,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="guarantee"]', {
        opacity: '1',
    }, {
        opacity: '0',
        duration: 0.3,
        ease: "none",
    }, "< +0.7");
}
