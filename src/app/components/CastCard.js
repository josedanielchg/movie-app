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
                    ${
                         props.profile_path
                              ? `<img src="https://image.tmdb.org/t/p/w342${props.profile_path}" alt="${props.name}">`
                              : `<span><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd" fill="#202124"><path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-1 16h-19l4-7.492 3 3.048 5.013-7.556 6.987 12zm-11.848-2.865l-2.91-2.956-2.574 4.821h15.593l-5.303-9.108-4.806 7.243zm-4.652-11.135c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"></path></svg></span>`
                    }
                    
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
               background-color: #ccc;
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

          .cast-card .card__cover span {
               display: flex;
               align-items: center;
               justify-content: center;
               position: absolute;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
          }

          .cast-card .card__cover svg {
               vertical-align: middle;
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