export function Nav() {
     const $nav = document.createElement("nav"),
          $styles = document.getElementById("dynamic-styles");

     $nav.classList.add("nav");

     $nav.insertAdjacentHTML("beforeend", `
          <ul >
               <li>
                    <a href="#">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-7b357a42=""><g fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-miterlimit="10" stroke-linejoin="round" data-v-7b357a42=""><path d="M8.5 23.2H1.3V9L12 .8 22.7 9v14.2h-7.2v-5c0-1.9-1.6-3.4-3.5-3.4s-3.5 1.5-3.5 3.4v5z" data-v-7b357a42=""></path></g></svg>
                    </a>
               </li>
               <li>
                    <button type="button" id="search-btn">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-7b357a42=""><g fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-miterlimit="10" data-v-7b357a42=""><path d="M16.4 16.7l6.3 6.5" data-v-7b357a42=""></path><ellipse cx="10.5" cy="9.8" rx="9.2" ry="9.1" data-v-7b357a42=""></ellipse></g></svg>
                    </button>
               </li>
               <li>
                    <a href="http://github.com/josedanielchg/" target="_blank">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path></svg>
                    </a>
               </li>
          </ul>
     `);

     $styles.insertAdjacentHTML('beforeend', `
          .nav {
               display: block;
               position: fixed;
               right: 0;
               bottom: 0;
               left: 0;
               z-index: 5;
               height: 2.8rem;
               background-color: #000;
          }

          .nav ul {
               display: flex;
               height: 100%;
          }

          .nav ul li {
               flex: 1 1 auto;
               height: 100%;
          }

          .nav a,
          .nav button {
               display: flex;
               align-items: center;
               justify-content: center;
               width: 100%;
               height: 100%;
               transition: all 0.2s;
          }

          .nav button {
               background: none;
               cursor: pointer;
          }

          @media (min-width: 1024px) {
               .nav {
                    top: 0;
                    right: auto;
                    width: 6.25rem;
                    height: 100%;
                    border-right: gray;
               }

               .nav ul {
                    flex-direction: column;
               }

               .nav ul li {
                    flex: 0 1 auto;
                    height: 6.5rem;
               }
          }
     `);

     return $nav
}