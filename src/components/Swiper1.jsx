import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default function Swiper1() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide
          className="character-box slick-slide slick-cloned"
          tabIndex={-1}
          role="tabpanel"
          id=""
          aria-describedby="slick-slide-control03"
          style={{ width: 330 }}
          data-slick-index={-1}
          aria-hidden="true"
        >
          <div className="text-to-character-box d-flex align-items-center justify-content-center mb-3">
            <img src="assets/img/mxl4.png" style={{width:"200px", height:"200px"}}/>
          </div>
          <p
            className="text-to-character-title text-center"
            style={{ marginBottom: "2rem" }}
          >
            Availability
          </p>
        </SwiperSlide>

        <SwiperSlide
          className="character-box slick-slide slick-cloned"
          tabIndex={-1}
          role="tabpanel"
          id=""
          aria-describedby="slick-slide-control03"
          style={{ width: 330 }}
          data-slick-index={-1}
          aria-hidden="true"
        >
          <div className="text-to-character-box d-flex align-items-center justify-content-center mb-3">
            <img src="assets/img/mxl5.png" style={{width:"200px", height:"200px"}}/>
          </div>
          <p
            className="text-to-character-title text-center"
            style={{ marginBottom: "2rem" }}
          >
            Privacy
          </p>
        </SwiperSlide>

 

        <SwiperSlide
          className="character-box slick-slide slick-cloned"
          tabIndex={-1}
          role="tabpanel"
          id=""
          aria-describedby="slick-slide-control03"
          style={{ width: 330 }}
          data-slick-index={-1}
          aria-hidden="true"
        >
          <div className="text-to-character-box d-flex align-items-center justify-content-center mb-3">
            <img src="assets/img/mxl6.png" style={{width:"200px", height:"200px"}}/>
          </div>
          <p
            className="text-to-character-title text-center"
            style={{ marginBottom: "2rem" }}
          >
            Decentralization
          </p>
        </SwiperSlide>


        <SwiperSlide
          className="character-box slick-slide slick-cloned"
          tabIndex={-1}
          role="tabpanel"
          id=""
          aria-describedby="slick-slide-control03"
          style={{ width: 330 }}
          data-slick-index={-1}
          aria-hidden="true"
        >
          <div className="text-to-character-box d-flex align-items-center justify-content-center mb-3">
            <img src="assets/img/mxl7.png" style={{width:"200px", height:"200px"}}/>
          </div>
          <p
            className="text-to-character-title text-center"
            style={{ marginBottom: "2rem" }}
          >
            Cost Effective
          </p>
        </SwiperSlide>


        <SwiperSlide
          className="character-box slick-slide slick-cloned"
          tabIndex={-1}
          role="tabpanel"
          id=""
          aria-describedby="slick-slide-control03"
          style={{ width: 330 }}
          data-slick-index={-1}
          aria-hidden="true"
        >
          <div className="text-to-character-box d-flex align-items-center justify-content-center mb-3">
            <img src="assets/img/mxl8.png" style={{width:"200px", height:"200px"}}/>
          </div>
          <p
            className="text-to-character-title text-center"
            style={{ marginBottom: "2rem" }}
          >
            Transparent
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
