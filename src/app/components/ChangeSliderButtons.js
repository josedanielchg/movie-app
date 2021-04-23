import api from "../helpers/TMDb-api.js"
import genresList from "../helpers/genresList";
import { ajax } from "../helpers/ajax.js"

export function ChangeSliderButtons(conf) {
     const d = document,
          $buttonsContainer = d.createElement("div"),
          $styles = document.getElementById("dynamic-styles"),
          {
               sliderClass,
               data,
               SlidesComponent
          } = conf;

     $buttonsContainer.classList.add("buttons-container");

     data.forEach( (el, index) => {
          let CssClass = "change-button";
          if(index === 0) CssClass += " active";
          $buttonsContainer.insertAdjacentHTML("beforeend", `
               <button class="${CssClass}" data-id="${el.id}">${el.name}</button>
          `);
     });

     $styles.insertAdjacentHTML("beforeend", `
          .buttons-container {
               margin-bottom: 1rem;
               display: flex;
               flex-wrap: wrap;
               justify-content: center;
          }

          .buttons-container button {
               background: rgba(0, 0, 0, 0.1);
               border: 1px solid rgba(0, 0, 0, 0.15);
               display: inline-block;
               border-radius: 1rem;
               margin: 0.375rem;
               padding: 0.225rem 0.75rem;
               font-size: 0.75rem;
          }

          .buttons-container button.active {
               background: #606060;
               color: #eee;
          }

          @media (min-width: 600px) {
               .buttons-container {
                    margin-left: 2.45rem;
                    justify-content: flex-start;
               }

               .buttons-container button {
                    margin: 0.5rem;
                    padding: 0.3rem 1rem;
                    font-size: 1rem;
               }
          }
     `);

     d.addEventListener("click", e => {
          if( !e.target.matches(".buttons-container *") ) return false;
          
          d.querySelectorAll(".change-button").forEach( bttn => bttn.classList.remove("active") );
          e.target.classList.add("active");

          const $backdrop = document.querySelector(`.${sliderClass} .backdrop`);

          $backdrop.style.display = "block";

          ajax({
               url: `${api.POPULAR}&with_genres=${e.target.dataset.id}`,
               cbSuccess: (data) => {
                    const results = data.results,
                         $fragment = d.createDocumentFragment();

                    let $slides = d.querySelectorAll(`.${sliderClass} .swiper-slide`),
                         width = $slides[0].style['width'],
                         margin_right = $slides[0].style['margin-right'];

                    d.querySelector(`.${sliderClass} .swiper-wrapper`).innerHTML = null;

                    results.forEach( result => {
                         let $slide =  SlidesComponent({ props: result });
                         $fragment.appendChild($slide);
                         $slide.style['width'] = width;
                         $slide.style['margin-right'] = margin_right;
                    });

                    let $lastCard = SlidesComponent({
                         lastCard: {
                              title: "Explore More...",
                              link: `#/genre/${e.target.dataset.id}/${genresList.find(genre => genre.id == e.target.dataset.id).name}`
                         }
                    })
                    $fragment.appendChild($lastCard);
                    $lastCard.style['width'] = width;
                    $lastCard.style['margin-right'] = margin_right;

                    d.querySelector(`.${sliderClass} .swiper-wrapper`).appendChild($fragment)
                    $backdrop.style.display = "none";
               }
          });
     });

     return $buttonsContainer;
}