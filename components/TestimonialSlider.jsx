import Image from "next/image";
import { useState, useEffect } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Priya Mehta",
    position: "Project Mentor, CDAC",
    message:
      "Janhavi's work on the NGO-Connect platform was outstanding. She architected the full backend in Spring Boot, integrated JWT authentication, and delivered clean, maintainable code well ahead of schedule. A truly dedicated developer.",
  },
  {
    image: "/t-avt-2.png",
    name: "Dr. Anjali Kulkarni",
    position: "Client, Freelance Project",
    message:
      "Working with Janhavi on our responsive web interfaces was a pleasure. She brought both strong React skills and an eye for design — the UI she built was pixel-perfect and worked flawlessly across all devices.",
  },
  {
    image: "/t-avt-3.png",
    name: "Rohan Desai",
    position: "Faculty Advisor, PESMCOE",
    message:
      "Janhavi led the Hydroponics IoT project with remarkable initiative, reducing hardware costs by over 70% and achieving 90% water savings. Her ability to combine engineering and software thinking is exceptional.",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (idx) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 300);
  };

  const prev = () => goTo((current - 1 + testimonialData.length) % testimonialData.length);
  const next = () => goTo((current + 1) % testimonialData.length);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % testimonialData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const person = testimonialData[current];

  return (
    <div className="relative h-[400px] flex flex-col items-center justify-center">
      {/* slide content */}
      <div
        className="flex flex-col items-center md:flex-row gap-x-8 w-full px-4 md:px-16 transition-opacity duration-300"
        style={{ opacity: animating ? 0 : 1 }}
      >
        {/* avatar + name */}
        <div className="w-full max-w-[280px] flex flex-col xl:justify-center items-center mx-auto xl:mx-0 shrink-0">
          <div className="mb-2 mx-auto">
            <Image
              src={person.image}
              width={100}
              height={100}
              alt={person.name}
              className="rounded-full"
            />
          </div>
          <div className="text-lg font-semibold">{person.name}</div>
          <div className="text-[12px] uppercase font-extralight tracking-widest text-white/60">
            {person.position}
          </div>
        </div>

        {/* quote */}
        <div className="flex-1 flex flex-col justify-center relative xl:pl-20 xl:before:content-[''] xl:before:absolute xl:before:left-0 xl:before:top-1/2 xl:before:-translate-y-1/2 xl:before:w-[1px] xl:before:h-[200px] xl:before:bg-white/20">
          <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0 mb-4" />
          <div className="xl:text-lg text-center md:text-left text-white/80 leading-relaxed">
            {person.message}
          </div>
        </div>
      </div>

      {/* controls */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-x-6">
        {/* prev */}
        <button
          onClick={prev}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 hover:border-accent hover:text-accent transition-all duration-300 text-white/60"
          aria-label="Previous"
        >
          <FaChevronLeft className="text-sm" />
        </button>

        {/* dots */}
        <div className="flex gap-x-2">
          {testimonialData.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-accent scale-125" : "bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* next */}
        <button
          onClick={next}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 hover:border-accent hover:text-accent transition-all duration-300 text-white/60"
          aria-label="Next"
        >
          <FaChevronRight className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
