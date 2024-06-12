const signUpBtn = document.querySelectorAll(".signBtn");
const closeBtnModal = document.querySelector(".modalSignUp__closeBtn");

function translateElemnts() {
  const allImgs = document.querySelectorAll(
    ".herocontent__leftside--managers--imgs img"
  );
  allImgs.forEach((item, index) => {
    if (index !== 0) {
      item.style.transform = `translateX(${-10 * index}px)`;
    }
  });
}
translateElemnts();

function swiperCards() {
  const swiperTestmonial = document.querySelector(
    ".testmonial__swiper .swiper"
  );
  if (swiperTestmonial) {
    const swiper = new Swiper(".testmonial__swiper .swiper", {
      // Default parameters
      slidesPerView: 3,
      spaceBetween: 5,
      speed: 500,

      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
        },
        // when window width is >= 480px
        767: {
          slidesPerView: 2,
        },
        // when window width is >= 640px
        994: {
          slidesPerView: 3,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}
swiperCards();

//scrollnavbar

function scrollingNavBar(scrolling) {
  if (scrolling > 50) {
    document.body.classList.add("fixed");
  } else {
    document.body.classList.remove("fixed");
  }
}
window.onscroll = () => {
  scrollingNavBar(window.scrollY);
};

function clickHamburg() {
  const hamBurgBtn = document.querySelector(".habmurgMenu");
  let show = false;
  hamBurgBtn.addEventListener("click", () => {
    if (!show) {
      document.body.classList.add("sliding");
      show = true;
    } else {
      document.body.classList.remove("sliding");
      show = false;
    }
  });
}
clickHamburg();

//fire modal

function fireModal(btn, closeBtn, classModal) {
  btn.forEach((item) => {
    if (item) {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.classList.add(classModal);
      });
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      document.body.classList.remove(classModal);
    });
  }
}

fireModal(signUpBtn, closeBtnModal, "modalOpen");

//Activate class on navbar

function activateClassNavBar() {
  const allLinks = document.querySelectorAll(".navbarDew  >ul >li>a");
  const pathName = window.location.pathname.slice(1)
  allLinks.forEach((item, index) => {
    // item.classList.add(`${item.getAttribute("href")===pathName?'activelink':'noActive'}`)
    
    item.getAttribute("href")===pathName
      ? item.classList.add("activelink")
      : item.classList.remove('activelink')
   
  });
  if(window.location.pathname==="/"){
    document.body.classList.add('home')
  }else {
    document.body.classList.remove('home')
  }
  
}

activateClassNavBar();
