"use client";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar/page";
import Sidebar from "../components/sidebar/page";
import "./vulcan.css";

export default function vulcan() {
  const router = useRouter();

  const cards = [
    {
      id: 1,
      img: "/vulcans25.png",
      title: "VULCAN S",
      tag: "New 2026",
      description: "MODERN, URBAN STYLING",
      feature: "LOW SEAT HEIGHT",
      style: "EASY-TO-CONTROL 649 CM3 LIQUID-COOLED, 4-STROKE PARALLEL TWIN",
    },
    {
      id: 2,
      img: "/vulcanscafe26.png",
      title: "VULCAN S CAFE",
      tag: "New 2026",
      description: "SPORTY CAFE-RACER STYLING",
      feature: "ERGO-FIT CUSTOMIZABLE RIDING POSITION",
      style: "SIGNATURE THREE-TONE PAINT & WIND DEFLECTOR",
    },

    {
      id: 3,
      img: "/vulcan900_classic25.png",
      title: "VULCAN 900 CLASSIC",
      tag: "2025",
      description: "903 CC V-TWIN FUEL-INJECTED ENGINE",
      feature: "LOW SEAT HEIGHT AND WIDE HANDLEBARS",
      style: "CLASSIC CRUISER LOOK WITH CHROME ACCENTS",
    },
  ];

  return (
    <div className="vulcan-page">
      <Navbar />
      <Sidebar />

      <div className="vulcan-content">
        <div className="vulcan-hero">
          <h1 className="vulcan-main-title">
            vulcan
            <span className="title-accent">SERIES</span>
          </h1>
          <p className="vulcan-tagline">
            The Soul of a Cruiser. The Heart of a vulcan.
          </p>
        </div>

        <div className="vulcan-card-container">
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
