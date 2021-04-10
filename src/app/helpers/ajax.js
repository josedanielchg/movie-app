import TMDB_KEYS from "./TMDb-keys.js"

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
               console.log("Error", err);
          });
}