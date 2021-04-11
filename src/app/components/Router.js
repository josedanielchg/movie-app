//vendor
import Swiper, { Navigation, Pagination } from 'swiper/core';
Swiper.use([Navigation, Pagination]);

//helpers
import { ajax } from "../helpers/ajax.js";
import api from "../helpers/TMDb-api.js";

//components
import { Header } from "./Header";
import { MoviePosterCard } from "./MoviePosterCard.js";
import { SwiperEstructure } from "./SwiperEstructure.js";
import { SwiperConfiguration } from "../helpers/SwiperConfiguration.js";
import { SliderSection } from "./SliderSection.js"

export async function Router() {
     const d = document,
          w = window,
          $root = document.getElementById("root");

     const $main = d.getElementById("main");

     let { hash } = location;

     if (!hash || hash === "#/") {
          await ajax({
               url: [
                    api.TRENDING,
                    api.POPULAR,
                    api.GENRES,
                    `${api.POPULAR}&with_genres=28`,
               ],
               cbSuccess: (data) => {
                    const trendingMovies = data[0].results,
                         popularMovies = data[1].results,
                         popularActionMovies = data[3].results,
                         $fragment = d.createDocumentFragment(),
                         $trendingSection = SliderSection({
                              title: "Trending today",
                              SlidesComponent: MoviePosterCard,
                              slidesData: trendingMovies,
                              linkExploreAll: "#/trending",
                         }),
                         $popularSection = SliderSection({
                              title: "Popular Movies",
                              SlidesComponent: MoviePosterCard,
                              slidesData: popularMovies,
                              linkExploreAll:  "#/popular",
                         }),
                         $popularCategorySection = SliderSection({
                              title: "Browse by category",
                              SlidesComponent: MoviePosterCard,
                              slidesData: popularActionMovies,
                         });

                         console.log(popularMovies);
                         $main.appendChild( Header(popularMovies[0]) )
                         $fragment.appendChild( $trendingSection );
                         $fragment.appendChild( $popularSection );
                         $fragment.appendChild( $popularCategorySection );

                    $main.appendChild($fragment);

                    let swiper = new Swiper(".swiper-container", {
                         slidesPerView: 1,
                         spaceBetween: 7,
                         breakpoints: {
                              320: {
                                   slidesPerView: 2,
                                   spaceBetween: 7
                              },
                              480: {
                                   slidesPerView: 3,
                                   spaceBetween: 7
                              },
                              // when window width is >= 640px
                              640: {
                                   slidesPerView: 4,
                                   spaceBetween: 7
                              },
                              1024: {
                                   slidesPerView: 5,
                                   spaceBetween: 7,
                              }
                         },
                         pagination: {
                              el: '.swiper-pagination',
                              clickable: true,
                         },
                         navigation: {
                              nextEl: '.swiper-button-next',
                              prevEl: '.swiper-button-prev',
                         },
                    });

                    SwiperConfiguration();
               }
          });
     }

}
