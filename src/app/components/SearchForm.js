export function SearchForm() {
     const d = document,
          $formContainer = d.createElement("div"),
          $styles = document.getElementById("dynamic-styles");
     
     $formContainer.classList.add("search-form-container");
     
     $formContainer.insertAdjacentHTML("beforeend", `
          <form autocomplete="off" class="search-form">
               <div class="search-form__field">
                    <input id="search" name="search" type="text" placeholder="Search for a movie...">
                    <button type="button" class="close-search">
                         <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"><path d="M.75.75l13.5 13.5M14.25.75L.75 14.25"></path></g></svg>
                    </button>
               </div>
          </form>
     `);

     $styles.insertAdjacentHTML('beforeend', `
          .search-form-container {
               position: fixed;
               top: 0;
               right: 0;
               left: 0;
               z-index: 10;
               transform: translateY(-100%);
               transition: 0.3s ease all;
          }

          .search-form-container.active {
              transform: translateY(0%);
          }

          .search-form__field {
               display: flex;
               background-color: #202124;
          }

          .search-form__field input {
               height: 3.75rem;
               padding: 1.25rem 1rem;
               flex: 1;
               font-size: 1rem;
               color: #eee;
               background: none;
               border: 0;
               outline: 0;
          }

          .search-form__field button {
               padding: 0 1rem;
               display: flex;
               align-items: center;
               background: none;
          }

          @media (min-width: 1024px) {
               .search-form-container {
                    left: 6.25rem;
               }

               .search-form__field input {
                    height: 5rem;
                    padding: 2rem 3.125rem;
               }

               .search-form__field button {
                    padding: 0 3.125rem;
               }
          }
     `);

     d.addEventListener("click", e => {
          if($formContainer.classList.contains("active")){
               if(
                    !$formContainer.contains(e.target) ||
                    e.target.matches(".close-search") ||
                    e.target.matches(".close-search *")
               )
                    $formContainer.classList.remove("active");
          }
          else {
               const $btnSearch = d.getElementById("search-btn");
               if( e.target === $btnSearch || $btnSearch.contains( e.target ) ) 
                    $formContainer.classList.add("active");
          }
     });

     return $formContainer;
}