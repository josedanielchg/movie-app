import { ModalImage } from "./ModalImage";

export function PhotosSection(data) {
     const d = document,
          $photosSection = d.createElement("div"),
          $styles = d.getElementById("dynamic-styles"),
          {images, classList} = data,
          imagesType = Object.entries(images).map(el => el[0]),
          backdrops = images.backdrops ? images.backdrops.filter(img => img.iso_639_1 === "en") : null,
          posters = images.posters ? images.posters.filter(img => img.iso_639_1 === "en") : null,
          photos = images.photos ? images.photos : null;

     $photosSection.classList.add(...classList);

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
          .${classList[0]} {
               margin: 1.5rem 1.225rem;
          }

          .${classList[0]} > div {
               margin-bottom: 3.125rem;
          }

          .${classList[0]} .head-section {
               margin-bottom: 1rem;
               display: flex;
               align-items: baseline;
          }

          .${classList[0]} .title {
               font-size: 1.125rem;
               letter-spacing: 0.4px;
          }

          .${classList[0]} .count {
               margin-left: 0.75rem;
               letter-spacing: 0.4px;
               color: #666c70;
               font-size: 1rem;
          }

          .${classList[0]} .items-container {
               display: flex;
               flex-wrap: wrap;
               margin-right: -0.25rem;
               margin-left: -0.25rem;
          }

          .${classList[0]} .item {
               padding: 0.25rem;
          }

          .${classList[0]} .backdrops .item {
               width: 50%;
          }

          .${classList[0]} .posters .item,
          .${classList[0]} .photos .item {
               width: calc(100% / 3);
          }

          .${classList[0]} .item .image {
               position: relative;
               height: 0;
               overflow: hidden;
               background-color: #202124;
          }

          .${classList[0]} .backdrops .item .image {
               padding-top: 56.28%;
          }

          .${classList[0]} .posters .item .image,
          .${classList[0]} .photos .item .image {
               padding-top: 150.27%;
          }

          .${classList[0]} .item .image img {
               position: absolute;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
          }

          @media (min-width: 640px) {
               .${classList[0]} .backdrops .item {
                    width: calc(100% / 3);
               }

               .${classList[0]} .posters .item,
               .${classList[0]} .photos .item {
                    width: 25%;
               }
          }

          @media (min-width: 768px) {
               .${classList[0]} {
                    margin: 1.5rem 2.5rem;
               }
          }

          @media (min-width: 1024px) {
               .${classList[0]} {
                    margin: 3.15rem 2.45rem;
               }

               .${classList[0]} .head-section {
                    margin-bottom: 1.25rem;
               }

               .${classList[0]} .title {
                    font-size: 1.5rem;
               }

               .${classList[0]} .backdrops .item {
                    width: 25%;
               }

               .${classList[0]} .posters .item,
               .${classList[0]} .photos .item {
                    width: 20%;
               }
          }
     `);

     d.addEventListener("click", e => {
          if(
               !e.target.matches(`.${classList[0]} .item`) && 
               !e.target.matches(`.${classList[0]} .item *`)
          ) return false;

          e.preventDefault();
          let path;

          if(e.target.matches(".items-container .item")) path = e.target.dataset.path;
          if(e.target.matches(".items-container .item *")) path = e.target.closest(".item").dataset.path;

          const $root = d.getElementById("root");
          $root.appendChild( ModalImage(path) );
     })


     return $photosSection;
}