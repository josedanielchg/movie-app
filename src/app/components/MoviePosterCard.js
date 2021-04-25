import string_to_slug from "../helpers/string_to_slug.js";
import starFill from "../assets/resources/star-fill.png";
import starFrame from "../assets/resources/star-frame.png";


export function MoviePosterCard(data) {
     const d = document,
          $card = document.createElement("div"),
          $styles = document.getElementById("dynamic-styles"),
          {props, lastCard} = data;

     $card.classList.add("movie-card", "swiper-slide", "card");

     if(props) {
          props.slug = `movie/${props.id}/${string_to_slug(props.title)}`;
          $card.insertAdjacentHTML("beforeend", `
               <a href="#/${props.slug}" class="card__link movie-link" title="${props.title}" data-id="${props.id}">
                    <div class="card__cover">
                         ${
                              props.poster_path
                              ? `<img src="https://image.tmdb.org/t/p/w342${props.poster_path}" alt="${props.title}" >`
                              : `<span><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd" fill="#20212"><path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-1 16h-19l4-7.492 3 3.048 5.013-7.556 6.987 12zm-11.848-2.865l-2.91-2.956-2.574 4.821h15.593l-5.303-9.108-4.806 7.243zm-4.652-11.135c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"></path></svg></span>`
                         }
                         
                    </div>
                    <h3 class="card__name">${props.title}</h3>
                    <div class="card__rating">
                         <div class="card__stars">
                              <div style="width: ${props.vote_average*10}%"></div>
                         </div>
                         <div class="card__vote">
                              ${props.vote_average}
                         </div>
                    </div>
               </a>
          `);
     }

     if(lastCard) {
          $card.classList.add("explore-all");

          $card.insertAdjacentHTML("beforeend", `
               <a href="${lastCard.link}" class="card__link" title="${lastCard.title}">
                    <div alt="" class="card__cover ">
                         <span>${lastCard.title}</span>
                    </div>
               </a>
          `);
     }

     $styles.insertAdjacentHTML('beforeend', `
          .movie-card {
               display: inline-block;
               margin: 0;
               white-space: normal;
               vertical-align: top;
          }

          .movie-card .card__cover {
               position: relative;
               height: 0;
               padding-top: 150.27%;
               background-color: #ccc;
               margin-bottom: 0.75rem;
          }

          .movie-card .card__cover img {
               position: absolute;
               display: block;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
               opacity: 1;
               transform: scale(1);
               display: block;
               max-width: 100%;
               min-height: 1px;
          }

          .movie-card .card__link {
               overflow: hidden;
          }

         .movie-card .card__name {
               margin-bottom: 0.25rem;
               text-overflow: ellipsis;
               overflow: hidden;
               font-size: 1rem;
               white-space: nowrap;
          }

          .movie-card .card__stars,
          .movie-card .card__stars > div {
               background-repeat: no-repeat;
               background-size: auto 100%;
          }

          .movie-card .card__stars {
               width: 4.5rem;
               height: 0.75rem;
               background-image: url(${starFrame});
          }

          .movie-card .card__stars > div {
               height: 100%;
               background-image: url(${starFill});
          }

          .movie-card .card__rating {
               display: flex;
               gap: 0.5rem;
          }

          .movie-card .card__vote {
               font-size: 0.75rem
          }

          .movie-card span {
               position: absolute;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
               display: flex;
               align-items: center;
               justify-content: center;
               font-size: 1rem;
          }
     `);

     return $card;
}