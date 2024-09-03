gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)


let scrollTriggerObject;
let mainTimeline = gsap.timeline();
let startTimeLine = gsap.timeline();
let addTime = 600;

const currentPage = document.querySelector('[data-js="pageAnimWrap"]')
let currentPageName = currentPage ? currentPage.dataset.page : ""

const windowWidth = window.innerWidth

document.addEventListener('DOMContentLoaded', () => {
    if(windowWidth > 1023) {
        homeIntroAnim();
    } else {
        homeIntroAnimMob();
    }
    startPageAnimation();
    scrollToAnchor()

    gsap.to(window, { 
        duration: 1, 
        scrollTo: { 
            y: 0
            } 
        });
})

function startPageAnimation() {
    if(currentPageName === "home") {
        if(windowWidth > 1279) {
            homePageAnimation()
        } else if(windowWidth > 1023) {
            homePageAnimationTabs()
        } else {
            return
        }
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

    startTimeLine.fromTo('[data-js="pageAnimWrap"]', {
        opacity: '0',
    }, {
        opacity: "1",
        duration: 2,
        delay: 0.5,
        ease: "none",
    }, "0");

    startTimeLine.fromTo('[data-anim="header"]', {
        opacity: '0',
    }, {
        opacity: "1",
        duration: 2,
        ease: "none",
    }, "<");

    startTimeLine.fromTo('[data-anim="homeIntroTitle"]', {
        y: '500%',
    }, {
        y: "0",
        duration: 1,
        ease: "none",
    }, "<");

    startTimeLine.fromTo('[data-anim="homeLogoPath1"]', {
        y: '150%',
    }, {
        y: "0",
        duration: 1.8,
        ease: "none",
    }, "<");

    startTimeLine.fromTo('[data-anim="homeLogoPath2"]', {
        y: '150%',
    }, {
        y: "0",
        duration: 1.7,
        ease: "none",
    }, "<");

    startTimeLine.fromTo('[data-anim="homeLogoPath3"]', {
        y: '150%',
    }, {
        y: "0",
        duration: 1.6,
        ease: "none",
    }, "<");

    startTimeLine.fromTo('[data-anim="homeLogoPath4"]', {
        y: '150%',
    }, {
        y: "0",
        duration: 1.4,
        ease: "none",
    }, "<");

    startTimeLine.fromTo('[data-anim="homeLogoPath5"]', {
        y: '150%',
    }, {
        y: "0",
        duration: 1.2,
        ease: "none",
    }, "<");

    startTimeLine.fromTo('[data-anim="homeLogoPath6"]', {
        y: '150%',
    }, {
        y: "0",
        duration: 1,
        ease: "none",
    }, "<");

    startTimeLine.fromTo('[data-anim="homeIntroBg1"]', {
        y: '-25',
        x: '25'
    }, {
        y: '0',
        x: '0',
        duration: 1,
        ease: "none",
    }, "<");

    startTimeLine.fromTo('[data-anim="homeIntroBg2"]', {
        y: '-25',
        x: '-25'
    }, {
        y: '0',
        x: '0',
        duration: 1,
        ease: "none",
    }, "<");

    startTimeLine.fromTo('[data-anim="homeIntroBg3"]', {
        y: '25',
    }, {
        y: '0',
        duration: 1,
        ease: "none",
    }, "<");

    startTimeLine.fromTo('[data-anim="homeIntroCard1"]', {
        y: '150%',
    }, {
        y: '0',
        duration: 1.3,
        ease: "none",
    }, "<");

    startTimeLine.fromTo('[data-anim="homeIntroCard2"]', {
        y: '150%',
    }, {
        y: '0',
        duration: 1,
        ease: "none",
    }, "<");

    startTimeLine.fromTo('[data-anim="homeIntroCard3"]', {
        y: '150%',
    }, {
        y: '0',
        duration: 0.7,
        ease: "none",
    }, "<");

    startTimeLine.fromTo('[data-anim="homeIntroAdvantages"]', {
        visibility: 'hidden',
        opacity: "0",
        x: "-10%"
    }, {
        visibility: 'visible',
        opacity: "1",
        x: "0",
        duration: 1,
        ease: "none",
    }, "< +2");

    startTimeLine.fromTo('[data-anim="homeIntroLine1"]', {
        visibility: 'hidden',
        width: "0"
    }, {
        visibility: 'visible',
        width: "160vh",
        duration: 0.5,
        ease: "none",
        onComplete: () => {
            let el = document.querySelector('[data-anim="homeIntroLine1"]')
            el.querySelector('.home-intro__line').style.left = "0"
            el.querySelector('.home-intro__line').style.right = "auto"
            el.closest(".home-intro__line-wrap").style.justifyContent = "flex-start"
        }
    }, "<");

    startTimeLine.fromTo('[data-anim="homeIntroLine2"]', {
        visibility: 'hidden',
        width: "0"
    }, {
        visibility: 'visible',
        width: "28vh",
        duration: 0.5,
        ease: "none",
        onComplete: () => {
            let el = document.querySelector('[data-anim="homeIntroLine2"]')
            el.querySelector('.home-intro__line').style.left = "auto"
            el.querySelector('.home-intro__line').style.right = "0"
            el.closest(".home-intro__line-wrap").style.justifyContent = "flex-end"
        }
    }, "<");
}

/** Стартовая анимация первого экрана главной страницы < 1024 */
function homeIntroAnimMob() {

    startTimeLine.fromTo('[data-js="pageAnimWrap"]', {
        opacity: '0',
    }, {
        opacity: "1",
        duration: 1,
        delay: 0.5,
        ease: "none",
    }, "0");

    startTimeLine.fromTo('[data-anim="homeIntroBg1"]', {
        y: '-50',
        x: '50'
    }, {
        y: '0',
        x: '0',
        duration: 1,
        ease: "none",
    }, ">");

    startTimeLine.fromTo('[data-anim="homeIntroBg2"]', {
        y: '-50',
        x: '-50'
    }, {
        y: '0',
        x: '0',
        duration: 1,
        ease: "none",
    }, "<");

    startTimeLine.fromTo('[data-anim="homeIntroBg3"]', {
        y: '50',
    }, {
        y: '0',
        duration: 1,
        ease: "none",
    }, "<");

    startTimeLine.fromTo('[data-anim="header"]', {
        opacity: '0',
    }, {
        opacity: "1",
        duration: 2,
        ease: "none",
    }, "<");

    startTimeLine.fromTo('[data-anim="homeIntroTitle"]', {
        opacity: 0,
        y: '70%',
    }, {
        y: "0",
        opacity: 1,
        duration: 1,
        ease: "none",
    }, "<");

    startTimeLine.fromTo('[data-anim="homeIntroAdvantages"]', {
        visibility: 'hidden',
        opacity: "0",
        x: "-10%"
    }, {
        visibility: 'visible',
        opacity: "1",
        x: "0",
        duration: 1,
        ease: "none",
    }, "< +2");

    startTimeLine.fromTo('[data-anim="homeIntroLine1"]', {
        visibility: 'hidden',
        width: "0"
    }, {
        visibility: 'visible',
        width: "224px",
        duration: 0.5,
        ease: "none",
        onComplete: () => {
            let el = document.querySelector('[data-anim="homeIntroLine1"]')
            el.querySelector('.home-intro__line').style.left = "0"
            el.querySelector('.home-intro__line').style.right = "auto"
            el.closest(".home-intro__line-wrap").style.justifyContent = "flex-start"
        }
    }, "<");

    startTimeLine.fromTo('[data-anim="homeIntroLine2"]', {
        visibility: 'hidden',
        width: "0"
    }, {
        visibility: 'visible',
        width: "139px",
        duration: 0.5,
        ease: "none",
        onComplete: () => {
            let el = document.querySelector('[data-anim="homeIntroLine2"]')
            el.querySelector('.home-intro__line').style.left = "auto"
            el.querySelector('.home-intro__line').style.right = "0"
            el.closest(".home-intro__line-wrap").style.justifyContent = "flex-end"
        }
    }, "<");
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
        width: '160vh',
    }, {
        width: "0",
        duration: 0.2,
        ease: "none",
    }, "0");

    mainTimeline.fromTo('[data-anim="homeIntroLine2"]', {
        width: "28vh"
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
    }, "< +0.2");

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

    mainTimeline.fromTo('[data-anim="homeIntroLogoGreen"].home-intro__logo-green--1', {
        borderRadius: "100px 0 0 100px"
    }, {
        borderRadius: "0",
        duration: 0.3,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroLogoGreen"].home-intro__logo-green--2', {
        borderRadius: "0 100px 100px 0"
    }, {
        borderRadius: "0",
        duration: 0.3,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroLogoGreen"]', {
        width: "0%"
    }, {
        width: "100%",
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

    mainTimeline.addLabel("about", 1.21)

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
    }, ">");

    mainTimeline.fromTo('[data-anim="homeIntroLogo"]', {
        color: "#6B3D90"
    }, {
        color: "#582A7D",
        duration: 0,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroBg2"]', {
        zIndex: '11'
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

    mainTimeline.addLabel("catalog", 3.6)

    mainTimeline.fromTo('[data-anim="homeCatalogMarket1"]', {
        x: "800%",
    }, {
        x: "0",
        duration: 1,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeCatalogMarket2"]', {
        x: "800%",
    }, {
        x: "0",
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
    
    mainTimeline.fromTo('[data-anim="homeIntroBg2"]', {
    }, {
        left: '-30%',
        duration: 1,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroBg3"]', {
    }, {
        left: "-75%",
        duration: 1,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroLogoGreen"].home-intro__logo-green--1', {
        borderRadius: "0"
    }, {
        borderRadius: "50px 0 0 50px",
        duration: 0.1,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroLogoGreen"].home-intro__logo-green--2', {
        borderRadius: "0"
    }, {
        borderRadius: "0 50px 50px 0",
        duration: 0.1,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroLogoGreen"]', {
        width: "100%"
    }, {
        width: "0%",
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

    mainTimeline.fromTo('[data-anim="homeAboutDecor"]', {
        x: "-45%"
    }, {
        x: "-100%",
        duration: 0.5,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="guarantee"]', {
        y: "0",
    }, {
        y: "-100%",
        duration: 1,
        ease: "none",
    }, "<");

    mainTimeline.addLabel("guarantee", 4.6)

    mainTimeline.fromTo('[data-anim="footer"]', {
        y: "0",
    }, {
        y: "-100%",
        duration: 1,
        ease: "none",
    }, ">");

    mainTimeline.addLabel("contacts", 5.6)
    mainTimeline.addLabel("callback", 5.6)

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

/** Общая анимация главной страницы < 1280 */
function homePageAnimationTabs() {
   
    scrollTriggerObject = ScrollTrigger.create({
        trigger: currentPage,
        pin: true,
        start: "top top",
        end: () => "+=" + addTime + "%",
        scrub: 1,
        animation: mainTimeline,
    })

    mainTimeline.fromTo('[data-anim="homeIntroLine1"]', {
        width: '160vh',
    }, {
        width: "0",
        duration: 0.2,
        ease: "none",
    }, "0");

    mainTimeline.fromTo('[data-anim="homeIntroLine2"]', {
        width: "28vh"
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
    }, "< +0.2");

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
        left: '-145px',
        duration: 1,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroBg3"]', {
    }, {
        bottom: '-20%',
        left: "-575px",
        duration: 1,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroLogoGreen"].home-intro__logo-green--1', {
        borderRadius: "100px 0 0 100px"
    }, {
        borderRadius: "0",
        duration: 0.3,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroLogoGreen"].home-intro__logo-green--2', {
        borderRadius: "0 100px 100px 0"
    }, {
        borderRadius: "0",
        duration: 0.3,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroLogoGreen"]', {
        width: "0%"
    }, {
        width: "100%",
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

    mainTimeline.addLabel("about", 1.21)

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
    }, ">");

    mainTimeline.fromTo('[data-anim="homeIntroLogo"]', {
        color: "#6B3D90"
    }, {
        color: "#582A7D",
        duration: 0,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroBg2"]', {
        zIndex: '11'
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

    mainTimeline.addLabel("catalog", 3.6)

    mainTimeline.fromTo('[data-anim="homeCatalogMarket1"]', {
        x: "500%",
    }, {
        x: "0",
        duration: 1,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeCatalogMarket2"]', {
        x: "500%",
    }, {
        x: "0",
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
    
    mainTimeline.fromTo('[data-anim="homeIntroBg2"]', {
    }, {
        left: '-35%',
        duration: 1,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroBg3"]', {
    }, {
        left: "-80%",
        duration: 1,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroLogoGreen"].home-intro__logo-green--1', {
        borderRadius: "0"
    }, {
        borderRadius: "50px 0 0 50px",
        duration: 0.1,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroLogoGreen"].home-intro__logo-green--2', {
        borderRadius: "0"
    }, {
        borderRadius: "0 50px 50px 0",
        duration: 0.1,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="homeIntroLogoGreen"]', {
        width: "100%"
    }, {
        width: "0%",
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

    mainTimeline.fromTo('[data-anim="homeAboutDecor"]', {
        x: "-45%"
    }, {
        x: "-120%",
        duration: 0.5,
        ease: "none",
    }, "<");

    mainTimeline.fromTo('[data-anim="guarantee"]', {
        y: "0",
    }, {
        y: "-100%",
        duration: 1,
        ease: "none",
    }, "<");

    mainTimeline.addLabel("guarantee", 4.6)

    mainTimeline.fromTo('[data-anim="footer"]', {
        y: "0",
    }, {
        y: "-100%",
        duration: 1,
        ease: "none",
    }, ">");

    mainTimeline.addLabel("contacts", 5.6)
    mainTimeline.addLabel("callback", 5.6)

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

//скролл по якорям
function scrollToAnchor() {
    gsap.utils.toArray('a[href*="#"]').forEach(function(anchor) {
        anchor.addEventListener("click", function(e) {
            e.preventDefault()
            let target = e.target.closest('a')
            if(target.classList.contains('mobile-menu__item')) {
                target.closest('.modal.hystmodal').querySelector('[data-hystclose]').click()
            }

            if(windowWidth > 1023) {
                const percent = mainTimeline.labels[target.getAttribute('href').slice(1)] / mainTimeline.totalDuration();
                const scrollPos = scrollTriggerObject.start + (scrollTriggerObject.end - scrollTriggerObject.start) * percent;
                gsap.to(window, {duration: 1, scrollTo: scrollPos});
            } else {
                setTimeout(() => {
                    document.querySelector(target.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                }, 600)
            }
        });
    });
}