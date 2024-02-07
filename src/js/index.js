import mobileNav from "./modules/mobile-nav.js";
mobileNav();

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
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    425: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 30
    }
  }
});
