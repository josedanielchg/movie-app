import string_to_slug from "../helpers/string_to_slug.js"

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
                         <img src="https://image.tmdb.org/t/p/w342${props.poster_path}" alt="${props.title}" >
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
               <a href="${lastCard.link}" class="card__link card__explore-all" title="${lastCard.title}">
                    <div alt="" class="card__cover ">
                         ${lastCard.title}
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

          .movie-card .card__cover {
               margin-bottom: 0.75rem;
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
               background-image: url("../assets/resources/star-frame.png");
          }

          .movie-card .card__stars > div {
               height: 100%;
               background-image: url("../assets/resources/star-fill.png");
          }

          .movie-card .card__rating {
               display: flex;
               gap: 0.5rem;
          }

          .movie-card .card__vote {
               font-size: 0.75rem
          }

          .movie-card .card__explore-all {
               font-weight: 200;
               font-size: 1rem;
               text-align: center;
               cursor: pointer;
          }

          .movie-card .card__explore-all {
               display: flex;
               align-items: center;
               justify-content: center;
          }
     `);

     return $card;
}