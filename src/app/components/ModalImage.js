export function ModalImage(file_path) {

     const d = document,
          $modal = document.createElement("div"),
          $styles = document.getElementById("dynamic-styles");

     $modal.classList.add("modal", "active");
     $modal.id = "modal";

     $modal.insertAdjacentHTML("beforeend", `
          <div class="modal__image" >
               <button class="modal__close" id="close-trailer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"><path d="M.75.75l13.5 13.5M14.25.75L.75 14.25"></path></g></svg>
               </button>

               <img src="https://image.tmdb.org/t/p/original${file_path}" alt="" class="modal">
          </div>
     `);

     $styles.insertAdjacentHTML('beforeend', `
          .modal {
               position: fixed;
               top: 0;
               right: 0;
               bottom: 0;
               left: 0;
               z-index: 999;
               overflow-x: hidden;
               overflow-y: hidden;
               width: 100%;
               height: 100%;
               background: #000;
          }

          .modal__image {
               position: relative;
               width: 100%;
               height: 100%;
          }

          .modal__image img {
               position: absolute;
               max-height: 85%;
               max-width: 85%;
               object-fit: contain;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
               width: auto;
               height: auto;
          }

          .modal__close {
               position: absolute;
               top: 0;
               right: 0;
               width: 2rem;
               height: 2rem;
          }
     `);

     d.addEventListener("click", e => {
          if(!e.target.matches("#modal") && !e.target.matches("#modal *")) return false;

          if(d.querySelector("#modal.active"))
               if(
                    e.target.matches("#close-trailer") || 
                    e.target.matches("#close-trailer *") || 
                    e.target.matches("#modal") ||
                    e.target.matches(".modal__image")
               ) {
                    const $root = d.getElementById("root");
                    $root.removeChild(d.querySelector("#modal"));
               }
     });

     return $modal
}