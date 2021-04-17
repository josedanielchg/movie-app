export function SwiperEstructure(conf) {

     const d = document,
          $swiperContainer = d.createElement("div"),
          $styles = document.getElementById("dynamic-styles"),
          {
               SlidesComponent,
               slidesData,
               linkExploreAll,
          } = conf;
     
     $swiperContainer.classList.add("swiper-container");

     $swiperContainer.insertAdjacentHTML("beforeend", `
          <div class="swiper-wrapper"></div>
          <div class="swiper-button-prev swiper-button"></div>
          <div class="swiper-button-next swiper-button"></div>
          <div class="backdrop"></div>
     `);

     $styles.insertAdjacentHTML('beforeend', `
          .swiper-container {
               padding: 0 2.44rem;
               margin-bottom: 3.5rem;
          }
          .swiper-container {
               width: 100%;
               height: 100%;
          }

          .swiper-button-next {
               right: 0;
          }

          .swiper-button-prev {
               left: 0;
          }

          .swiper-button-prev,
          .swiper-button-next {
               top: 0;
               width: 2rem;
               height: 100%;
               margin-top: 0;
               color: #fff;
               background-color: rgba(0, 0, 0, 0.5);
          }

          .swiper-button-prev:hover,
          .swiper-button-next:hover {
               background-color: rgba(0, 0, 0, 0.8);
          }

          .swiper-button-prev::after,
          .swiper-button-next::after {
               font-size: 2rem;
          }

     `);

     slidesData.forEach( slideProps =>
          $swiperContainer.querySelector(".swiper-wrapper").appendChild(SlidesComponent({ props: slideProps }))
     );
     
     if(linkExploreAll)
          $swiperContainer.querySelector(".swiper-wrapper").appendChild(SlidesComponent({
               lastCard: {
                    title: "Explore More...",
                    link: linkExploreAll
               }
          }));

     return $swiperContainer;
}