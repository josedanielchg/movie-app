import TMDB_KEYS from "./TMDb-keys.js"

export function ajax(props) {

     let { url, cbSuccess } = props,
          options = {
          headers: new Headers({
               'Authorization': `Bearer ${TMDB_KEYS.v4}`,
               'Content-Type': 'application/json;charset=utf-8',
          }),
          method: 'GET',
     }

     fetch(url, options)
          .then( (res) => (res.ok ? res.json() : Promise.reject(res) ) )
          .then( (json) => cbSuccess(json) )
          .catch( (err) => {
               console.log("Error", err);
               // let message = err.statusText || "Ocurrió un error al acceder a la API";

               // document.getElementById("main").innerHTML = `
               //      <div class="error">
               //           <p>Error ${err.status}: ${message}</p>
               //      </div>
               // `;
               // document.querySelector(".loader").style.display = "none";
          });
}