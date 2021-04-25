import starFill from "../assets/resources/star-fill.png";
import starFrame from "../assets/resources/star-frame.png";

import { ajax } from "../helpers/ajax.js";
import api from "../helpers/TMDb-api.js";
import string_to_slug from "../helpers/string_to_slug.js"
import number_with_commas from "../helpers/number_with_commas.js";
import { cut_overview } from "../helpers/cut_overview.js";
import { ModalVideo } from "./ModalVideo.js";

export async function Header(props) {
     const d = document,
          $header = document.createElement("header"),
          $styles = document.getElementById("dynamic-styles");

     let trailerKey ;

     await ajax({
          url: `${api.MOVIE}/${props.id}/videos`,
          cbSuccess: (data) => trailerKey = data.results[0].key
     })

     $header.classList.add("header");

     props.slug = `movie/${props.id}/${string_to_slug(props.title)}`;
     $header.insertAdjacentHTML("beforeend", `
          <div class="header__backdrop">
               <button type="button" aria-label="Play Trailer" id="watch-trailer" data-key="${trailerKey}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55"><circle cx="27.5" cy="27.5" r="26.75" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></circle><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.97 40.81L40.64 27.5 20.97 14.19v26.62z"></path></svg>
               </button>
               ${
                    props.backdrop_path
                    ? `<img src="https://image.tmdb.org/t/p/w1280${props.backdrop_path}" alt="">`
                    : ""
               }
          </div>

          <div class="header__data">
               <div class="header__info">
                    <h1 class="header__title">
                         <a href="#/${props.slug}" data-id="${props.id}" class="movie-link">${props.title}</a>
                    </h1>
                    <div class="header__rating">
                         <div class="starts">
                              <div style="width: ${props.vote_average*10}%"></div>
                         </div>
                         <span class="reviews">${ number_with_commas(props.vote_count)} Reviews</span>
                    </div>
                    <div class="header__description">
                         <p>${cut_overview(props.overview)}</p>
                    </div>
                    <button type="button" class="button-icon" id="watch-trailer" data-key="${trailerKey}">
                         <span class="icon">
                              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#fff"><path d="M3 22v-20l18 10-18 10z"></path></svg>
                         </span>
                         <span>Watch Trailer</span>
                    </button>
               </div>
          </div>

     `);

     $styles.insertAdjacentHTML('beforeend', `

          .header {
               display: flex;
               flex-direction: column;
               justify-content: space-between;
               height: 21.875rem;
               color: #999;
               background-color: #000;
               box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
          }

          .header__backdrop {
               position: relative;
               display: flex;
               flex: 1 1 auto;
               min-height: 0;
          }

          .header__backdrop button {
               position: absolute;
               top: 50%;
               left: 50%;
               z-index: 1;
               padding: 0;
               margin: 0;
               background: none;
               transform: translate(-50%, -50%);
          }

          .header__backdrop img {
               display: inline-block;
               max-width: none;
               height: 100%;
          }

          .header__backdrop::after {
               background-image: linear-gradient(
               0deg,
               #000 0,
               rgba(0, 0, 0, 0.1) 50%,
               rgba(0, 0, 0, 0.1)
               );
               position: absolute;
               top: 0;
               right: 0;
               bottom: 0;
               left: 0;
               display: block;
               content: "";
          }

          .header__data {
               padding: 0 0.9375rem 0.9375rem;
          }

          .header__data * {
               color: #eee;
          }

          .header__data h1 {
               margin: 0 0 0.875rem;
               font-size: 1.75rem;
               line-height: 1.1;
               letter-spacing: 0.4px;
               font-weight: 400;
          }

          .header__rating {
               display: flex;
               align-items: center;
               font-size: 0.875rem;
               margin-bottom: 0.8125rem;
          }

          .header__rating * {
               color: #999;
          }

          .header__rating .starts {
               width: 6.4375rem;
               height: 1.0625rem;
               margin-right: 0.625rem;
               background-image: url(${starFrame});
               background-repeat: no-repeat;
               background-size: auto 100%;
          }

          .header__rating .starts div {
               height: 100%;
               background-image: url(${starFill});
               background-repeat: no-repeat;
               background-size: auto 100%;
          }

          .header__description {
               font-size: 1rem;
               line-height: 1.6;
               font-size: 0.9375rem;
               margin-bottom: 2.5rem;
          }

          .header__info button {
               background-color: #2f2f2f;
               transition: 0.3s ease all;
               padding: 1rem 1.5rem;
               font-size: 0.9375rem;
               font-weight: 700;
               line-height: 1;
               letter-spacing: 1px;
               display: inline-flex;
               align-items: center;
               cursor: pointer;
          }

          .header__info button:hover {
               background: #404040;
          }

          .header__info button .icon {
               margin-right: 0.625rem;
          }

          @media (min-width: 640px) {
               .header {
                    height: 31.25rem;
               }
          }

          @media (max-width: 767px) {
               .header__description {
                    display: none;
               }
          }

          @media (min-width: 768px) {
               .header__data {
                    padding: 0 2.5rem 2.5rem;
               }

               .header__data h1 {
                    margin-bottom: 1.125rem;
               }

               .header__rating {
                    margin-bottom: 1.5rem;
               }
          }

          @media (max-width: 1023px) {
               .header__description {
                    margin-bottom: 0rem;
               }

               .header__info button {
                    display: none;
               }
          }

          @media (min-width: 1024px) {
               .header {
                    position: relative;
                    display: block;
                    height: 0;
                    padding-bottom: 40%;
               }

               .header__backdrop {
                    position: absolute;
                    top: 0;
                    right: 0;
                    display: block;
                    width: 71.1%;
                    height: 100%;
               }

               .header__backdrop button {
                    display: none;
               }

               .header__backdrop::after {
                    background-image: linear-gradient(
                         90deg,
                         #000 0,
                         transparent 50%,
                         transparent
                    );
               }

               .header__data {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    z-index: 1;
                    display: flex;
                    align-items: center;
                    width: 55%;
                    height: 100%;
                    padding: 3.125rem 2.5rem;
               }
          }

          @media (min-width: 1200px) {
               .header__data {
                    padding-right: 3.125rem;
                    padding-left: 3.125rem;
               }

               .header__data h1 {
                    font-size: 2.4vw;
               }
          }
     `);

     d.addEventListener("click", e => {
          if(d.getElementById("modal")) return false
          if(!e.target.matches(".header #watch-trailer") && !e.target.matches(".header #watch-trailer *")) return false;

          const $watchTrailerBtn = d.getElementById("watch-trailer"),
               $root = d.getElementById("root");

          $root.appendChild( ModalVideo($watchTrailerBtn.dataset.key) );
     })

     return $header;
}