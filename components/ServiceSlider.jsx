import {
  RxCode,
  RxDesktop,
  RxLayers,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxDesktop,
    title: "Full Stack Development",
    description: "End-to-end web applications using React, Java, Spring Boot, and MySQL with secure REST APIs.",
  },
  {
    Icon: RxCode,
    title: "Backend Engineering",
    description: "Scalable backend services with Spring Boot, JWT authentication, and clean API design.",
  },
  {
    Icon: RxLayers,
    title: "Frontend Development",
    description: "Responsive, accessible interfaces with React.js, HTML5, CSS3, and modern JavaScript.",
  },
  {
    Icon: RxPencil2,
    title: "UI/UX Designer",
    description: "User research, A/B testing, interactive wireframes & prototypes, and cohesive design systems in Figma.",
  },
  {
    Icon: RxReader,
    title: "UI/UX Design",
    description: "High-fidelity prototypes, design systems, and responsive UI components built with Figma and Adobe tools.",
  },
  {
    Icon: RxRocket,
    title: "DevOps & Deployment",
    description: "Containerized deployments with Docker, CI/CD pipelines, and GitHub-based workflows.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
