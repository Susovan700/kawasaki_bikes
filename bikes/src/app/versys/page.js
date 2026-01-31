"use client";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar/page";
import Sidebar from "../components/sidebar/page";
import "./versys.css";

export default function Ninja() {
  const router = useRouter();

  const cards = [
  {
    id: 1,
    img: "/ninja300t.png",
    title: "Ninja 300",
    tag: "New 2026",
    description: "POWERFUL 296 CC PARALLEL TWIN ENGINE",
    feature: "CIRCUIT-BRED CHASSIS WITH SUPERB HANDLING AND EXCELLENT RIDE QUALITY",
    style: "STUNNING NINJA STYLING WITH HIGH-LEVEL FIT AND FINISH",
  },
  {
    id: 2,
    img: "/zx6rt.png",
    title: "Ninja ZX-6R",
    tag: "New 2026",
    description: "SMOOTH, FLOWING NINJA ZX STYLING",
    feature: "PERFORMANCE OPTIMIZED FOR ADVANTAGE STREET-RIDING EXHILARATION",
    style: "ADVANCED TECHNOLOGY",
  },
  {
    id: 3,
    img: "/ninja650t.png",
    title: "Ninja 650",
    tag: "New 2026",
    description: "KTRC (KAWASAKI TRACTION CONTROL)",
    feature: "SMARTPHONE CONNECTIVITY",
    style: "TFT COLOUR INSTRUMENTATION",
  },
  {
    id: 4,
    img: "/zx10rt.png",
    title: "Ninja ZX-10R",
    tag: "New 2026",
    description: "BUILDING ON WSB-PROVEN PERFORMANCE",
    feature: "STYLED FOR AERODYNAMICS",
    style: "KAWASAKI'S ADVANCED ELECTRONICS",
  },
  {
    id: 5,
    img: "/ninja1100sxt.png",
    title: "Ninja 1100SX",
    tag: "New 2026",
    description: "UPGRADED SPORT RIDING ENJOYMENT",
    feature: "INCREASED TOURING PERFORMANCE",
    style: "SUPERSPORT-STYLE CHASSIS COMPONENTS",
  },
  {
    id: 6,
    img: "/ninja30025t.png", 
    title: "Ninja 300",
    tag: "2025",
    description: "POWERFUL 296 CC PARALLEL TWIN ENGINE",
    feature: "CIRCUIT-BRED CHASSIS WITH SUPERB HANDLING AND EXCELLENT RIDE QUALITY",
    style: "STUNNING NINJA STYLING WITH HIGH-LEVEL FIT AND FINISH",
  },
  {
    id: 7,
    img: "/ninja500t.png",
    title: "Ninja 500",
    tag: "New 2025",
    description: "LIGHTWEIGHT, MANEUVERABLE CHASSIS",
    feature: "POWERFUL, RIDER-FRIENDLY 451 CC PARALLEL-TWIN ENGINE",
    style: "HIGH-CLASS, INTENSE DESIGN",
  },
  {
    id: 8,
    img: "/ninja65025t.png",
    title: "Ninja 650",
    tag: "2025",
    description: "KTRC (KAWASAKI TRACTION CONTROL)",
    feature: "SMARTPHONE CONNECTIVITY",
    style: "TFT COLOUR INSTRUMENTATION",
  },
  {
    id: 9,
    img: "/zx10rt.png",
    title: "Ninja ZX-10R",
    tag: "2025",
    description: "BUILDING ON WSB-PROVEN PERFORMANCE",
    feature: "STYLED FOR AERODYNAMICS",
    style: "KAWASAKI'S ADVANCED ELECTRONICS",
  },
  {
    id: 10,
    img: "/ninjah2sxt.png",
    title: "Ninja H2 SX",
    tag: "2025",
    description: "998 CC IN-LINE FOUR BALANCED SUPERCHARGED ENGINE",
    feature: "ADVANCED RIDER ASSISTANCE SYSTEMS (ARAS)",
    style: "6.5” TFT COLOUR INSTRUMENTATION WITH KAWASAKI SPIN",
  },
  {
    id: 11,
    img: "/ninja1100sxset.png",
    title: "Ninja H2 SX SE",
    tag: "New 2025",
    description: "SUPERCHARGED SPORT TOURING",
    feature: "LEADING-EDGE TECHNOLOGY",
    style: "FLAGSHIP CONVENIENCE FEATURES",
  },
  {
    id: 12,
    img: "/ninja1100sxt.png", 
    title: "Ninja 1100SX",
    tag: "2025",
    description: "UPGRADED SPORT RIDING ENJOYMENT",
    feature: "INCREASED TOURING PERFORMANCE",
    style: "SUPERSPORT-STYLE CHASSIS COMPONENTS",
  },
];

  return (
    <div className="ninja-page">
      <Navbar />
      <Sidebar />

      <div className="ninja-content">
        <div className="ninja-hero">
          <h1 className="ninja-main-title">
            NINJA
            <span className="title-accent">SERIES</span>
          </h1>
          <p className="ninja-tagline">
            All Roads, One Bike. Adventure Everywhere.
          </p>
        </div>

        <div className="ninja-card-container">
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
