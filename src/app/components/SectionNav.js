export function SectionNav(props) {
     const d = document,
          $nav = document.createElement("nav"),
          $styles = document.getElementById("dynamic-styles"),
          {parentClass, navButtons} = props;
     
     $nav.classList.add("section-nav")

     navButtons.forEach( (bttn, index) => {
          let cssClass = (index === 0) 
               ? "section-nav__button active" 
               : "section-nav__button";

          $nav.insertAdjacentHTML("beforeend", `
               <button class="${cssClass}" data-target="${bttn.targetClass}">${bttn.name}</button>
          `)
     });

  $styles.insertAdjacentHTML("beforeend", `
          .section-nav {
               display: flex;
               height: 3rem;
               background-color: #1b1b1b;
          }

          .section-nav button {
               display: block;
               width: 100%;
               padding: 0;
               margin: 0 0 2px;
               font-size: 0.875rem;
               font-weight: 500;
               color: #585858;
               text-transform: uppercase;
               letter-spacing: 0.4px;
               background: none;
               border-right: 1px solid #141414;
               outline: 0;
               transition: color 0.2s ease;
          }

          .section-nav button:hover,
          .section-nav button:focus {
               color: #fff;
          }

          .section-nav button.active {
               color: #fff;
               background-color: #141414;
          }

          @media (min-width: 1024px) {
               .section-nav {
                    justify-content: center;
                    margin-top: 1.5rem;
                    background: none;
               }

               .section-nav button {
                    width: auto;
                    margin: 0 1.85rem;
                    font-size: 1.25rem;
                    border-bottom: 2px solid transparent;
                    border-right: transparent;
                    font-weight: 700;
               }

               .section-nav button:hover,
               .section-nav button:focus {
                    color: #141414;
               }

               .section-nav button.active {
                    background: none;
                    border-color: #141414;
                    color: #141414;
               }
          }
     `);

     d.addEventListener("click", e => {

          if(!e.target.matches(".section-nav__button")) return false;
          if(e.target.matches(".section-nav__button.active")) return false;

          d.querySelectorAll(".section-nav__button").forEach(bttn => bttn.classList.remove("active"));
          e.target.classList.add("active");

          d.querySelectorAll(parentClass + " > div").forEach(el => el.classList.remove("active"));
          d.querySelector(e.target.dataset.target).classList.add("active")
     })

     return $nav;
}