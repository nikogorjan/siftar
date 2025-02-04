"use client";

import React, { useEffect, useRef, useState } from "react";
import "../../../globals.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

const Food = () => {
  const [slidesPerView, setSlidesPerView] = useState(3.5);
  const [offset, setOffset] = useState(10);
  const SwiperRef = useRef();
  const WrapperRef = useRef();

  const handleResize = () => {
    setSlidesPerView(window.innerWidth < 1000 ? 1.2 : 3.5);
    setOffset(window.innerWidth * 0.05);
  };

  useEffect(() => {
    // Set initial state
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      ".this-swiper",
      { x: "30%" },
      {
        x: "0%",
        scrollTrigger: {
          trigger: WrapperRef.current,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
          once: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <section>
      <div className="food-main">
        <div className="food-wrapper" ref={WrapperRef}>
          <Swiper
            spaceBetween={10}
            slidesPerView={slidesPerView}
            slidesOffsetBefore={10}
            slidesOffsetAfter={10}
            ref={SwiperRef}
            className="this-swiper"
          >
            <SwiperSlide>
              <img alt="food1" className="food-img" src="/Images/f2.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="food2" className="food-img" src="/Images/f1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="food3" className="food-img" src="/Images/f3.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="food4" className="food-img" src="/Images/f4.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="food5" className="food-img" src="/Images/f5.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="food6" className="food-img" src="/Images/f6.png" />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="food7" className="food-img" src="/Images/f7.png" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Food;
