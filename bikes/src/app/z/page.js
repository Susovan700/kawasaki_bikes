"use client";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar/page";
import Sidebar from "../components/sidebar/page";
import "./z.css";

export default function z() {
  const router = useRouter();

  const cards = [
    {
      id: 1,
      img: "/z650rs26.png",
      title: "Z650RS",
      tag: "New 2026",
      description: "DUAL-DIAL INSTRUMENTATION WITH MULTI-FUNCTION LCD",
      feature: "HORIZONTAL BACKLINK REAR SUSPENSION",
      style: "MODERN RETRO STYLING",
    },
    {
      id: 2,
      img: "/z90026.png",
      title: "Z900",
      tag: "New 2026",
      description: "SUGOMI PERFORMANCE",
      feature: "REFINED SUGOMI STYLING",
      style: "FULLY-LOADED SUPERNAKED",
    },
    {
      id: 3,
      img: "/z110026.png",
      title: "Z1100",
      tag: "New 2026",
      description: "IMU-EQUIPPED ADVANCED ELECTRONICS PACKAGE",
      feature: "5-INCH TFT COLOUR INSTRUMENTATION",
      style: "FIERCE AND INTENSE SUGOMI DESIGN",
    },
    {
      id: 4,
      img: "/z65025.png",
      title: "Z650",
      tag: "2025",
      description: "COMPACT 649 CC PARALLEL TWIN ENGINE",
      feature: "LIGHTWEIGHT TRELLIS FRAME",
      style: "SUGOMI STYLING",
    },
    {
      id: 5,
      img: "/z650rs25.png",
      title: "Z650RS",
      tag: "2025",
      description: "EXCITING 649 CC PARALLEL TWIN ENGINE",
      feature: "LIGHTWEIGHT TRELLIS FRAME",
      style: "LIGHT, NATURAL HANDLING",
    },
    {
      id: 6,
      img: "/zh225.png",
      title: "Z H2",
      tag: "2025",
      description: "UNIQUE KAWASAKI BALANCED SUPERCHARGED ENGINE",
      feature: "ADVANCED ELECTRONIC SYSTEMS THAT SUPPORT VEHICLE CONTROL",
      style: "KQS (KAWASAKI QUICK SHIFTER)",
    },
    {
      id: 7,
      img: "/zh2se25.png",
      title: "Z H2 SE",
      tag: "2025",
      description: "UNIQUE KAWASAKI BALANCED SUPERCHARGED ENGINE",
      feature: "KECS WITH SHOWA SKYHOOK TECHNOLOGY",
      style: "ADVANCED ELECTRONIC SYSTEMS THAT SUPPORT VEHICLE CONTROL",
    },
    {
      id: 8,
      img: "/ninja7hybrid25.png",
      title: "Ninja 7 Hybrid",
      tag: "New 2025",
      description: "WORLD'S FIRST STRONG HYBRID MOTORCYCLE",
      feature: "3 DRIVE MODES (SPORTS-HYBRID, ECO-HYBRID, EV)",
      style: "E-BOOST FUNCTION FOR INSTANT ACCELERATION",
    },
    {
      id: 9,
      img: "/ninjaz7hybrid25.png",
      title: "Z7 Hybrid",
      tag: "New 2025",
      description: "STRONG HYBRID PERFORMANCE",
      feature: "AUTOMATIC OR MANUAL GEAR SHIFTING",
      style: "ZERO EMISSION EV MODE FOR LOW SPEED",
    },
    {
      id: 10,
      img: "/ninjae125.png",
      title: "Ninja e-1",
      tag: "2025",
      description: "DUAL REMOVABLE BATTERIES",
      feature: "E-BOOST & WALK MODE (WITH REVERSE)",
      style: "DISCOVER THE REVOLUTION",
    },
    {
      id: 11,
      img: "/z_e125.png",
      title: "Z e-1",
      tag: "2025",
      description: "BRUSHLESS ELECTRIC MOTOR",
      feature: "LIGHTWEIGHT AND AGILE HANDLING",
      style: "CLEAN GREEN PERFORMANCE",
    },
  ];

  return (
    <div className="z-page">
      <Navbar />
      <Sidebar />

      <div className="z-content">
        <div className="z-hero">
          <h1 className="z-main-title">
            z<span className="title-accent">SERIES</span>
          </h1>
          <p className="z-tagline">
            Raw Power. Refined Soul. The Ultimate Supernaked.
          </p>
        </div>

        <div className="z-card-container">
          {" "}
          {cards.map((card) => (
            <div className="card-main" key={card.id}>
              <div className="card-img">
                <img src={card.img} alt={card.title} />
              </div>

              <div className="card-info">
                {" "}
                <span className="card-tag">{card.tag}</span>
                <h2 className="card-title">{card.title}</h2>
                <div className="card-details">
                  <p className="description">{card.description}</p>
                  <p className="feature">{card.feature}</p>
                  <p className="style">{card.style}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
