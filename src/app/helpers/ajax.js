import TMDB_KEYS from "./TMDb-keys.js"
import { PageNotFound } from "../components/PageNotFound.js"

export async function ajax(props) {

     let { url } = props,
          options = {
               headers: new Headers({
                    'Authorization': `Bearer ${TMDB_KEYS.v4}`,
                    'Content-Type': 'application/json;charset=utf-8',
               }),
               method: 'GET',
          }

     if (Array.isArray(url) )
          await multipleRequest(props, options);
     else
          await oneRequest(props, options);
}

// One Request
async function oneRequest(props, options) {

     let { url, cbSuccess } = props;

     await fetch(url, options)
          .then( (res) => (res.ok ? res.json() : Promise.reject(res) ) )
          .then( (json) => cbSuccess(json) )
          .catch( (err) => {
               let title = err.status ? `Error ${err.status}` : "Error accessing to the API",
                    message = err.statusTet || "An error has occurred";
               const $title = document.querySelector("title"),
                    $main = document.getElementById("main");

               $title.innerText = "Error - Movie App"
               $main.insertAdjacentElement("beforeend",PageNotFound({
                    title,
                    message,
                    tryAgain: true
               }))
               console.log("Error", err);
          });
}

// Two or more Request
async function multipleRequest(props, options) {

     let { url, cbSuccess } = props,
          urls = url.map( url => fetch(url, options));

     await Promise.all(urls)
          .then( (responses) =>Promise.all(responses.map(res => res.json()) ) )
          .then( (data) => cbSuccess(data) )
          .catch( (err) => {
               let title = err.status ? `Error ${err.status}` : "Error accessing to the API",
                    message = err.statusTet || "An error has occurred"
               const $title = document.querySelector("title"),
                    $main = document.getElementById("main");

               $title.innerText = "Error - Movie App"
               $main.insertAdjacentElement("beforeend",PageNotFound({
                    title,
                    message,
                    tryAgain: true
               }))
               console.log("Error", err);
          });
}