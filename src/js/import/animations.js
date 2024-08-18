gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

let scrollTriggerObject;
let mainTimeline = gsap.timeline();
let addTime = 800;


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

    mainTimeline.fromTo('[data-anim="about"]', {
        y: "0",
    }, {
        y: "-100%",
        duration: 1.8,
        ease: "none",
    }, "0");

    mainTimeline.fromTo('[data-anim="catalog"]', {
        y: "0",
    }, {
        y: "-100%",
        duration: 1.8,
        ease: "none",
    }, ">");

    mainTimeline.fromTo('[data-anim="guarantee"]', {
        y: "0",
    }, {
        y: "-100%",
        duration: 1.8,
        ease: "none",
    }, ">");

    mainTimeline.fromTo('[data-anim="footer"]', {
        y: "0",
    }, {
        y: "-100%",
        duration: 1.8,
        ease: "none",
    }, ">");
}
