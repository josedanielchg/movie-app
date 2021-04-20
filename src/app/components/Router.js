//vendor
import Swiper, { Navigation, Pagination } from 'swiper/core';
Swiper.use([Navigation, Pagination]);

//helpers
import { ajax } from "../helpers/ajax.js";
import api from "../helpers/TMDb-api.js";
import genresList from "../helpers/genresList";

//components
import { Header } from "./Header";
import { MoviePosterCard } from "./MoviePosterCard.js";
import { SwiperConfiguration } from "../helpers/SwiperConfiguration.js";
import { SliderSection } from "./SliderSection.js";
import { SearchForm } from "./SearchForm.js"
import { MovieDetailsSection } from "./MovieDetailsSection.js"
import { ResultsSection } from "./ResultsSection"

export async function Router() {
     window.scrollTo(0,0)

     const d = document,
          w = window,
          $root = document.getElementById("root");

     const $main = d.getElementById("main"),
          $fragment = d.createDocumentFragment();

     let { hash } = location;

     $main.appendChild( SearchForm() );

     let movieViewRegEx = /#\/movie\/[0-9]+\/[a-z0-9-]+/,
          personViewRegEx = /#\/person\/[0-9]+\/[a-z0-9-]+/,
          genreViewRegEx = /#\/genre\/[0-9]+\/[A-Za-z0-9-]+/,
          searchViewRegEx = /#\/search\?q\=[a-z0-9-#!%]+/;

     if (!hash || hash === "#/")
          await ajax({
               url: [
                    api.TRENDING,
                    api.POPULAR,
                    api.GENRES,
                    `${api.POPULAR}&with_genres=28`,
               ],
               cbSuccess: async (data) => {
                    const trendingMovies = data[0].results,
                         popularMovies = data[1].results,
                         popularActionMovies = data[3].results,
                         genresList = data[2].genres;
                    
                    const $trendingSection = SliderSection({
                              title: "Trending today",
                              SlidesComponent: MoviePosterCard,
                              slidesData: trendingMovies,
                              linkExploreAll: "#/trending",
                              sliderClass: 'trending'
                         }),
                         $popularSection = SliderSection({
                              title: "Popular Movies",
                              SlidesComponent: MoviePosterCard,
                              slidesData: popularMovies,
                              linkExploreAll:  "#/popular",
                              sliderClass: 'movies'
                         }),
                         $popularCategorySection = SliderSection({
                              title: "Browse by category:",
                              SlidesComponent: MoviePosterCard,
                              slidesData: popularActionMovies,
                              sliderClass: 'browse-category',
                              changeSlidersButtonsData:  genresList
                         });

                    $fragment.appendChild( await Header( popularMovies[0]) );
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

     if(movieViewRegEx.test(hash)){
          const movieId = hash.split("/")[2];
          await ajax({
               url: [
                    `${api.MOVIE}/${movieId}${api.appendVideosImagesCast}`,
                     `${api.MOVIE}/${movieId}/similar`
               ],
               cbSuccess: async (data) => {
                    const currentMovie = data[0],
                         similarMovies = data[1].results;

                    const $movieDetailsSection = MovieDetailsSection(currentMovie);

                   $fragment.appendChild( await Header( currentMovie ) );
                   $fragment.appendChild($movieDetailsSection);

                    if(similarMovies.length > 0) {
                         const $moreLikeThisSection = SliderSection({
                              title: "More Like This",
                              SlidesComponent: MoviePosterCard,
                              slidesData: similarMovies,
                              sliderClass: 'more-like-this'
                         });
                         $fragment.appendChild( $moreLikeThisSection );
                    }

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
          })
     }

     if(genreViewRegEx.test(hash)){
          const genreId = hash.split("/")[2],
               genreName = genresList.find(genre => genre.id == genreId).name;
          await ajax({
               url: `${api.POPULAR}${api.withGenres}${genreId}`,
               cbSuccess: async (data) => {
                    const $resultsSection = ResultsSection({
                         title: `Movie Genre: ${decodeURIComponent(genreName)}`,
                         keyWord: decodeURIComponent(genreName),
                         props: data,
                         searchFormIsActive: false,
                    });
                   $fragment.appendChild( $resultsSection );
                    $main.appendChild($fragment);
               }
          })
     }

     if(searchViewRegEx.test(hash)){
          const keyWord = hash.slice(hash.indexOf("?q=")+3, hash.length);
          await ajax({
               url: `${api.SEARCH}${keyWord}`,
               cbSuccess: async (data) => {
                    const $resultsSection = ResultsSection({
                         title: `Search For: ${decodeURIComponent(keyWord)}`,
                         keyWord: decodeURIComponent(keyWord),
                         props: data,
                         searchFormIsActive: true,
                    });

                   $fragment.appendChild( $resultsSection );
                    $main.appendChild($fragment);
               }
          })
     }

     d.querySelector(".loader-container").style.display = "none";
}
