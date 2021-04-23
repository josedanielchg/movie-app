import { MoviePosterCard } from "./MoviePosterCard.js"

export function ResultsSection(data) {
     const d = document,
          $section = document.createElement("section"),
          $styles = document.getElementById("dynamic-styles"),
          {
               title, 
               keyWord, 
               searchFormIsActive,
               results, 
               page,
               classList
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
               </div>`
          }
          <div class="results__items"></div>
          <div class="results__loader">
          </div>
     `)

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
               display: flex;
               align-items: baseline;
               margin-bottom: 1.25rem;
          }

          .results__title {
               font-size: 1.125rem;
               letter-spacing: 0.4px;
          }

          .results__items {
               display: flex;
               flex-wrap: wrap;
               margin-right: -4px;
               margin-left: -4px;
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