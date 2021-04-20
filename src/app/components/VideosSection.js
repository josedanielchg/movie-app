import { ModalVideo } from "./ModalVideo.js";

export function VideosSection(videos) {
     const d = document,
          $videosSection = d.createElement("div"),
          $styles = d.getElementById("dynamic-styles"),
          videoTypes = new Set(videos.map(el => el.type));

     $videosSection.classList.add("movie-details__videos");
     $videosSection.insertAdjacentHTML("beforeend", `
          <div class="filter-container">
               <select id="video-filter">
                    <option value="all">All</option>
               </select>
               <span class="count">${videos.length} Videos</span>
          </div>
          <div class="items-container">
          </div>
     `);

     videoTypes.forEach(type => 
          $videosSection.querySelector("select").insertAdjacentHTML("beforeend", `
               <option value="${type}">${type}</option>
          `)
     )

     videos.forEach(video =>
          $videosSection.querySelector(".items-container").insertAdjacentHTML("beforeend", `
               <div class="item active" title="${video.name}" id="watch-trailer" data-key="${video.key}">
                    <a href="https://youtube.com/watch?v=${video.key}">
                         <div class="image">
                              <img src="https://img.youtube.com/vi/${video.key}/mqdefault.jpg" alt="${video.name}">
                              <div class="play">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 55 55"><circle cx="27.5" cy="27.5" r="26.75" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></circle><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.97 40.81L40.64 27.5 20.97 14.19v26.62z"></path></svg>
                              </div>
                         </div>
                         <h2 class="name">${video.name}</h2>
                         <div class="type">${video.type}</div>
                    </a>
               </div>
          `)
     )

     $styles.insertAdjacentHTML("beforeend", `
          .movie-details__videos {
               margin: 1.5rem 1.225rem;
          }

          .movie-details__videos .filter-container {
               display: flex;
               align-items: center;
               margin-bottom: 1rem;
          }

          .movie-details__videos select {
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

          .movie-details__videos .count {
               color: #666c70;
               letter-spacing: 0.4px;
               font-size: 1rem;
          }

          .movie-details__videos .items-container {
               display: flex;
               flex-wrap: wrap;
               margin-left: -0.625rem;
               margin-right: -0.625rem;
          }

          .movie-details__videos .item {
               display: none;
               width: 100%;
               padding: 0.625rem;
               margin-bottom: 1.25rem;
          }

          .movie-details__videos .item.active {
               display: flex;
          }

          .movie-details__videos .item a {
               display: flex;
               flex-direction: column;
               width: 100%;
          }

          .movie-details__videos .item .image {
               position: relative;
               height: 0;
               padding-bottom: 56.25%;
               overflow: hidden;
               background-color: #202124;
          }

          .movie-details__videos .item img {
               position: absolute;
               top: 0;
               left: 0;
               width: 100%;
               height: 100%;
          }

          .movie-details__videos .item .play {
               position: absolute;
               top: 50%;
               left: 50%;
               transform: translate(-50%, -50%);
          }

          .movie-details__videos .item .name {
               flex: 1 0 auto;
               margin-top: 0.5rem;
               letter-spacing: 0.4px;
               font-size: 1rem;
               overflow: hidden;
               text-overflow: ellipsis;
               white-space: nowrap;
          }

          .movie-details__videos .item .type {
               color: #666c70;
               font-size: 0.875rem;
          }

          @media (min-width: 640px) {
               .movie-details__videos .item {
                    width: 50%;
               }
          }

          @media (min-width: 768px) {
               .movie-details__videos {
                    margin: 1.5rem 2.5rem;
               }
          }

          @media (min-width: 1024px) {
               .movie-details__videos {
                    margin: 3.15rem 2.45rem;
               }

               .movie-details__videos .filter-container {
                    margin-bottom: 1.25rem;
               }
               .movie-details__videos .item {
                    width: calc(100% / 3);
               }
          }
     `);

     d.addEventListener("change", e => {

          if(!e.target.matches('#video-filter')) return false;

          if(e.target.value === "all")
               d.querySelectorAll(".movie-details__videos .items-container .item")
                    .forEach(item => item.classList.add("active"))
          else
               d.querySelectorAll(".movie-details__videos .items-container .item")
                    .forEach(item =>
                         (item.querySelector(".type").innerText === e.target.value)
                              ? item.classList.add("active")
                              : item.classList.remove("active")
                    )

          d.querySelector(".movie-details__videos .count").innerText =
               `${d.querySelectorAll(".movie-details__videos .items-container > div.active").length} Videos`
     })

     d.addEventListener("click", e => {
          if(d.getElementById("modal")) return false
          if(
               !e.target.matches(".items-container #watch-trailer") && 
               !e.target.matches(".items-container #watch-trailer *")
          ) return false;

          e.preventDefault();
          let key;

          if(e.target.matches("#watch-trailer")) key = e.target.dataset.key;
          if(e.target.matches("#watch-trailer *")) key = e.target.closest(".item").dataset.key;

          const $root = d.getElementById("root");
          $root.appendChild( ModalVideo(key) );
     })

     return $videosSection;
}