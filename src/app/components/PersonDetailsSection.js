import { SectionNav } from "./SectionNav.js";
import { ResultsSection } from "./ResultsSection";
import { CreditsSection } from "./CreditsSection.js";
import { PhotosSection } from "./PhotosSection.js";

export function PersonDetailsSection(props) {
     const d = document,
          $section = d.createElement("div"),
          $styles = d.getElementById("dynamic-styles"),
          {movieCredits, images} = props

     console.log(props);
     
     $section.classList.add("person-details");

     $section.insertAdjacentElement("beforeend", SectionNav({
          parentClass: ".person-details",
          navButtons: [
               {name: "Known For", targetClass: ".person-details__known-for"},
               {name: "Credits", targetClass: ".person-details__credits"},
               {name: "Photos", targetClass: ".person-details__photos"}
          ]
     }) );

     $section.insertAdjacentElement("beforeend", ResultsSection({
          title: false,
          results: movieCredits.cast.sort((a,b) => b.popularity - a.popularity),
          searchFormIsActive: false,
          classList: ["person-details__known-for", "active"]
     }) );
     $section.insertAdjacentElement("beforeend", CreditsSection(movieCredits.cast.sort((a,b) => b.popularity - a.popularity)) );
     $section.insertAdjacentElement("beforeend", PhotosSection({
          images: {photos: props.images.profiles},
          classList: ["person-details__photos"]
     }) );

     $styles.insertAdjacentHTML("beforeend", `
          .person-details {
               position: relative;
          }

          .person-details > div,
          .person-details > section {
               display: none;
               opacity: 0;
               pointer-events: none;
          }

          .person-details > div.active,
          .person-details > section.active {
               display: block;
               position: relative;
               pointer-events: all;
               opacity: 1;
          }

          .person-details .person-details__known-for {
          margin-top: 3.15rem;
          }
     `)

     return $section;
}