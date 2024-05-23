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
      320: {
       
      },
      // when window width is >= 480px
      480: {
       
      },
      // when window width is >= 640px
      640: {
        
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });