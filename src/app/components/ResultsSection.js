import number_with_commas from "../helpers/number_with_commas.js"
import { MoviePosterCard } from "./MoviePosterCard.js"
import { SpinLoader } from "./SpinLoader.js"

export function ResultsSection(data) {
     const d = document,
          $section = document.createElement("section"),
          $styles = document.getElementById("dynamic-styles"),
          {
               title, 
               keyWord, 
               searchFormIsActive,
               results, 
               classList,
               totalResults
          } = data;

     $section.classList.add("results");

     if(searchFormIsActive) {
          d.getElementById("search-form").classList.add("active")
          d.querySelector(".search-form input").value = keyWord;
     } else
          $section.classList.add("whitout-extra-padding");

     if(classList)
          $section.classList.add(...classList)

     $section.insertAdjacentHTML("beforeend", `
          ${!title
               ? ""
               : `<div class="results__head">
                    <h2 class="results__title">${title}</h2>
                    ${!totalResults
                         ? ""
                         : `<h3>${number_with_commas(totalResults)} Results</h3>`
                    }
               </div>`
          }
          <div class="results__items"></div>
          <div class="results__loader"></div>
     `)

     $section.querySelector(".results__loader").insertAdjacentElement("beforeend", SpinLoader())

     results.forEach(movie =>
          $section.querySelector(".results__items").
               insertAdjacentElement("beforeend", MoviePosterCard( {props: movie} ) )
     );

     $styles.insertAdjacentHTML("beforeend", `
          .results {
               margin: 1.5rem 1.225rem;
               color: #141414;
               padding-top: 3.75rem;
          }

          .results.whitout-extra-padding {
               padding-top: 0;
          }

          .results__head {
               margin-bottom: 1.25rem;
          }

          .results__title {
               font-size: 1.125rem;
               letter-spacing: 0.4px;
          }

          .results__head h3 {
               font-weight: 400;
               font-size: 1rem;
               color: #666c70;
          }

          .results__items {
               display: flex;
               flex-wrap: wrap;
               margin-right: -4px;
               margin-left: -4px;
               margin-bottom: 1.25rem;
          }

          .results__items .card {
               width: calc(100% / 3);
               padding: 0 4px;
               margin-bottom: 1.25rem;
          }

          @media (min-width: 640px) {
               .results__items .card {
                    width: 25%;
                    margin-bottom: 1.5rem;
               }
          }

          @media (min-width: 768px) {
               .results {
                    margin: 1.5rem 2.5rem;
               }
          }

          @media (min-width: 1024px) {
               .results {
                    margin: 1.5rem 2.45rem;
                    padding-top: 6rem;
               }

               .results.whitout-extra-padding {
                    padding-top: 0;
               }

               .results__title {
                    font-size: 1.5rem;
               }

               .results__items .card {
                    width: 20%;
               }
          } 
     `);

     return $section;
}