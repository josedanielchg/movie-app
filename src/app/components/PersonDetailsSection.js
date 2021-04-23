import { SectionNav } from "./SectionNav.js";
import { ResultsSection } from "./ResultsSection";
import { CreditsSection } from "./CreditsSection.js";
import { PhotosSection } from "./PhotosSection.js";

export function PersonDetailsSection(props) {
     const d = document,
          $section = d.createElement("section"),
          $styles = d.getElementById("dynamic-styles"),
          {movieCredits, images} = props,
          navSection = [];

     $section.classList.add("person-details");

     //Nav Buttons according to data
     if(movieCredits.cast.length > 0)
          navSection.push({name: "Known For", targetClass: ".person-details__known-for"});

     if(movieCredits.cast.length > 0 || movieCredits.crew.length >0)
          navSection.push({name: "Credits", targetClass: ".person-details__credits"});

     if(images.profiles.length > 0)
          navSection.push({name: "Photos", targetClass: ".person-details__photos"})

     $section.insertAdjacentElement("beforeend", SectionNav(navSection));

     //Nav Section Activate by default according to data
     if(navSection.find(sec => sec.name === "Known For"))
          $section.insertAdjacentElement("beforeend", ResultsSection({
               title: false,
               results: movieCredits.cast.sort((a,b) => b.popularity - a.popularity),
               searchFormIsActive: false,
               classList: ["person-details__known-for", "active"]
          }) );

     if(navSection.find(sec => sec.name === "Known For"))
          $section.insertAdjacentElement("beforeend", CreditsSection({
               cast: movieCredits.cast.sort((a,b) => new Date(b.release_date) - new Date(a.release_date)),
               crew: movieCredits.crew.sort((a,b) => new Date(b.release_date) - new Date(a.release_date)),
               classList: ["person-details__credits"]
          }) );
     else
          $section.insertAdjacentElement("beforeend", CreditsSection({
               cast: movieCredits.cast.sort((a,b) => new Date(b.release_date) - new Date(a.release_date)),
               crew: movieCredits.crew.sort((a,b) => new Date(b.release_date) - new Date(a.release_date)),
               classList: ["person-details__credits", "active"]
          }) );

     if(navSection.find(sec => sec.name === "Known For") || navSection.find(sec => sec.name === "Credits"))
          $section.insertAdjacentElement("beforeend", PhotosSection({
               images: {photos: props.images.profiles},
               classList: ["person-details__photos"]
          }) );
     else
          $section.insertAdjacentElement("beforeend", PhotosSection({
               images: {photos: props.images.profiles},
               classList: ["person-details__photos", "active"]
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

          .person-details .person-details__known-for  {
               margin: 1.5rem 1.225rem;
          }

          @media (min-width: 768px) {
               .person-details .person-details__known-for  {
                    margin: 1.5rem 2.5rem;
               }
          }

          @media (min-width: 1024px) {
               .person-details .person-details__known-for  {
                    margin: 3.75rem 2.45rem;
               }
          }
     `)

     return $section;
}