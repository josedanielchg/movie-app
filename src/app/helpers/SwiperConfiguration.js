export function  SwiperConfiguration() {

     const fitSliderArrows = () => {
          const $swiperButton = document.querySelectorAll(".swiper-button"),
                    cardImageHeight = document.querySelector(".card img").offsetHeight;

          $swiperButton.forEach(el => el.style.height = cardImageHeight + "px");
     },
     fitExploreAllCard = () => {
          const $exploreAllCard = document.querySelector(".swiper-slide.explore-all"), 
               cardImageHeight = document.querySelector(".card img").offsetHeight;
          
          $exploreAllCard.style.height = cardImageHeight + "px";
     },
     imageIsLoad = () => {
          const $image = document.querySelector(".card img");

          if( $image.complete && $image.naturalHeight !== 0 ) {
               fitSliderArrows();
               fitExploreAllCard();
          }
          else
          setTimeout(() => imageIsLoad(), 500);
     }

     window.addEventListener("resize", e => {
          let resizeTimer;
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout( ()=> {
               fitSliderArrows();
               fitExploreAllCard();
          }, 100);
     })
     
     imageIsLoad();
}

