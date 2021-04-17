export function  SwiperConfiguration() {

     const fitSliderArrows = () => {
          const $swiperButton = document.querySelectorAll(".swiper-button"),
                    cardImageHeight = document.querySelector(".card img").offsetHeight;

          $swiperButton.forEach(el => el.style.height = cardImageHeight + "px");
     },
     fitExploreAllCard = () => {
          const $exploreAllCards = document.querySelectorAll(".swiper-slide.explore-all"), 
               cardImageHeight = document.querySelector(".card img").offsetHeight,
               cardImageWidth = document.querySelector(".card img").offsetWidth;
          
          $exploreAllCards.forEach(el => {
               el.querySelector('a').style.height = cardImageHeight + "px";
               el.querySelector('a').style.width = cardImageWidth + "px";
               el.style.height = cardImageHeight + "px";
          });
     },
     imageIsLoad = (selector) => {
          const $image = document.querySelector(`.${selector} .card img`);

          if( $image.complete && $image.naturalHeight !== 0 ) {
               fitSliderArrows();
               fitExploreAllCard();
          }
          else
          setTimeout(() => imageIsLoad(selector), 500);
     }

     window.addEventListener("resize", e => {
          let resizeTimer;
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout( ()=> {
               fitSliderArrows();
               fitExploreAllCard();
          }, 100);
     })

     document.querySelectorAll(".slider-section").forEach(el => imageIsLoad(el.classList[1]));
}

