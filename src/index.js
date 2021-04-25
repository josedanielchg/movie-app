import 'swiper/swiper-bundle.css';
import Swiper, { Navigation, Pagination } from 'swiper/core';
Swiper.use([Navigation, Pagination]);
import swiperCustomization from "./app/assets/styles/swiper_customization.css";

import starFill from "./app/assets/resources/star-fill.png";
import starFrame from "./app/assets/resources/star-frame.png";

import resetStyles from "./app/assets/styles/reset.css";
import mainStyles from "./app/assets/styles/main.css";

import { App } from "./app/App.js";

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", App);