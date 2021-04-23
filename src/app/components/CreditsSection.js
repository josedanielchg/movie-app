import string_to_slug from "../helpers/string_to_slug.js"

export function CreditsSection(props) {
     const d = document,
          $creditsSection = d.createElement("div"),
          $styles = d.getElementById("dynamic-styles"),
          deparments = [];
     let moviesByDeparment = {};

     $creditsSection.classList.add("person-details__credits");
     /*
     Create moviesByDeparment Object: 
     {
          Acting: {
               2020: (2) [{...}, {...}],
               2021: [{...}],
               2022: (3) [{...}, {...}, {...}],
          }
          Directing: {
               2018: [{...}]
          }
          Production: {
               2019: (2) [{...}, {...}]
          }
     }
     */ 
     deparments.push("Acting")
     moviesByDeparment["Acting"] = {};

     props.cast.forEach(mov => {
          let movieYear = new Date(mov.release_date).getFullYear() || "----";
          if(!moviesByDeparment["Acting"][movieYear])
               moviesByDeparment["Acting"][movieYear] = []
          moviesByDeparment["Acting"][movieYear].push(mov);
     })

     props.crew.forEach(mov=> {
          let movieDepartment = mov.department,
               movieYear = new Date(mov.release_date).getFullYear() || "----";

          if(!moviesByDeparment[movieDepartment]) {
               deparments.push(movieDepartment);
               moviesByDeparment[movieDepartment] = {};
          }
          
          if(!moviesByDeparment[movieDepartment][movieYear])
               moviesByDeparment[movieDepartment][movieYear] = []

          moviesByDeparment[movieDepartment][movieYear].push(mov);
     });

     //Sort object keys
     moviesByDeparment = Object.keys(moviesByDeparment)
          .sort()
          .reduce((acc, key) => ({
               ...acc, [key] : moviesByDeparment[key]
          }), {});
     deparments.sort();

     // Insert select and options
     $creditsSection.insertAdjacentHTML("beforeend", `
          <div class="filter-container">
               <label for="department-filter">Department</label>
               <select id="department-filter" class="department-filter">
                    <option value="all">All</option>
               </select>
          </div>
     `);

     deparments.forEach(dep => 
          $creditsSection.querySelector("select").insertAdjacentHTML("beforeend", `
               <option value="${dep}">${dep}</option>
          `)
     )

     // Insert movies by department and year
     for( const [department, movieListByYears] of Object.entries(moviesByDeparment)) {
          let $departmentContainer = d.createElement("div");
          $departmentContainer.classList.add("department-container", "active");

          $departmentContainer.insertAdjacentHTML("beforeend", `
               <h2 class="title">${department}</h2>
               <div class="items-container"></div>
          `)

          for(const [year, movies] of Object.entries(movieListByYears)) {
               let $itemsContainer = d.createElement("ul");
                    $itemsContainer.classList.add("movies-by-year")

               movies.forEach(mov => {
                    mov.slug = `movie/${mov.id}/${string_to_slug(mov.title)}`;

                    $itemsContainer.insertAdjacentHTML("beforeend", `
                    <li class="item">
                         <a href="#/${mov.slug}" title="${mov.title}">
                              <span class="relase-date">${year}</span>
                              <span class="data">
                                   <span class="movie-title">${mov.title}</span>
                                   ${!mov.character
                                        ? ""
                                        : `<span class="character">as ${mov.character}</span>`
                                   }
                                   ${!mov.job
                                        ? ""
                                        : `<span class="job">as ${mov.job}</span>`
                                   }
                              </span>
                         </a>
                    </li>
                    `)
               });
               $departmentContainer
                    .querySelector(".items-container")
                    .insertAdjacentElement("afterbegin", $itemsContainer);
          }

          $creditsSection.insertAdjacentElement("beforeend", $departmentContainer)
     }

     $styles.insertAdjacentHTML("beforeend", `
          .person-details__credits {
               margin: 1.5rem 1.225rem;
               color: #141414;
          }

          .person-details__credits .filter-container {
               display: flex;
               align-items: center;
               margin-bottom: 1.25rem;
          }

          .person-details__credits .filter-container label {
               letter-spacing: 0.4px;
               font-size: 1rem;
               margin-right: 0.625rem;
          }

          .person-details__credits select {
               margin-right: 0.75rem;
               padding: 0.5rem 2.25rem 0.5rem 1rem;
               font-size: 0.875rem;
               color: #fff;
               background: #202124
               url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDMwIDYwIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIgZD0iTTE1LjY3NiAzMy4wMzdsNS4xMDItNS4xMDMtLjcwNy0xLjA4Ni00LjQ5IDQuNDkyLTQuNDktNC40OTItLjcwMiAxLjA4NiA1LjEwMiA1LjEwMy4wNzUuMTE1LjAyLS4wMi4wMi4wMnoiLz48L3N2Zz4K)
               no-repeat 100% 45%;
               background-size: 30px 60px;
               border-color: #202124;
               -webkit-appearance: none;
               -moz-appearance: none;
               appearance: none;
               border-radius: 0;
               text-transform: none;
          }

          .person-details__credits .department-container {
               display: none;
               margin-bottom: 1.75rem;
          }

          .person-details__credits .department-container.active {
               display: block;
          }

          .person-details__credits .department-container .title {
               margin-bottom: 0.75rem;
               font-size: 1.125rem;
               letter-spacing: 0.4px;
          }

          .person-details__credits .items-container ul li {
               margin-bottom: 2px;
          }

          .person-details__credits .items-container ul:nth-child(odd) li {
               background-color: #ccc;
          }

          .person-details__credits .items-container ul li a {
               display: flex;
               flex-wrap: wrap;
               padding: 0.5rem 1rem;
          }

          .person-details__credits .items-container li .relase-date {
               width: 70px;
               margin-left: -1rem;
               margin-right: 1.75rem;
               text-align: center;
          }

          .person-details__credits .items-container li .data {
               flex: 1;
          }

          .person-details__credits .items-container li .movie-title {
               font-weight: 700;
          }

          .person-details__credits .items-container li .character,
          .person-details__credits .items-container li .job {
               color: #585858;
          }

          @media (min-width: 768px) {
               .person-details__credits {
                    margin: 1.5rem 2.5rem;
               }
          }

          @media (min-width: 1024px) {
               .person-details__credits {
                    margin: 3.15rem 2.45rem;
               }

               .person-details__credits .department-container .title {
                    font-size: 1.5rem;
               }
          }
     `)

     d.addEventListener("change", e => {

          if(!e.target.matches('#department-filter')) return false;

          if(e.target.value === "all")
               d.querySelectorAll(".person-details__credits .department-container")
                    .forEach(departmentSection => departmentSection.classList.add("active"))
          else
               d.querySelectorAll(".person-details__credits .department-container")
                    .forEach(departmentSection =>
                         (departmentSection.querySelector(".title").innerText === e.target.value)
                              ? departmentSection.classList.add("active")
                              : departmentSection.classList.remove("active")
                    )
     })

     return $creditsSection;
}