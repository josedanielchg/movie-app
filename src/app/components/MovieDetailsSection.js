import { MovieDetailsNav } from "./MovieDetailsNav.js";
import string_to_slug from "../helpers/string_to_slug.js";
import runtime_parse from "../helpers/runtime_parse.js";
import number_with_commas from "../helpers/number_with_commas.js";

export function MovieDetailsSection(props) {
     const d = document,
          $section = document.createElement("section"),
          $styles = document.getElementById("dynamic-styles");

          console.log(props)

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

     $section.classList.add("movie-details");

     $section.insertAdjacentElement("beforeend", MovieDetailsNav() );
     $section.insertAdjacentHTML("beforeend", `
          <div class="movie-details__overview">
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

     return $section;
}