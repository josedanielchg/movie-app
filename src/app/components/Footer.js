export function Footer() {

     const $footer = document.createElement("footer"),
          $styles = document.getElementById("dynamic-styles");

     $footer.classList.add("footer");

     $footer.insertAdjacentHTML("beforeend", `
          <p>
               © 2021 José Chacón
          </p>
          <p>
               This product uses the TMDb API but is not endorsed or certified by TMDb
          </p>
     `);

     $styles.insertAdjacentHTML('beforeend', `
          .footer {
               background-color: #141414;
               padding: 2.45rem;
               color: #80868b;
               font-size: 0.875rem;
               margin-top: 3rem;
          }

          .footer p {
               margin: 3px 0;
               line-height: 1.6;
          }
     `);

     return $footer
}