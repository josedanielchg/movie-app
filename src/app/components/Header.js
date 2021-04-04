import { SearchForm } from "./SearchForm"

export function Header() {
     const $header = document.createElement("header");
     $header.classList.add("header");

     $header.insertAdjacentHTML("beforeend", `
          <a href="#" class="logo-container">
               <img src="" alt="logo" class="logo">
          </a>
     `);

     $header.insertAdjacentElement("beforeend", SearchForm() );

     return $header;
}