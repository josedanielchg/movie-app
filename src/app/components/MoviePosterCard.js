import string_to_slug from "../helpers/string_to_slug.js"

export function MoviePosterCard(data) {
     const $card = document.createElement("div"),
          $styles = document.getElementById("dynamic-styles"),
          {props, lastCard} = data;

     $card.classList.add("card", "swiper-slide");

     if(props) {
          props.slug = string_to_slug(props.title);

          $card.insertAdjacentHTML("beforeend", `
               <a href="#/${props.slug}" class="card__link" title="${props.title}">
                    <img src="https://image.tmdb.org/t/p/w342${props.poster_path}" alt="${props.title}" class="card__cover">
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
          .card__link {
               overflow: hidden;
          }

          .card__cover {
               margin-bottom: 0.75rem;
          }

         .card__name {
               margin-bottom: 0.25rem;
               text-overflow: ellipsis;
               overflow: hidden;
               font-size: 1rem;
               white-space: nowrap;
          }

          .card__stars,
          .card__stars > div {
               background-repeat: no-repeat;
               background-size: auto 100%;
          }

          .card__stars {
               width: 4.5rem;
               height: 0.75rem;
               background-image: url("../assets/resources/star-frame.png");
          }

          .card__stars > div {
               height: 100%;
               background-image: url("../assets/resources/star-fill.png");
          }

          .card__rating {
               display: flex;
               gap: 0.5rem;
          }

          .card__vote {
               font-size: 0.75rem
          }

          .card__explore-all {
               font-weight: 200;
               font-size: 1rem;
               text-align: center;
               cursor: pointer;
          }

          .card__explore-all {
               display: flex;
               align-items: center;
               justify-content: center;
          }
     `);

     return $card;
}