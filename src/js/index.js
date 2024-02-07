// import mobileNav from "./modules/mobile-nav.js";
// mobileNav();

import { easepick } from "@easepick/bundle";

const picker = new easepick.create({
  element: document.getElementById("datepicker"),
  css: ["https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"]
});

import Swiper from "swiper/bundle";

import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 32,
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev"
  }
});
