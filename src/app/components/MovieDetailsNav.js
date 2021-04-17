export function MovieDetailsNav() {
     const d = document,
          $nav = document.createElement("nav"),
          $styles = document.getElementById("dynamic-styles");
     
     $nav.classList.add("movie-details__nav")

     $nav.insertAdjacentHTML("beforeend", 
          `
          <button class="movie-details__button active">Overview</button>
          <button class="movie-details__button">Videos</button>
          <button class="movie-details__button">Photos</button>
          `
     );

     $styles.insertAdjacentHTML("beforeend", `
          .movie-details__nav {
               display: flex;
               height: 3rem;
               background-color: #1b1b1b;
          }

          .movie-details__nav button {
               display: block;
               width: 100%;
               padding: 0;
               margin: 0 0 2px;
               font-size: 0.875rem;
               font-weight: 500;
               color: #585858;
               text-transform: uppercase;
               letter-spacing: 0.4px;
               background: none;
               border-right: 1px solid #141414;
               outline: 0;
               transition: color 0.2s ease;
          }

          .movie-details__nav button:hover,
          .movie-details__nav button:focus {
               color: #fff;
          }

          .movie-details__nav button.active {
               color: #fff;
               background-color: #141414;
          }

          @media (min-width: 1024px) {
               .movie-details__nav {
                    justify-content: center;
                    margin-top: 1.5rem;
                    background: none;
               }

               .movie-details__nav button {
                    width: auto;
                    margin: 0 1.85rem;
                    font-size: 1.25rem;
                    border-bottom: 2px solid transparent;
                    border-right: transparent;
                    font-weight: 700;
               }

               .movie-details__nav button:hover,
               .movie-details__nav button:focus {
                    color: #141414;
               }

               .movie-details__nav button.active {
                    background: none;
                    border-color: #141414;
                    color: #141414;
               }
          }
     `);

     return $nav;
}