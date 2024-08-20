gsap.registerPlugin(ScrollToPlugin)


document.addEventListener('DOMContentLoaded', () => {
    // скролл по странице
    const anchors = document.querySelectorAll('a[href*="#"]')

    if(anchors.length > 0) {   
      anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          
          const blockID = anchor.getAttribute('href').slice(1)

          gsap.to(window, { duration: 2, scrollTo: { y: getScrollLookup(`[data-anim="${blockID}"]`, {
            pinnedContainer: '[data-anim="pageAnimWrap"]',
            containerAnimation: 'linear'
          }), autoKill: true } });
          
        })
      })
    }

})

function getScrollLookup(
  targets,
  { start, pinnedContainer, containerAnimation }
) {
  console.log(gsap.utils.toArray(targets))
  let triggers = gsap.utils.toArray(targets).map((el) =>
      ScrollTrigger.create({
        trigger: el,
        start: start || "top top",
        pinnedContainer: pinnedContainer,
        refreshPriority: -10,
        containerAnimation: containerAnimation,
      })
    ),
    st = containerAnimation && containerAnimation.scrollTrigger;
  return (target) => {
    let t = gsap.utils.toArray(target)
      i = triggers.length;
    while (i-- && triggers) {}
    if (i < 0) {
      return console.warn("target not found", target);
    }
    return containerAnimation
      ? st.start +
          (triggers) *
            (st.end - st.start)
      : triggers
  };
}

