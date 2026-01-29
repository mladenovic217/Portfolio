import React, { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import "./Projects.scss";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:3000/projects");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProjects();
  }, []);

  const titleRef = useRef(null);
  const techRef = useRef(null);

  const setSideInfo = (title, tech) => {
    if (titleRef.current) titleRef.current.setAttribute("data-title", title);
    if (techRef.current) techRef.current.setAttribute("data-tech", tech);
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <span data-animate="fadeLeft">My Projects</span>

        <h1 data-animate="fadeLeft" className="side-title" ref={titleRef}></h1>

        <hr data-animate="fadeLeft" />

        <p data-animate="fadeLeft" className="side-tech" ref={techRef}></p>

        <a data-animate="fadeLeft" href="#" className="slider-btn side-btn">
          Go to GitHub
        </a>
      </div>

      {projects.length > 0 && (
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
            const project = projects[swiper.realIndex];
            if (!project) return;
            setSideInfo(project.title, project.tech);
          }}
          onSlideChange={(swiper) => {
            const project = projects[swiper.realIndex];
            if (!project) return;
            setSideInfo(project.title, project.tech);
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },

            1600: { slidesPerView: 3 },
          }}
        >
          {projects.map((data) => (
            <SwiperSlide
              key={data.id}
              className="myswiper-slider"
              style={{
                backgroundImage: `url(${data.image})`,
              }}
              data-title={data.title}
              data-tech={data.tech}
            >
              <div className="slide-overlay"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
