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

export default function Swiper2() {
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

        <SwiperSlide>
        <div
                    className="vision-box text-center slick-slide slick-current slick-active"
                    tabIndex={0}
                    style={{ width: 330 }}
                    data-slick-index={0}
                    aria-hidden="false"
                    role="tabpanel"
                    id="slick-slide20"
                    aria-describedby="slick-slide-control20"
                  >
                    <div className="vision-img-box">
                      <img src="assets/img/w2.svg" className="mx-auto" />
                    </div>
                    <h4 className="vision-title mt-4 mb-4">AI Protocol</h4>
                    <p className="vision-info mb-5">
                      The AI Protocol is the property rights backbone of the
                      Generative AI Economy. Its suite of decentralized smart
                      contracts enables ownership, interoperability, and
                      governance of AI Characters and Assets. Alethea AI is a
                      proud contributor to the AI Protocol.
                    </p>
                    <a
                      href="ai-protocol.html"
                      className="vision-btn"
                      tabIndex={0}
                    >
                      <img src="assets/img/logo.png"  style={{width:"100%",}}/>
                   
                    </a>
                  </div>
</SwiperSlide>
    
      </Swiper>
    </>
  );
}
