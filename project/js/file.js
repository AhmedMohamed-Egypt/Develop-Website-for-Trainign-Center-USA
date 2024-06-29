const fixedPrice = [30, 60, 130, 220];
let plan;
let savingResult;
let error;
let resetBackProgress;
const savingResulInput = document.querySelector(".savingResult");
const errorForm = document.querySelector(".saveTime__estimate--form__error");
const allInputs = document.querySelectorAll(
  ".saveTime__estimate--formTwo--inputGroup--input"
);
const allParent = document.querySelectorAll(
  ".saveTime__estimate--formTwo--inputGroup"
);
const calcButton = document.querySelector(
  ".saveTime__estimate--formTwo button"
);
const signUpBtn = document.querySelectorAll(".signBtn");
const allChoosePlan = document.querySelectorAll(".choosePlan");
const closeBtnModal = document.querySelector(".modalSignUp__closeBtn");
const closeBtnModalRegister = document.querySelector(
  ".modalRegister__closeBtn"
);
const backButtonRegister = document.querySelector(".modalRegister__backBtn");
const registerForm = document.querySelector(".registerForm");
let selectedPalnName;
let selectedValuePlan;
const registerPlanInputs = document.querySelectorAll(".cardpricing__selectPlan--input")
let activeRegister = false
localStorage.setItem('plansubscribe','6 Months')
let fillData;
let stepForm = 2
const conatinerSelected = document.querySelector(".registerCompany__selectedItem--details")
const selectedItem = document.querySelectorAll(".cardpricing__selectPlan--input")
function fillInputRegister(priceParam){
  registerPlanInputs.forEach((item,index)=>{
    item.value = priceParam[index]
  })
}
fillInputRegister(fixedPrice)
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
        if(item.classList.contains('choosePlan')){
          
          activeRegister = true
        }else {
          activeRegister = false
        }
      });
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      document.body.classList.remove(classModal);
     
      if(closeBtn.classList.contains('modalRegister__closeBtn')) {
        
        console.log(closeBtn)
        activeRegister = false
        resetBackProgress()
      }

    });
  }
}

fireModal(signUpBtn, closeBtnModal, "modalOpen");
fireModal(allChoosePlan, closeBtnModalRegister, "modalnOpenPlan");

//Activate class on navbar

function activateClassNavBar() {
  const allLinks = document.querySelectorAll(".navbarDew  >ul >li>a");

  const pathName = window.location.pathname;

  allLinks.forEach((item, index) => {
    // item.classList.add(`${item.getAttribute("href")===pathName?'activelink':'noActive'}`)
    const pureAttribute = item.getAttribute("href").slice(1).toLowerCase();
    const purePathName = pathName.slice(1).toLowerCase();

    if (index < 4) {
      pureAttribute === purePathName
        ? item.classList.add("activelink")
        : item.classList.remove("activelink");
    }
  });
  if (window.location.pathname === "/") {
    document.body.classList.add("home");
  } else {
    document.body.classList.remove("home");
  }
}

activateClassNavBar();
//swiper pricing page

function swiperPricingPage() {
  const swiperPricing = document.querySelector(".pricingPage__swiper .swiper");
  const swiperRegister = document.querySelector(
    ".registerCompany__cards .swiper"
  );
  if (swiperPricing) {
    const swiper = new Swiper(".pricingPage__swiper .swiper", {
      // Default parameters     
      spaceBetween: 5,
      speed: 500,
      // Responsive breakpoints
      breakpoints: {
        
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
       992: {
          slidesPerView: 3,
        },
        
        1200: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 5,
        },
      },
      navigation: {
        nextEl: ".pricingPage__swiper .swiper-button-next",
        prevEl: ".pricingPage__swiper .swiper-button-prev",
      },
    });
  }
  if (swiperCards) {
    const swiper = new Swiper(".registerCompany__cards .swiper", {
      // Default parameters
      slidesPerView: 3,
      spaceBetween: 5,
      speed: 500,

      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
        // when window width is >= 480px
        767: {
          slidesPerView: 2,
        },
        // when window width is >= 640px
        1200: {
          slidesPerView: 3,
        },
        1500: {
          slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: ".registerCompany__cards .swiper-button-next",
        prevEl: ".registerCompany__cards .swiper-button-prev",
      },
    });
  }
}
swiperPricingPage();

//toggle Button

const toggleBtnsPricing = document.querySelectorAll(".pricingPage__container--toggleBtns button");
const labelRegisterBtns = document.querySelectorAll(".registerCompany__cards--switchPalns--div")
const allPrices = document.querySelectorAll(".pricingPage__swiper .cardpricing__price--value");
const allPricesRegister = document.querySelectorAll(
  ".registerCompany__cards .cardpricing__price--value"
);
const yearlyPrices = document.querySelectorAll(".pricingPage__swiper .cardpricing__desc");
const yearlyPricesRegister = document.querySelectorAll(".registerCompany__cards .cardpricing__desc");

function fillPrices(prices, priceElmnts) {
  priceElmnts.forEach((item, index) => {
    item.textContent = prices[index];
  });
}
fillPrices(fixedPrice, allPrices);
fillPrices(fixedPrice, allPricesRegister);

function toggleBtns(btns,pricesItems,txtdesc,switchBtns) {
  /*
  if(activeRegister){
    registerPlanInputs.forEach((item)=>{
      item.value = 5
    })
  }
  */
  btns.forEach((item, index) => {
    if (item) {
      item.addEventListener("click", () => {
        for (let i = 0; i < switchBtns.length; i++) {
          switchBtns[i].classList.remove("active");
        }
        item.classList.add("active");

        if (index === 1) {
          //  subscription.classList.add("animate__animated", "animate__bounce");
          txtdesc.forEach((item) => {
            item.textContent = "Monthly price based on annual subscription";
          });
        } else {
          txtdesc.forEach((item) => {
            item.textContent = " Monthly price based on 6 month subscription";
          });
        }
        if (index === 1) {
          const applyDiscount = fixedPrice.map((item) => item - item * 0.2);
          fillPrices(applyDiscount, pricesItems);
          if(activeRegister) fillInputRegister(applyDiscount)
           selectedValuePlan = document.querySelector('.cardpricing__selectPlan--input.active').value
           
        } else {
          fillPrices(fixedPrice, pricesItems);
          if(activeRegister) fillInputRegister(fixedPrice)
            selectedValuePlan = document.querySelector('.cardpricing__selectPlan--input.active').value
        }
       if(item.classList.contains('registerCompany__cards--switchPalns--div')){
        fillData(selectedPalnName,selectedValuePlan)

        localStorage.setItem('plansubscribe',item.querySelector('input').getAttribute('value'))
       }
        
      });
    }
  });
 
}
toggleBtns(toggleBtnsPricing,allPrices,yearlyPrices,toggleBtnsPricing);
toggleBtns(labelRegisterBtns,allPricesRegister,yearlyPricesRegister,labelRegisterBtns)

//addpricing page class

function addClassPage() {
  const arrayClasses = Array.from(document.body.children).map(
    (item) => item.className
  );

  if (arrayClasses.toString().indexOf("pricingPage") > -1) {
    document.body.classList.add("pricing");
  } else {
    document.body.classList.remove("pricing");
  }
  if (arrayClasses.toString().indexOf("aboutPage") > -1) {
    const txtAbout = document.querySelector(
      ".aboutPage__sectionOne--leftside--txt"
    );
    // txtAbout.style.maxHeight= window.innerHeight + "px"
    const wHeight = window.innerHeight;
    const txtHeight = txtAbout.clientHeight;
    const protionHeight = (wHeight * 50) / 100;
    txtAbout.style.height = (wHeight * 90) / 100 + "px";
    if (txtHeight > protionHeight) {
      document.body.classList.add("adjutment");
    } else {
      document.body.classList.remove("adjutment");
    }
  }
  //document.body.children.map((item)=>console.log(item))
}
addClassPage();
function toggleFrequently() {
  const allCards = document.querySelectorAll(".frequentlyAsk__container--card");
  const allTxt = document.querySelectorAll(".frequentlyAsk__container--card p");

  allCards.forEach((item, index) => {
    if (item) {
      item.addEventListener("click", () => {
        if (allTxt[index].classList.contains("active")) {
          item.classList.remove("active");
          allTxt[index].classList.remove("active");
        } else {
          allTxt[index].classList.add("active");
          item.classList.add("active");
        }
      });
    }
  });
}
toggleFrequently();

//fire select box

if (
  document.querySelector(
    ".saveTime__estimate--formTwo--inputGroup--input.select"
  )
) {
  $(document).ready(function () {
    $(".saveTime__estimate--formTwo--inputGroup--input.select").niceSelect();
  });
}
//scrolling to calculator

function scrollingCalculator() {
  const saveTimeSection = document.querySelector(".saveTime");

  window.scroll({
    top: saveTimeSection.offsetTop,

    behavior: "smooth",
  });
}

function getValuePlan() {
  window.addEventListener("load", () => {
    document.querySelectorAll(".list li").forEach((item) => {
      if (item.classList.contains("selected")) {
        plan = +item.getAttribute("data-value");
      }
      //  console.log(item.getAttribute("class","selected"))

      item.addEventListener("click", () => {
        plan = +item.getAttribute("data-value");
      });
    });
  });
  return plan;
}
getValuePlan();

function calculateSaving() {
  let data = {
    livingTraing: false,
    DewdroppersTraining: false,
    staffRate: false,
    noOfStaff: false,
    noOfCamapign: false,
  };

  const keysData = Object.keys(data);

  function fillingError(erorrTxt) {
    errorForm.textContent = erorrTxt;
  }
  /*
  function activeSavingResult() {
    savingResulInput.classList.add("active");
  }
  */

  allInputs.forEach((item, index) => {
   
    if(index===1){
        
      item.setAttribute('disabled',true)
    }
    item.addEventListener("keyup", () => {
      for (let i = 0; i < allInputs.length; i++) {
        if ( index === i ) {
          if (!isNaN(item.value) && item.value.trim().length !== 0 && (i===0?+item.value>.5:+item.value>0)) {
            data[keysData[i]] = +item.value;
            
          //  data[keysData[1]] = +item.value - .5;
            allParent[index].classList.add("right");
            allParent[index].classList.remove("wrong");
          } else {
            data[keysData[i]] = false;
            allParent[index].classList.add("wrong");
            allParent[index].classList.remove("right");
          }
        }
     
        
      }


      let  dewValue = data.livingTraing - .5
      if(index===0){
        if(!isNaN(item.value) && item.value.trim().length !== 0 && +item.value>.5){
          data.DewdroppersTraining=dewValue
          allInputs[1].value = dewValue
          fillingError()
        }else {
          dewValue = 0
          allInputs[1].value = dewValue
          fillingError('Should be greater than .5')
         
        }
    
        
      }
     

    
      

      if (
        data.livingTraing !== false    && 
        data.DewdroppersTraining !== false &&
        data.staffRate !== false &&
        data.noOfStaff !== false &&
        data.noOfCamapign !== false &&
        data.livingTraing > data.DewdroppersTraining
      ) {
        error = false;
      } else {
        error = true;
      }
      if (error) {
        calcButton.classList.remove("active");
        calcButton.setAttribute("disabled", true);
        savingResulInput.value = "00000";
      } else {
        calcButton.classList.add("active");
        calcButton.removeAttribute("disabled");
      }
    });
  });

  if (calcButton) {
    calcButton.addEventListener("click", () => {
      const slotOne =
        (data.livingTraing - (data.DewdroppersTraining)) *
        data.staffRate *
        data.noOfStaff *
        data.noOfCamapign;
      if (slotOne < plan) {
        error = true;
        fillingError("Please Review equivalent Plan");
      } else {
        fillingError("");
        const resultCalc =
          (data.livingTraing - data.DewdroppersTraining) *
            data.staffRate *
            data.noOfStaff *
            data.noOfCamapign -
          plan;
        savingResult = resultCalc.toLocaleString("en-US");
        //   activeSavingResult();
        // savingResulInput.setAttribute("placeholder", savingResult);
        savingResulInput.value = savingResult;
      }
      console.log(data)
      scrollingCalculator();
    });
  }
}
calculateSaving();
//distibute popup

function distributePop() {
  const allPops = document.querySelectorAll(
    ".saveTime__estimate--formTwo--inputGroup--popup"
  );
  allPops.forEach((item) => {
    if (item) {
     
      item.style.top = -(item.clientHeight + 10) + "px";
    }
  });
}
distributePop();

//Register Form

let activePersonal = false;
let activeCompany = false;
let step = 0;
let stepSpan = -1;
let selectCompany = true;
const radioInput = document.querySelectorAll(".registerForm__selectors input");
const personalWidget = document.querySelector(".registerForm__personal");
const companyWidget = document.querySelector(".registerForm__company");
const selectorsIdentity = document.querySelector(".registerForm__selectors");

const nextBtn = document.querySelector(
  ".registerForm__company__container--next"
);
const allComapnies = document.querySelectorAll(".companysteps");
const allSpanSteps = document.querySelectorAll(
  ".registerForm__company__container--steps span"
);
function removeAllClas(list){
  list.forEach((item)=>{
    item.classList.remove('active')
   })
}
 resetBackProgress=()=>{
 activePersonal = false;
activeCompany = false;
step = 0;
 stepSpan = -1;
 selectCompany = true;
 selectorsIdentity.classList.remove("hide");
 backButtonRegister.classList.remove('active')
 personalWidget.classList.remove('active')
 companyWidget.classList.remove('active')
 registerForm.classList.remove('active')
 removeAllClas(allSpanSteps)
 //removeAllClas(allComapnies)
 allComapnies.forEach((item,index)=>{
  if(index>0){
    item.classList.remove('active')
  }else {
    item.classList.add('active')
  }
 })
 
}

function activeSlide() {
  for (let i = 0; i < allComapnies.length; i++) {
    allComapnies[i].classList.remove("active");
  }
  if (allComapnies[step]) allComapnies[step].classList.add("active");
}

function progressSpan(spanParam) {
  if (allSpanSteps[spanParam]) allSpanSteps[spanParam].classList.add("active");
}
function removeProgressSpan(spanParam){
  if (allSpanSteps[spanParam]) allSpanSteps[spanParam].classList.remove("active");
}

function hideSelectors() {
  selectorsIdentity.classList.add("hide");
}
function showActiveIdintity(persoanlParam, companyParam) {
  if (persoanlParam) {
    personalWidget.classList.add("active");
    companyWidget.classList.remove("active");
  }
  if (companyParam) {
    companyWidget.classList.add("active");
    personalWidget.classList.remove("active");
  }
}
function togglePersonalCompany() {
  radioInput.forEach((item) => {
    item.addEventListener("click", () => {
      registerForm.classList.add("active");
      hideSelectors();
     
      if (item.getAttribute("id") == "personal") {
        activePersonal = true;
        activeCompany = false;
        selectCompany = false;
      } else {
        activeCompany = true;
        activePersonal = true;
        selectCompany = true;
      }
      showActiveIdintity(activePersonal, activeCompany);
      backButtonRegister.classList.add("active");
      // backButton();
    });
  });
}
togglePersonalCompany();

function backButton() {
  if(backButtonRegister){
    backButtonRegister.addEventListener("click", () => {
    
      if (!selectCompany || step === 0) {
        personalWidget.classList.remove("active");
        companyWidget.classList.remove("active");
        selectorsIdentity.classList.remove("hide");
        backButtonRegister.classList.remove("active");
        registerForm.classList.remove("active");
        activeCompany = false;
        activePersonal = false;
      } else {
        if (stepSpan >= 0) {
          stepSpan--;
         
        }
        removeProgressSpan(stepSpan+1);
       
  
        if (step >= 0) {
          step--;
          activeSlide();
        }
      }
  
      
    });
  }

}
backButton();

function compnayFlow() {
  //activeSlide();

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if(step<=stepForm){
        step++
      }
      
      stepSpan++;
      activeSlide();
      progressSpan(stepSpan);
      console.log(step);
    });
  }
}
compnayFlow();

function showSelectedCompanyItem(){
  function hideCardJs(){
    document.querySelector('.card-js').classList.add('hide')
  }
  function showCardJs(){
    document.querySelector('.card-js').classList.remove('hide')
  }
    fillData=(planName,valuePlan)=>{
    conatinerSelected.innerHTML = `
     <div>
    <h2 class="upperCaseFirstLtr">Plan: ${planName} based on ${localStorage.getItem('plansubscribe')} </h2>
    <h3>Price: ${valuePlan} USD</h3>
     </div>
    
    `
    showCardJs()
   }
   function showError(errorTxt){
    conatinerSelected.innerHTML = `
    <div>
    ${errorTxt}
    </div>
   `
   hideCardJs()
   
   }
  selectedItem.forEach((item)=>{
    item.addEventListener('click',()=>{
      selectedPalnName = item.getAttribute('id')
      selectedValuePlan = item.getAttribute('value')
      fillData(selectedPalnName,selectedValuePlan)
      for(let i = 0 ; i < selectedItem.length;i++){
        selectedItem[i].classList.remove('active')
      }
      item.classList.add('active')
    })
   
    showError('Please Select Plan')
  })
}
showSelectedCompanyItem()