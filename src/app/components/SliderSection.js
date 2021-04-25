import { SectionTitle } from "./SectionTitle.js"
import { SwiperEstructure } from "./SwiperEstructure.js";
import { ChangeSliderButtons } from "./ChangeSliderButtons";

export function SliderSection(conf) {

     const d = document,
          $section = d.createElement("section"),
          $styles = document.getElementById("dynamic-styles"),
          {
               title,
               SlidesComponent,
               slidesData,
               linkExploreAll,
               sliderClass,
               changeSlidersButtonsData
          } = conf;

     $section.classList.add("slider-section", sliderClass);
     $section.insertAdjacentElement( "beforeend", SectionTitle(title) );

     if(linkExploreAll)
          $section.insertAdjacentHTML("beforeend", `
               <a href="${linkExploreAll}" class="slider-section__explore-link">Explore all</a>
          `);

     if(changeSlidersButtonsData)
          $section.insertAdjacentElement("beforeend", ChangeSliderButtons({
               sliderClass,
               data: changeSlidersButtonsData,
               SlidesComponent
          }));

     $section.insertAdjacentElement( "beforeend", SwiperEstructure({
          SlidesComponent,
          slidesData,
          linkExploreAll,
     }) );

     $styles.insertAdjacentHTML("beforeend", `
          .slider-section {
               margin-top: 3rem;
          }

          .slider-section__title {
               font-size: 1.5rem;
               display: inline-block;
               margin-bottom: 1rem;
               margin-left: 1.225rem;
               margin-right: 0.5rem;
          }

          .slider-section__explore-link {
               font-weight: 800;
               font-size: 0.75rem;
               color: #2196f3;
          }

          @media (min-width: 768px) {
               .slider-section__title {
                    margin-left: 2.5rem;
               }
          }

          @media (min-width: 1024px) {
               .slider-section__title {
                    margin-left: 2.45rem;
               }
          }
     `);

     return $section
}