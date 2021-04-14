export function ModalVideo(key) {

     const d = document,
          $modal = document.createElement("div"),
          $styles = document.getElementById("dynamic-styles");

     $modal.classList.add("modal", "active");
     $modal.id = "modal";

     $modal.insertAdjacentHTML("beforeend", `
          <div class="modal__iframe" >
               <button class="modal__close" id="close-trailer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 15 15"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"><path d="M.75.75l13.5 13.5M14.25.75L.75 14.25"></path></g></svg>
               </button>

               <iframe src="https://www.youtube.com/embed/${key}?rel=0&amp;showinfo=0&amp;autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen" __idm_id__="642651137"></iframe>
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
               cursor: pointer;
               width: 100%;
               height: 100%;
               background: #000;
          }

          .modal__iframe {
               position: relative;
               top: 45%;
               left: 50%;
               transform: translate(-50%, -50%);
               padding-bottom: 40%; /* 16:9 */
               width: 71.111%;
               height: 0;
          }

          .modal__iframe iframe {
               position: absolute;
               top: 2rem;
               left: 0;
               width: 100%;
               height: 100%;
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
          if($modal.classList.contains("active"))
               if(
                    e.target.matches("#close-trailer") || 
                    e.target.matches("#close-trailer *") || 
                    e.target.matches("#modal")
               ) {
                    const $root = d.getElementById("root");
                    $root.removeChild($modal)
               }
     });

     return $modal
}