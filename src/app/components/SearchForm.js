export function SearchForm() {
     const d = document,
          $form = d.createElement("form"),
          $input = d.createElement("input");

     $form.classList.add("search-frm");
     $input.name = "search";
     $input.type = "search";
     $input.placeholder = "Search for a movie...";
     $input.autocomplete = "off";

     $form.appendChild($input);

     d.addEventListener("submit", e => {
          if( !e.target.matches(".search-form")) return false;
          e.preventDefault();

          //Search logic
     });

     return $form;
}