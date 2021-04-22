import calculateAge from "../helpers/calculateAge.js"
import formatDate from "../helpers/formatDate.js"

export function PersonDescriptionSection(props) {
     const d = document,
          $descriptionSection = d.createElement("div"),
          $styles = d.getElementById("dynamic-styles");

     $descriptionSection.classList.add("person-description");

     let biographyParagraphs = "",
          date = null,
          bornDate = null;

     props.biography
          .split("\n")
          .filter(paragraph => paragraph !== "")
          .forEach(paragraph => biographyParagraphs += `<p>${paragraph}</p>`);

     if(props.birthday) {
          date = formatDate(props.birthday);
          bornDate = `${date} (age ${ calculateAge(date) })`;
     }

     $descriptionSection.insertAdjacentHTML("beforeend", `
          <div class="photo">
               <div class="profile">
                    ${ props.profile_path
                         ? `<img src="https://image.tmdb.org/t/p/w342${props.profile_path}" alt="${props.name}" class="card__cover">`

                         : `<span><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd" fill="#202124"><path d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-1 16h-19l4-7.492 3 3.048 5.013-7.556 6.987 12zm-11.848-2.865l-2.91-2.956-2.574 4.821h15.593l-5.303-9.108-4.806 7.243zm-4.652-11.135c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"></path></svg></span>`
                    }
               </div>
          </div>
          <div class="details">
               <div class="overview">
                    <h2 class="title">${props.name}</h2>
                    ${ !biographyParagraphs
                         ? "" 
                         :`<div>
                              ${biographyParagraphs}
                         </div>`
                    }
               </div>
               <div class="stats">
                    <ul>
                         ${ !props.known_for_department 
                              ? "" 
                              :`<li>
                                   <span class="label">Known For </span>
                                   <span class="value">${props.known_for_department}</span>
                              </li>`
                         }
                         ${ !props.birthday 
                              ? "" 
                              :`<li>
                                   <span class="label">Born </span>
                                   <span class="value">${bornDate}</span>
                              </li>`
                         }
                         ${ !props.place_of_birth 
                              ? "" 
                              :`<li>
                                   <span class="label">Place of Birth </span>
                                   <span class="value">${props.place_of_birth}</span>
                              </li>`
                         }
                    </ul>
               </div>
          </div>
     `);

     $styles.insertAdjacentHTML("beforeend", `
          .person-description {
               margin: 1.5rem 1.225rem;
          }

          .person-description .photo {
               display: block;
               width: 80%;
               max-width: 400px;
               margin: 0 auto;
          }

          .person-description .profile {
               position: relative;
               height: 0;
               padding-top: 150.27%;
               overflow: hidden;
               background-color: #ccc;
          }

          .person-description .profile img {
               position: absolute;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
          }

          .person-description .profile span {
               display: flex;
               align-items: center;
               justify-content: center;
               position: absolute;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
          }

          .person-description .profile svg {
               vertical-align: middle;
          }

          .person-description .overview {
               overflow: hidden;
               font-size: 1rem;
               color: #141414;
               margin-bottom: 1.875rem;
          }

          .person-description .overview h2 {
               font-size: 1.125rem;
               letter-spacing: 0.4px;
               margin: 1.5rem 0;
               text-align: center;
          }

          .person-description .overview p {
               margin-top: 0.625rem;
               margin-bottom: 0.625rem;
          }

          .person-description .stats {
               margin-bottom: 1.875rem;
               font-size: 1rem;
          }

          .person-description .stats ul {
               padding: 0;
               margin: 0;
               list-style: none;
          }

          .person-description .stats li {
               display: flex;
               padding: 2px 0;
          }

          .person-description .stats .label {
               flex: 1;
               max-width: 90px;
               margin-right: 1rem;
               color: #000;
               font-weight: 700;
          }

          .person-description .stats .value {
               flex: 2;
          }

          .person-description .stats li a {
               text-decoration: underline;
          }

          @media (min-width: 350px) {
               .person-description .photo {
                    width: 50%;
               }
          }

          @media (min-width: 500px) {
               .person-description .photo {
                    width: 30%;
               }

               .person-description .stats .label {
                    max-width: 110px;
               }
          }

          @media (min-width: 768px) {
               .person-description {
                    margin: 1.5rem 2.5rem;
                    display: flex;
               }

               .person-description .details {
                    flex: 1;
               }

               .person-description .photo {
                    width: 30%;
                    padding-right: 2.5rem;
               }

               .person-description .overview h2 {
                    margin-bottom: 0.625rem;
                    margin-top: 0;
                    text-align: start;
               }
          }

          @media (min-width: 1024px) {
               .person-description {
                    margin: 3.15rem 2.45rem;
               }

               .person-description .photo {
                    padding-right: 3.125rem;
                    width: 25%;
                    padding-right: 2.45rem;
               }

               .person-description .overview h2 {
                    font-size: 1.5rem;
               }

               .person-description .stats ul {
                    display: flex;
                    flex-wrap: wrap;
               }

               .person-description .stats li {
                    width: 50%;
               }
          }

          @media (min-width: 1400px) {
               .person-description .stats li {
                    width: 100%;
               }
          }
     `)

     return $descriptionSection;
}