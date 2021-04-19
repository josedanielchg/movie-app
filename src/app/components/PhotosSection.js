export function PhotosSection(images) {
     const d = document,
          $photosSection = d.createElement("div"),
          $styles = d.getElementById("dynamic-styles"),
          imagesType = Object.entries(images).map(el => el[0]),
          backdrops = images.backdrops.filter(img => img.iso_639_1 === "en"),
          posters = images.posters.filter(img => img.iso_639_1 === "en");

     $photosSection.classList.add("movie-details__photos");

     imagesType.forEach(section => {
          let sectionName = section.charAt(0).toUpperCase() + section.slice(1);
          $photosSection.insertAdjacentHTML("beforeend", `
               <div class="photo-section ${section}">
               <div class="head-section">
                    <h2 class="title">${sectionName}</h2>
                    <span class="count">${eval(section).length} Images</span>
               </div>
                    <div class="items-container"></div>
               </div>
          `);
          //section = "backdrops" || "posters"
          //eval(section).forEach() = backdrops.forEach() || posters.forEach()
          eval(section).forEach(item =>
               $photosSection
                    .querySelector(`.${section} .items-container`)
                    .insertAdjacentHTML("beforeend", `
                         <div class="item" data-path="${item.file_path}">
                              <a href="https://image.tmdb.org/t/p/original${item.file_path}">
                                   <div class="image">
                                        <img src="https://image.tmdb.org/t/p/w300${item.file_path}" alt="movie ${section}">
                                   </div>
                              </a>
                         </div>
               `)
          );
     })

     $styles.insertAdjacentHTML("beforeend", `
          .movie-details__photos {
               margin: 1.5rem 1.225rem;
          }

          .movie-details__photos > div {
               margin-bottom: 3.125rem;
          }

          .movie-details__photos .head-section {
               margin-bottom: 1rem;
               display: flex;
               align-items: baseline;
          }

          .movie-details__photos .title {
               font-size: 1.125rem;
               letter-spacing: 0.4px;
          }

          .movie-details__photos .count {
               margin-left: 0.75rem;
               letter-spacing: 0.4px;
               color: #666c70;
               font-size: 1rem;
          }

          .movie-details__photos .items-container {
               display: flex;
               flex-wrap: wrap;
               margin-right: -0.25rem;
               margin-left: -0.25rem;
          }

          .movie-details__photos .item {
               padding: 0.25rem;
          }

          .movie-details__photos .backdrops .item {
               width: 50%;
          }

          .movie-details__photos .posters .item {
               width: calc(100% / 3);
          }

          @media (min-width: 640px) {
               .movie-details__photos .backdrops .item {
                    width: calc(100% / 3);
               }

               .movie-details__photos .posters .item {
                    width: 25%;
               }
          }

          @media (min-width: 768px) {
               .movie-details__photos {
                    margin: 1.5rem 2.5rem;
               }
          }

          @media (min-width: 1024px) {
               .movie-details__photos {
                    margin: 3.15rem 2.45rem;
               }

               .movie-details__photos .head-section {
                    margin-bottom: 1.25rem;
               }

               .movie-details__photos .title {
                    font-size: 1.5rem;
               }

               .movie-details__photos .backdrops .item {
                    width: 25%;
               }

               .movie-details__photos .posters .item {
                    width: 20%;
               }
          }
     `);

     return $photosSection;
}