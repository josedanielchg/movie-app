import { SectionTitle } from "./SectionTitle.js"
import { SwiperEstructure } from "./SwiperEstructure.js";

export function SliderSection(conf) {

     const d = document,
          $section = d.createElement("section"),
          $styles = document.getElementById("dynamic-styles"),
          {title, SlidesComponent, slidesData, linkExploreAll} = conf;

     $section.classList.add("slider-section");
     $section.insertAdjacentElement( "beforeend", SectionTitle(title) );

     if(linkExploreAll)
          $section.insertAdjacentHTML("beforeend", `
               <a href="${linkExploreAll}" class="slider-section__explore-link">Explore all</a>
          `);

     $section.insertAdjacentElement( "beforeend", SwiperEstructure({
          SlidesComponent,
          slidesData,
          linkExploreAll,
     }) );

     $styles.insertAdjacentHTML("beforeend", `
          .slider-section {
               margin-bottom: 3rem;
          }

          .slider-section__title {
               font-size: 1.5rem;
               display: inline-block;
               margin-bottom: 1rem;
               margin-left: 2.45rem;
               margin-right: 0.5rem;
          }

          .slider-section__explore-link {
               font-weight: 800;
               font-size: 0.75rem;
               color: #2196f3;
          }
     `);

     return $section
}