"use client";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar/page";
import Sidebar from "../components/sidebar/page";
import "./versys.css";

export default function versys() {
  const router = useRouter();

  const cards = [
    {
      id: 1,
      img: "/versysx300t_26.png",
      title: "VERSYS-X 300",
      tag: "New 2026",
      description: "versys-DERIVED 296CC TWIN-CYLINDER ENGINE",
      feature: "LIGHTWEIGHT CHASSIS AND LONG-TRAVEL SUSPENSION",
      style: "UPRIGHT RIDING POSITION",
    },
    {
      id: 2,
      img: "/versys650t_26.png",
      title: "VERSYS 650",
      tag: "New 2026",
      description: "FUN PACKAGE ON WINDING ROADS",
      feature: "MORE COMFORT AND CONVENIENCE",
      style: "EMOTIONAL DESIGN",
    },
    {
      id: 3,
      img: "/versys1100t_26.png",
      title: "VERSYS 1100",
      tag: "New 2026",
      description: "FUN TO RIDE: VERSATILE PERFORMANCE",
      feature: "TOURING COMFORT AND PERFORMANCE TO RIDE LONG AND FAR",
      style: "EMOTIONAL, WELL-INTEGRATED DESIGN",
    },
    {
      id: 4,
      img: "/versysx300t_25.png",
      title: "VERSYS-X 300",
      tag: "2025",
      description: "versys-DERIVED 296CC TWIN-CYLINDER ENGINE",
      feature: "LIGHTWEIGHT CHASSIS AND LONG-TRAVEL SUSPENSION",
      style: "UPRIGHT RIDING POSITION",
    },
    {
      id: 5,
      img: "/versys650t_25.png",
      title: "VERSYS 650",
      tag: "2025",
      description: "FUN PACKAGE ON WINDING ROADS",
      feature: "MORE COMFORT AND CONVENIENCE",
      style: "EMOTIONAL DESIGN",
    },
    {
      id: 6,
      img: "/versys1100t_25.png",
      title: "VERSYS 1100",
      tag: "2025",
      description: "FUN TO RIDE: VERSATILE PERFORMANCE",
      feature: "TOURING COMFORT AND PERFORMANCE TO RIDE LONG AND FAR",
      style: "EMOTIONAL, WELL-INTEGRATED DESIGN",
    },
  ];

  return (
    <div className="versys-page">
      <Navbar />
      <Sidebar />

      <div className="versys-content">
        <div className="versys-hero">
          <h1 className="versys-main-title">
            versys
            <span className="title-accent">SERIES</span>
          </h1>
          <p className="versys-tagline">
            All Roads, One Bike. Adventure Everywhere.
          </p>
        </div>

        <div className="versys-card-container">
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
