export function SectionTitle(title) {

     const $title = document.createElement("h2");
     
     $title.classList.add("slider-section__title")
     $title.innerText = title;

     return $title;
}