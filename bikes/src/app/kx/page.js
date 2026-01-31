"use client";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar/page";
import Sidebar from "../components/sidebar/page";
import "./kx.css";

export default function kx() {
  const router = useRouter();
  const cards = [
    {
      id: 1,
      img: "/kx85t_25.png",
      title: "KX85",
      tag: "2025",
      description: "STRONG 6-SPEED TRANSMISSION",
      feature:
        "RADIATOR SHROUD DESIGN FOR IMPROVED ERGONOMICS AND INCREASED COOLING PERFORMANCE",
      style: "FACTORY-INSPIRED STYLING",
    },
    {
      id: 2,
      img: "/kx250t_25.png",
      title: "KX250",
      tag: "New 2025",
      description: "FACTORY-STYLE ENGINE COMPONENTS & TUNING",
      feature: "FACTORY-STYLE CHASSIS ADVANTAGE COMPONENTS & TUNING",
      style: "ADVANCED TECH AT YOUR FINGERTIPS",
    },
    {
      id: 3,
      img: "/kx450t_25.png",
      title: "KX450",
      tag: "2025",
      description: "UPDATED 449 CC 4-STROKE ENGINE",
      feature:
        "NEW DOWNDRAFT INTAKE, NEW CYLINDER WITH STRAIGHT INTAKE/EXHAUST PORTS, AND NEW CENTRALLY POSITIONED EXHAUST",
      style: "NEW HANDLEBAR-MOUNTED TRACTION CONTROL AND POWER MODE SWITCHES",
    },
    {
      id: 4,
      img: "/kx65t_24.png",
      title: "KX65",
      tag: "2024",
      description: "64 CC LIQUID-COOLED TWO-STROKE SINGLE",
      feature: "ADJUSTABLE Ø33 MM LEADING AXLE CONVENTIONAL FORK",
      style: "ADJUSTABLE UNI-TRAK REAR SUSPENSION",
    },
    {
      id: 5,
      img: "/kx112t_24.png",
      title: "KX112",
      tag: "2024",
      description: "CLASS-LEADING 112 CC ENGINE",
      feature: "STRONG 6-SPEED TRANSMISSION",
      style:
        "RADIATOR SHROUD DESIGNED FOR IMPROVED ERGONOMICS AND INCREASED COOLING PERFORMANCE",
    },
  ];

  return (
    <div className="kx-page">
      <Navbar />
      <Sidebar />

      <div className="kx-content">
        <div className="kx-hero">
          <h1 className="kx-main-title">
            kx
            <span className="title-accent">SERIES</span>
          </h1>
          <p className="kx-tagline">
            The Bike that Builds Champions. Lead the Pack.
          </p>
        </div>

        <div className="kx-card-container">
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
