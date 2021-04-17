import { SliderSection } from "./SliderSection.js";
import { CastCard } from "./CastCard.js"
import string_to_slug from "../helpers/string_to_slug.js";
import runtime_parse from "../helpers/runtime_parse.js";
import number_with_commas from "../helpers/number_with_commas.js";

export function OverViewSection(props) {
     const d = document,
          $overViewSection = document.createElement("div"),
          $styles = document.getElementById("dynamic-styles");

     $overViewSection.classList.add("movie-details__overview");

     const months = [
               "January", "February", "Mach", "April", "May", "June", 
               "July", "August", "September", "October", "November", "December"
          ],
          langugeName = new Intl.DisplayNames(['en'], {type: 'language'}),
          date = new Date(props.release_date+"T00:00:00"),
          release_date = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`,
          directors = props.casts.crew
               .filter(el => el.job === "Director")
               .map(el => `
                    <a href="#/person/${string_to_slug(el.name)}" title="${el.name}" data-id="${el.id}">
                         ${el.name}
                    </a>
               `)
               .join(", "),
          genres = props.genres
               .map(el => `<a href="#/genre/${el.name}" title="${el.name}" data-id="${el.id}}">${el.name}</a>`)
               .join(", "),
          productionCompanies = props.production_companies.map(el => el.name).join(", "),
          budget = (props.budget === 0) ? false : props.budget;


     $overViewSection.insertAdjacentHTML("beforeend", `
          <div class="details">
               <div class="left">
                    <div class="poster">
                         <img src="https://image.tmdb.org/t/p/w342${props.poster_path}" alt="${props.title}" class="card__cover">
                    </div>
               </div>

               <div class="right">
                    <div class="overview">
                         <h2 class="title">Storyline</h2>
                         <div>
                              <p>${props.overview}</p>
                         </div>
                    </div>
                    <div class="stats">
                         <ul>
                              <li>
                                   <span class="label">Released </span>
                                   <span class="value">${release_date}</span>
                              </li>
                              <li>
                                   <span class="label">Runtime </span>
                                   <span class="value">${runtime_parse(props.runtime)}</span>
                              </li>
                              <li>
                                   <span class="label">Director </span>
                                   <span class="value">${directors}</span>
                              </li>
                              ${!budget ? "" : `
                              <li>
                                   <span class="label">Budget </span>
                                   <span class="value">$${number_with_commas(budget)}</span>
                              </li>`}
                              <li>
                                   <span class="label">Revenue </span>
                                   <span class="value">$${ number_with_commas(props.revenue)} </span>
                              </li>
                              <li>
                                   <span class="label">Genre </span>
                                   <span class="value">${genres}</span>
                              </li>
                              <li>
                                   <span class="label">Status </span>
                                   <span class="value">${props.status}</span>
                              </li>
                              <li>
                                   <span class="label">Language </span>
                                   <span class="value">${langugeName.of(props.original_language)}</span>
                              </li>
                              <li>
                                   <span class="label">Production </span>
                                   <span class="value">${productionCompanies}</span>
                              </li>
                         </ul>
                    </div>
               </div>
          </div>
     `);

     $overViewSection.insertAdjacentElement("beforeend", SliderSection(
          {
               title: "Cast",
               SlidesComponent: CastCard,
               slidesData: props.casts.cast,
               sliderClass: 'trending'
          }
     ));

     $styles.insertAdjacentHTML("beforeend", `

          .movie-details__overview .details {
               margin: 1.5rem 1.225rem;
          }

          .movie-details__overview .left {
               display: none;
          }

          .movie-details__overview .left .poster {
               position: relative;
               height: 0;
               padding-top: 150.27%;
               overflow: hidden;
               background-color: #202124;
          }

          .movie-details__overview .left .poster img {
               position: absolute;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
          }

          .movie-details__overview .right .overview {
               max-width: 1000px;
               margin-bottom: 1.85rem;
               font-size: 1rem;
               color: #1b1b1b;
          }

          .movie-details__overview .right .overview h2 {
               margin-bottom: 1rem;
               font-size: 1.5rem;
               letter-spacing: 0.4px;
          }

          .movie-details__overview .right .stats {
               margin-bottom: 1.875rem;
               font-size: 1rem;
          }

          .movie-details__overview .right .stats ul {
               padding: 0;
               margin: 0;
               list-style: none;
          }

          .movie-details__overview .right .stats li {
               display: flex;
               padding: 2px 0;
          }

          .movie-details__overview .right .stats .label {
               flex: 1;
               max-width: 90px;
               margin-right: 1rem;
               color: #000;
               font-weight: 700;
          }

          .movie-details__overview .right .stats .value {
               flex: 2;
          }

          .movie-details__overview .right .stats li a {
               text-decoration: underline;
          }

          @media (min-width: 640px) {
               .movie-details__overview .right .stats .label {
                    max-width: 110px;
               }
          }

          @media (min-width: 768px) {
               .movie-details__overview .details {
                    margin: 1.5rem 2.5rem;
               }
          }

          /* ----------------------- */
          @media (min-width: 1024px) {
               .movie-details__overview .details {
                    margin: 3.15rem 2.45rem;
                    display: flex;
               }

               .movie-details__overview .left {
                    display: block;
                    width: 25%;
                    max-width: 400px;
                    padding-right: 2.45rem;
               }

               .movie-details__overview .right {
                    flex: 1;
               }

               .movie-details__overview .right h2 {
                    font-size: 1.5rem;
               }

               .movie-details__overview .right .stats ul {
                    display: flex;
                    flex-wrap: wrap;
               }

               .movie-details__overview .right .stats li {
                    width: 50%;
               }
          }

          @media (min-width: 1400px) {
               .movie-details__overview .right .stats li {
                    width: 100%;
               }
          }
     `)

     return $overViewSection;
}