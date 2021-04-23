import { SectionNav } from "./SectionNav.js";
import { OverViewSection } from "./OverViewSection.js";
import { VideosSection } from "./VideosSection.js";
import { PhotosSection } from "./PhotosSection.js";

export function MovieDetailsSection(props) {
     const d = document,
          $section = document.createElement("section"),
          $styles = document.getElementById("dynamic-styles");

     $section.classList.add("movie-details");

     let sections = [{name: "Overview", targetClass: ".movie-details__overview"}     ]

     if(props.videos.results.length > 0)
          sections.push({name: "Videos", targetClass: ".movie-details__videos"})

     if(props.images.backdrops.length > 0 || props.images.posters.length > 0)
          sections.push( {name: "Photos", targetClass: ".movie-details__photos"})

     $section.insertAdjacentElement("beforeend", SectionNav({
          parentClass: ".movie-details",
          navButtons: sections
     }) );

     $section.insertAdjacentElement("beforeend", OverViewSection(props) );
     $section.insertAdjacentElement("beforeend", VideosSection(props.videos.results) );
     $section.insertAdjacentElement("beforeend", PhotosSection({
          classList: ["movie-details__photos"],
          images: props.images
     }) );

  $styles.insertAdjacentHTML("beforeend", `
          .movie-details {
               position: relative;
          }

          .movie-details > div {
               display: none;
               opacity: 0;
               pointer-events: none;
          }

          .movie-details > div.active {
               display: block;
               position: relative;
               pointer-events: all;
               opacity: 1;
          }
     `);

     return $section;
}