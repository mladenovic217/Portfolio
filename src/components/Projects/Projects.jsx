import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import "./Projects.scss";
import { slider } from "../../data/dataProjects.js";

export default function Projects() {
  const titleRef = useRef(null);
  const techRef = useRef(null);

  const setSideInfo = (title, tech) => {
    if (titleRef.current) titleRef.current.setAttribute("data-title", title);
    if (techRef.current) techRef.current.setAttribute("data-tech", tech);
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <span>My Projects</span>

        <h1 className="side-title" ref={titleRef}></h1>

        <hr />

        <p className="side-tech" ref={techRef}></p>

        <a href="#" className="slider-btn side-btn">
          Go to GitHub
        </a>
      </div>

      <Swiper
        className="myswiper"
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        loop={true}
        pagination={{ clickable: true }}
        slidesPerView={3}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onInit={(swiper) => {
          const activeSlide = swiper.slides[swiper.activeIndex];
          setSideInfo(
            activeSlide.getAttribute("data-title"),
            activeSlide.getAttribute("data-tech"),
          );
        }}
        onSlideChange={(swiper) => {
          const activeSlide = swiper.slides[swiper.activeIndex];
          setSideInfo(
            activeSlide.getAttribute("data-title"),
            activeSlide.getAttribute("data-tech"),
          );
        }}
      >
        {slider.map((data) => (
          <SwiperSlide
            key={data.id}
            className="myswiper-slider"
            style={{ backgroundImage: `url(${data.image})` }}
            data-title={data.title}
            data-tech={data.tech}
          >
            <div className="slide-overlay"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
