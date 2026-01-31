"use client";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar/page";
import Sidebar from "../components/sidebar/page";
import "./eliminator.css";

export default function eliminator() {
  const router = useRouter();

  const cards = [
    {
      id: 1,
      img: "/eliminator_black25.png",
      title: "ELIMINATOR",
      tag: "New 2025",
      description: "LIGHTWEIGHT, MANEUVERABLE CHASSIS",
      feature: "POWERFUL, RIDER-FRIENDLY 451 CC PARALLEL-TWIN ENGINE",
      style: "LONG & LOW",
    },
    
    {
      id: 2,
      img: "/eliminator_se25.png",
      title: "ELIMINATOR SE",
      tag: "New 2025",
      description: "HEADLIGHT COWL & FORK BOOTS",
      feature: "USB-C OUTLET & SPECIAL SEAT LEATHER",
      style: "LONG, LOW, AND AUTHENTIC",
    },
  ];

  return (
    <div className="eliminator-page">
      <Navbar />
      <Sidebar />

      <div className="eliminator-content">
        <div className="eliminator-hero">
          <h1 className="eliminator-main-title">
            eliminator
            <span className="title-accent">SERIES</span>
          </h1>
          <p className="eliminator-tagline">
            Long, Low, and Authentic. Just Ride.
          </p>
        </div>

        <div className="eliminator-card-container">
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
