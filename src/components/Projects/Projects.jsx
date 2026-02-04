import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import "./Projects.scss";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [info, setInfo] = useState({ title: "", tech: "", link: "#" });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://localhost:3000/projects");
        const data = await res.json();
        setProjects(data);
        if (data.length > 0) {
          setInfo({
            title: data[0].title,
            tech: data[0].tech,
            link: data[0].link,
          });
        }
      } catch (errorrr) {
        console.error(errorrr);
      }
    };

    fetchProjects();
  }, []);

  const setSideInfo = (title, tech, link) => {
    setInfo({ title, tech, link: link || "#" });
  };

  return (
    <section className="projects" id="projects">
      <div className="pr-text">
        <span data-animate="fadeLeft">My Projects</span>

        <h1 data-animate="fadeLeft" className="pr-title">
          {info.title}
        </h1>

        <hr data-animate="fadeLeft" />

        <p data-animate="fadeLeft" className="pr-tech">
          {info.tech}
        </p>

        <a
          href={info.link}
          target="_blank"
          data-animate="fadeLeft"
          className="github-btn"
        >
          Go to GitHub
        </a>
      </div>

      {projects.length > 0 && (
        <Swiper
          className="swiper"
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
            setSideInfo(project.title, project.tech, project.link);
          }}
          onSlideChange={(swiper) => {
            const project = projects[swiper.realIndex];
            if (!project) return;
            setSideInfo(project.title, project.tech, project.link);
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
              className="swiper-slider"
              style={{
                backgroundImage: `url(${data.image})`,
              }}
              data-title={data.title}
              data-tech={data.tech}
            ></SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
