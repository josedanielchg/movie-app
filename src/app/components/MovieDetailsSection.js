import { MovieDetailsNav } from "./MovieDetailsNav.js";
import { OverViewSection } from "./OverViewSection.js";

export function MovieDetailsSection(props) {
     const d = document,
          $section = document.createElement("section"),
          $styles = document.getElementById("dynamic-styles");

          console.log(props)

     $section.classList.add("movie-details");

     $section.insertAdjacentElement("beforeend", MovieDetailsNav() );
     $section.insertAdjacentElement("beforeend", OverViewSection(props) );

     return $section;
}