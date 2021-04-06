export function MoviePosterCard(props) {
     const $card = document.createElement("div"),
          $styles = document.getElementById("dynamic-styles");

     $card.classList.add("card");

     $styles.insertAdjacentHTML('beforeend', `
          
     `);

     return $card;
}