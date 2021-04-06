import TMDB_KEYS from "./TMDb-keys.js"

export function ajax(props) {

     let { url } = props,
          options = {
               headers: new Headers({
                    'Authorization': `Bearer ${TMDB_KEYS.v4}`,
                    'Content-Type': 'application/json;charset=utf-8',
               }),
               method: 'GET',
          }

     if (Array.isArray(url) )
          multipleRequest(props, options);
     else
          oneRequest(props, options);
}

// One Request
function oneRequest(props, options) {

     let { url, cbSuccess } = props;

     fetch(url, options)
          .then( (res) => (res.ok ? res.json() : Promise.reject(res) ) )
          .then( (json) => cbSuccess(json) )
          .catch( (err) => {
               console.log("Error", err);

          });
}

// Two or more Request
function multipleRequest(props, options) {

     let { url, cbSuccess } = props,
          urls = url.map( url => fetch(url, options));

     Promise.all(urls)
          .then( (responses) =>Promise.all(responses.map(res => res.json()) ) )
          .then( (data) => cbSuccess(data) )
          .catch( (err) => {
               console.log("Error", err);
          });
}