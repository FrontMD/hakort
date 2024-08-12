document.addEventListener('DOMContentLoaded', () => {
    // скролл по странице
    const anchors = document.querySelectorAll('a[href*="#"]')

    if(anchors.length > 0) {   
      anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          
          const blockID = anchor.getAttribute('href')

          gsap.to(window, { duration: 2, scrollTo: { y: blockID, offsetY: -250 } });
          
        })
      })
    }

})