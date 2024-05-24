function translateElemnts(){
    const allImgs = document.querySelectorAll(".herocontent__leftside--managers--imgs img")
    allImgs.forEach((item,index)=>{
        if(index !==0 ) {
            item.style.transform=(`translateX(${-10*(index)}px)`)
        }
    })
}
translateElemnts()

const swiper = new Swiper(".testmonial__swiper .swiper", {
    // Default parameters
    slidesPerView: 3,
    spaceBetween: 5,
    speed: 500,
  
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      375: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      770: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      1100: {
        slidesPerView: 3,
        
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  //scrollnavbar

function scrollingNavBar(scrolling) {
  

  if (scrolling > 50) {
    document.body.classList.add("fixed");
  } else {
    document.body.classList.remove("fixed");
  }
}
window.onscroll =()=>{
  scrollingNavBar(window.scrollY)
}