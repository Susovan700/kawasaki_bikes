"use client";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar/page";
import Sidebar from "../components/sidebar/page";
import "./klx.css";

export default function klx() {
  const router = useRouter();
const cards = [
  {
    id: 1,
    img: "/klx230t_26.png",
    title: "KLX230",
    tag: "New 2026",
    description: "233 CC FUEL-INJECTED AIR-COOLED FOUR-STROKE SINGLE",
    feature: "CAPABLE OFF-ROAD PERFORMANCE",
    style: "TRAIL-TUNED LONG-TRAVEL SUSPENSION",
  },
  {
    id: 2,
    img: "/klx230rst_26.png",
    title: "KLX230R S",
    tag: "New 2026",
    description: "CAPABLE OFF-ROAD PERFORMANCE",
    feature: "COMPACT, LIGHTWEIGHT, MANOEUVRABLE",
    style: "LATEST KX STYLING WITH SMOOTH-DESIGN BODYWORK",
  },
  {
    id: 3,
    img: "/klx230t_25.png",
    title: "KLX230",
    tag: "2025",
    description: "233 CC FUEL-INJECTED AIR-COOLED FOUR-STROKE SINGLE",
    feature: "CAPABLE OFF-ROAD PERFORMANCE",
    style: "TRAIL-TUNED LONG-TRAVEL SUSPENSION",
  },
  {
    id: 4,
    img: "/klx110rlt.png",
    title: "KLX110RL",
    tag: "2024",
    description: "112 CC AIR-COOLED, 4-STROKE SINGLE",
    feature: "SPORTY RACE-INSPIRED STYLING",
    style: "4-SPEED WITH MANUAL CLUTCH",
  },
  {
    id: 5,
    img: "/klx140ft.png",
    title: "KLX140F",
    tag: "2024",
    description: "EASY, LIGHTWEIGHT & RELIABLE",
    feature: "GREAT TRAIL-RIDING POTENTIAL",
    style: "KX-INSPIRED STYLING",
  },
  {
    id: 6,
    img: "/klx230rst_24.png",
    title: "KLX230R S",
    tag: "2024",
    description: "233 CC FUEL-INJECTED AIR-COOLED FOUR-STROKE SINGLE",
    feature: "CAPABLE OFF-ROAD PERFORMANCE",
    style: "TRAIL-TUNED LONG-TRAVEL SUSPENSION",
  },
  {
    id: 7,
    img: "/klx450rt.png",
    title: "KLX450R",
    tag: "2024",
    description: "449 CC, LIQUID-COOLED, 4-STROKE, DOHC 4-VALVE SINGLE-CYLINDER ENGINE",
    feature: "5-SPEED TRANSMISSION",
    style: "RESPONSIVE, LIGHT-HANDLING CHASSIS",
  }
];

  return (
    <div className="klx-page">
      <Navbar />
      <Sidebar />

      <div className="klx-content">
        <div className="klx-hero">
          <h1 className="klx-main-title">
            klx
            <span className="title-accent">SERIES</span>
          </h1>
          <p className="klx-tagline">
            The World is Your Playground. Get Out and Play.
          </p>
        </div>

        <div className="klx-card-container">
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
