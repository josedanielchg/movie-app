import string_to_slug from "../helpers/string_to_slug.js"

export function CastCard(data) {
          const d = document,
          $card = document.createElement("div"),
          $styles = document.getElementById("dynamic-styles"),
          {props} = data;

     $card.classList.add("cast-card", "swiper-slide", "card");

     props.slug = string_to_slug(props.name);
     $card.insertAdjacentHTML("beforeend", `
          <a href="#/person/${props.id}/${props.slug}" class="card__link cast-link" title="${props.name}">
               <div class="card__cover">
                    <img src="https://image.tmdb.org/t/p/w342${props.profile_path}" alt="${props.name}">
               </div>
               <h3 class="card__name">${props.name}</h3>
               <div class="card__character">${props.character}</div>
          </a>
     `);

     $styles.insertAdjacentHTML('beforeend', `
          .cast-card {
               display: inline-block;
               margin: 0;
               white-space: normal;
               vertical-align: top;
          }

          .cast-card .card__cover {
               position: relative;
               height: 0;
               padding-top: 150.27%;
               background-color: #202124;
               margin-bottom: 0.625rem;
          }

          .cast-card .card__cover img {
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

          .cast-card .card__name {
               font-size: 1rem;
               letter-spacing: 0.4px;
          }

          .card__character {
               font-size: 0.75rem;
               color: #80868b;
               letter-spacing: 0.4px;
          }
     `);

     return $card;
}