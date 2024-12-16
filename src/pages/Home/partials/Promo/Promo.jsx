import React from "react";
import "./Promo.css";
import Marquee from "../Marquee/Marquee";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function Promo() {
  return (
    <div class="promo-bar bg-dark text-white position-relative">
      <div className="mb-3">
        <Marquee array={["SALE"]} direction="left" />
      </div>
      {/* <Swiper
        // slidesPerView={2}
        breakpoints={{
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <h2>NEW ARRIVAL</h2>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <h2>BEST SELLER</h2>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <h2>GET UP TO 15% OFF</h2>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <h2>NEW STYLE</h2>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <h2>HOT BRANDS</h2>
        </SwiperSlide>
      </Swiper> */}
      <div className="mt-3">
        <Marquee array={["SALE"]} direction="right" />
      </div>
    </div>
  );
}
