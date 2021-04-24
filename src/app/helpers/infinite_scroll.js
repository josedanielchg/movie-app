import { ajax } from "./ajax.js";
import api from "./TMDb-api.js";
import { MoviePosterCard } from "../components/MoviePosterCard.js"

export async function infiniteScroll() {
     const d = document,
          w = window;

     w.addEventListener("scroll", async e => {
          let {
               scrollTop,
               clientHeight,
               scrollHeight
          } = d.documentElement,
          { hash } = w.location;

          if(scrollTop + clientHeight >= scrollHeight)
               if(api.page < api.total_pages)
               {
                    api.page++;
                    d.getElementById("results-spin-loader").style.display = "block";
                    await ajax({
                    url: `${api.infinite_url}&page=${api.page}`,
                    cbSuccess: async (data) => {
                         const movies = data.results,
                              $fragment = d.createDocumentFragment();

                         movies.forEach(mov => 
                              $fragment.appendChild(MoviePosterCard({props: mov}))
                         );

                         d.querySelector(".results__items").appendChild($fragment)
                         d.getElementById("results-spin-loader").style.display = "none";
                    }
                    })
               }
     })
}