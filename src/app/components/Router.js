import { ajax } from "../helpers/ajax.js"
import api from "../helpers/TMDb-api.js"

export function Router() {
     const d = document,
          w = window;

     let { hash } = location;

     if( !hash || hash === "#/" ) {
          ajax({
               url: api.TRENDING,
               cbSuccess: (movies) => {
                    console.log("Exito", movies);
               },
          });
     }
}