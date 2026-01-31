"use client";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar/page";
import Sidebar from "../components/sidebar/page";
import "./w.css";

export default function w() {
  const router = useRouter();

  const cards = [
  {
    id: 1,
    img: "/w17524.png",
    title: "W175",
    tag: "2024",
    description: "RETRO-CLASSIC STYLING WITH TIMELESS BEAUTY",
    feature: "EASY-TO-USE AIR-COOLED 177 CC SINGLE ENGINE",
    style: "FUEL INJECTION SYSTEM FOR EASY STARTING",
  },
  {
    id: 2,
    img: "/w175blue24.png",
    title: "W175",
    tag: "2024",
    description: "RETRO-CLASSIC STYLING WITH TIMELESS BEAUTY",
    feature: "EASY-TO-USE AIR-COOLED 177 CC SINGLE ENGINE",
    style: "FUEL INJECTION SYSTEM FOR EASY STARTING",
  },
  {
    id: 3,
    img: "/w175street24.png",
    title: "W175 STREET",
    tag: "2024",
    description: "MODERN RETRO STYLING: LIGHTWEIGHT, URBAN, STYLISH",
    feature: "EASY-TO-USE AIR-COOLED 177 CC SINGLE ENGINE",
    style: "FUEL INJECTION SYSTEM FOR EASY STARTING",
  },
  {
    id: 4,
    img: "/w17523.png",
    title: "W175",
    tag: "2023",
    description: "RETRO-CLASSIC STYLING WITH TIMELESS BEAUTY",
    feature: "EASY-TO-USE AIR-COOLED 177 CC SINGLE ENGINE",
    style: "FUEL INJECTION SYSTEM FOR EASY STARTING",
  },
  {
    id: 5,
    img: "/w175red23.png",
    title: "W175",
    tag: "2023",
    description: "RETRO-CLASSIC STYLING WITH TIMELESS BEAUTY",
    feature: "EASY-TO-USE AIR-COOLED 177 CC SINGLE ENGINE",
    style: "FUEL INJECTION SYSTEM FOR EASY STARTING",
  },
  
];

  return (
    <div className="w-page">
      <Navbar />
      <Sidebar />

      <div className="w-content">
        <div className="w-hero">
          <h1 className="w-main-title">
            w
            <span className="title-accent">SERIES</span>
          </h1>
          <p className="w-tagline">
            Classic Styling. Modern Engineering. Timeless Beauty.
          </p>
        </div>

        <div className="w-card-container">
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
