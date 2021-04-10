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