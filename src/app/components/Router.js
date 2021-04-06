import { ajax } from "../helpers/ajax.js"
import api from "../helpers/TMDb-api.js"

export function Router() {
     const d = document,
          w = window,
          $main = d.getElementById("main");

     let { hash } = location;

     if( !hash || hash === "#/" ) {
          ajax({
               url: [
                    api.POPULAR,
                    api.GENRES,
                    `${api.POPULAR}&with_genres=28`,
                    api.TRENDING,
               ],
               cbSuccess: (data) => {
                    const trending = data[0],
                         genres = data[1];

                    // console.log("Movies", trending);
                    // console.log("Genres", genres);
                    console.log(data);
               },
          });
     }
}