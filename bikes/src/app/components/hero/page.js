"use client";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero.css";
import Slider from "react-slick";

export default function Hero() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const slides = [
    {
      id: 1,
      img: "/h2r.png",
      title: "NINJA H2R: BEYOND BELIEF",
      description:
        "The world's only self-produced supercharged supersport model.",
      subtitle: "326 HP",
      feature: "SUPERCHARGED",
      torque: "165 Nm @ 12,500 rpm",
    },
    {
      id: 2,
      img: "/zx10rt.png",
      title: "NINJA ZX-10R: FACE YOURSELF",
      description:
        "Building on WSB-proven performance and aerodynamic styling.",
      subtitle: "203 HP",
      feature: "WSB PROVEN",
      torque: "114.9 Nm @ 11,400 rpm",
    },
    {
      id: 3,
      img: "/h2r.png",
      title: "VERSYS 650: ANY ROAD, ANY TIME",
      description: "Maximum versatility for your next adventure.",
      subtitle: "649 CC",
      feature: "ADVENTURE",
      torque: "61 Nm @ 7,000 rpm",
    },
    {
      id: 4,
      img: "/ninja500t.png",
      title: "NINJA 500: MAKE YOUR STATEMENT",
      description:
        "Powerful 451 cc parallel twin engine with lightweight handling.",
      subtitle: "451 CC",
      feature: "LIGHTWEIGHT",
      torque: "42.6 Nm @ 6,000 rpm",
    },
    {
      id: 5,
      img: "/zx6rt.png",
      title: "NINJA ZX-6R: SUPERSPORT DOMINATION",
      description:
        "Performance optimized for advantage street-riding exhilaration.",
      subtitle: "636 CC",
      feature: "SUPERSPORT",
      torque: "69 Nm @ 11,000 rpm",
    },
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    lazyLoad: "progressive",
    swipeToSlide: true,
    touchThreshold: 10,
    fade: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };

  // Navigation functions
  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToSlide = (index) => {
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <section className="hero-section">
      <div className="hero-bg-grid"></div>
      <div className="hero-bg-glow"></div>

      <Slider ref={sliderRef} {...settings} className="hero-slider">
        {slides.map((slide, index) => (
          <div key={slide.id} className="hero-slide">
            <div className="hero-content-wrapper">
              {/* Left content */}
              <div className="hero-text-content">
                <div className="hero-feature-badge">
                  <span className="badge-line"></span>
                  <span className="badge-text">{slide.feature}</span>
                </div>

                <h1 className="hero-title">
                  {slide.title.split(":")[0]}
                  <span className="hero-title-accent">
                    :{slide.title.split(":")[1]}
                  </span>
                </h1>

                <p className="hero-description">{slide.description}</p>

                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-label">POWER</span>
                    <span className="stat-value">{slide.subtitle}</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <span className="stat-label">Torque</span>
                    <span className="stat-value">{slide.torque}</span>
                  </div>
                </div>

                <div className="hero-cta-group">
                  <button className="hero-btn hero-btn-primary">
                    <span>EXPLORE MODEL</span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M4 10H16M16 10L11 5M16 10L11 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <button className="hero-btn hero-btn-secondary">
                    CONFIGURE
                  </button>
                </div>
              </div>

              <div className="hero-image-content">
                <div className="hero-image-wrapper">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="hero-bike-image"
                  />
                  <div className="image-glow"></div>
                </div>

                <div className="hero-decorative-lines">
                  <div className="deco-line deco-line-1"></div>
                  <div className="deco-line deco-line-2"></div>
                  <div className="deco-line deco-line-3"></div>
                </div>
              </div>
            </div>

            <div className="slide-number">
              <span className="slide-current">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="slide-separator">/</span>
              <span className="slide-total">
                {String(slides.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        ))}
      </Slider>

      {/* Navigation Arrows */}
      <button className="hero-nav-arrow hero-nav-prev" onClick={goToPrev}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button className="hero-nav-arrow hero-nav-next" onClick={goToNext}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Navigation Dots */}
      <div className="hero-nav-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`hero-dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className="dot-inner"></span>
          </button>
        ))}
      </div>

      <div className="speed-lines">
        <div className="speed-line"></div>
        <div className="speed-line"></div>
        <div className="speed-line"></div>
      </div>
    </section>
  );
}
