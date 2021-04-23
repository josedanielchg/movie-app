export function CreditsSection(props) {
     const d = document,
          $creditsSection = d.createElement("div"),
          $styles = d.getElementById("dynamic-styles");

     $creditsSection.classList.add("person-details__credits");

     $creditsSection.insertAdjacentHTML("beforeend", `
          <h2>Creditos</h2>
     `);

     $styles.insertAdjacentHTML("beforeend", `
     `)

     return $creditsSection;
}